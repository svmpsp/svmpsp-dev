import { render, screen } from '@testing-library/svelte';
import { test, expect } from 'vitest';
import ContactLink from './ContactLink.svelte';

test('ContactLink renders as link element', () => {
  render(ContactLink, {
    props: {
      href: 'https://example.com',
      title: 'Contact me',
      icon: '/icon.svg',
      alt: 'Contact icon',
    },
  });
  expect(screen.getByRole('link')).toBeInTheDocument();
});

test('ContactLink has correct href attribute', () => {
  render(ContactLink, {
    props: {
      href: 'https://example.com',
      title: 'Contact me',
      icon: '/icon.svg',
      alt: 'Contact icon',
    },
  });
  const link = screen.getByRole('link');
  expect(link).toHaveAttribute('href', 'https://example.com');
});

test('ContactLink has correct title attribute', () => {
  render(ContactLink, {
    props: {
      href: 'https://example.com',
      title: 'Contact me',
      icon: '/icon.svg',
      alt: 'Contact icon',
    },
  });
  const link = screen.getByRole('link');
  expect(link).toHaveAttribute('title', 'Contact me');
});

test('ContactLink opens in new tab', () => {
  render(ContactLink, {
    props: {
      href: 'https://example.com',
      title: 'Contact me',
      icon: '/icon.svg',
      alt: 'Contact icon',
    },
  });
  const link = screen.getByRole('link');
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', 'noopener noreferrer');
});

test('ContactLink renders icon with correct src', () => {
  render(ContactLink, {
    props: {
      href: 'https://example.com',
      title: 'Contact me',
      icon: '/icon.svg',
      alt: 'Contact icon',
    },
  });
  const icon = screen.getByRole('img');
  expect(icon).toHaveAttribute('src', '/icon.svg');
});

test('ContactLink icon has correct alt text', () => {
  render(ContactLink, {
    props: {
      href: 'https://example.com',
      title: 'Contact me',
      icon: '/icon.svg',
      alt: 'Contact icon',
    },
  });
  const icon = screen.getByRole('img');
  expect(icon).toHaveAttribute('alt', 'Contact icon');
});

test('ContactLink has contact-link class', () => {
  const { container } = render(ContactLink, {
    props: {
      href: 'https://example.com',
      title: 'Contact me',
      icon: '/icon.svg',
      alt: 'Contact icon',
    },
  });
  expect(container.querySelector('.contact-link')).toBeInTheDocument();
});
