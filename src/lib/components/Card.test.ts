import { render, screen } from '@testing-library/svelte';
import { test, expect } from 'vitest';
import Card from './Card.svelte';

test('Card renders as div when no href provided', () => {
	const { container } = render(Card, {
		props: { title: 'Test Title', description: 'Test description' }
	});
	const cardElement = container.querySelector('.card');
	expect(cardElement?.tagName).toBe('DIV');
});

test('Card renders as link when href provided', () => {
	const { container } = render(Card, {
		props: { title: 'Test Title', href: 'https://example.com' }
	});
	const cardElement = container.querySelector('.card');
	expect(cardElement?.tagName).toBe('A');
	expect(cardElement).toHaveAttribute('href', 'https://example.com');
});

test('Card renders title correctly', () => {
	render(Card, { props: { title: 'Test Title' } });
	expect(screen.getByText('Test Title')).toBeInTheDocument();
});

test('Card renders subtitle when provided', () => {
	render(Card, {
		props: { title: 'Test Title', subtitle: 'Test Subtitle' }
	});
	expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
});

test('Card does not render subtitle when not provided', () => {
	render(Card, { props: { title: 'Test Title' } });
	expect(screen.queryByText('Test Subtitle')).not.toBeInTheDocument();
});

test('Card renders description when provided', () => {
	render(Card, {
		props: { title: 'Test Title', description: 'Test description content' }
	});
	expect(screen.getByText('Test description content')).toBeInTheDocument();
});

test('Card renders tags when provided', () => {
	render(Card, {
		props: { title: 'Test Title', tags: ['tag1', 'tag2'] }
	});
	expect(screen.getByText('tag1')).toBeInTheDocument();
	expect(screen.getByText('tag2')).toBeInTheDocument();
});

test('Card does not render tags section when no tags provided', () => {
	const { container } = render(Card, {
		props: { title: 'Test Title', tags: [] }
	});
	expect(container.querySelector('.tags')).not.toBeInTheDocument();
});

test('Card applies correct variant class', () => {
	const { container } = render(Card, {
		props: { title: 'Test Title', variant: 'experience' }
	});
	expect(container.querySelector('.card-experience')).toBeInTheDocument();
});

test('Card applies card-link class when href provided', () => {
	const { container } = render(Card, {
		props: { title: 'Test Title', href: 'https://example.com' }
	});
	expect(container.querySelector('.card-link')).toBeInTheDocument();
});