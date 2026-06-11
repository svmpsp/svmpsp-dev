# 0006. Markdown blog content with sanitized rendering

- **Status:** Accepted
- **Date:** 2026-06-11
- **Deciders:** Sivam Pasupathipillai

## Context

Blog posts are authored and stored as **Markdown** (the `BlogPost.content`
field, [ADR-0005](0005-prisma-sqlite-datastore.md)) and must be rendered as HTML
in the browser. Rendering authored HTML via Svelte's `{@html ...}` bypasses
Svelte's automatic escaping, so any untrusted or mistaken markup — `<script>`,
event handlers, `javascript:` URLs — would execute in visitors' browsers. Even
though posts are authored only through the admin interface, treating rendered
content as trusted would leave a stored-XSS hole if an admin account were ever
compromised or content were imported. The rendering must therefore be safe by
construction.

## Decision

We will render blog Markdown to HTML with **`marked`** and then **sanitize the
result with DOMPurify** before injecting it, using `isomorphic-dompurify` so the
same code path works during SSR and on the client. The canonical pattern lives
in `src/lib/components/blog/BlogPost.svelte`:

```js
$: htmlContent = DOMPurify.sanitize(String(marked.parse(post.content)));
// ... {@html htmlContent}
```

Sanitization is mandatory wherever post content is turned into HTML — never pass
`marked.parse(...)` output to `{@html}` without running it through DOMPurify
first.

## Consequences

- Stored content cannot inject executable scripts or dangerous attributes into
  the rendered page, closing the stored-XSS vector even for admin-authored posts.
- Authors get full Markdown expressiveness without hand-writing safe HTML.
- `isomorphic-dompurify` keeps SSR and client rendering consistent (no
  hydration mismatches) at the cost of an extra dependency over plain
  `dompurify`.
- Any future surface that renders post content (feeds, previews, excerpts as
  HTML) must reuse the same sanitize step; this is an invariant, not a
  per-component choice.

## Alternatives considered

- **Trusting `marked` output directly (`{@html marked.parse(...)}`):** simpler,
  but unsafe — `marked` does not sanitize and explicitly recommends a sanitizer
  for untrusted input. Rejected.
- **A different Markdown library with built-in sanitization (e.g.
  markdown-it + a plugin):** viable, but `marked` + DOMPurify is a well-understood,
  explicit two-step pipeline and DOMPurify is the standard for HTML sanitization.
  Rejected.
- **Rendering Markdown server-side only and storing sanitized HTML:** would move
  the cost out of the client, but keeping content as Markdown in the DB and
  sanitizing at render time keeps the source editable and avoids stale cached
  HTML. Rejected for now.
