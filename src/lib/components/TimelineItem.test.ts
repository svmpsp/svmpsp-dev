import { render, screen } from '@testing-library/svelte';
import { test, expect } from 'vitest';
import TimelineItem from './TimelineItem.svelte';

test('TimelineItem renders year', () => {
	render(TimelineItem, {
		props: {
			year: '2023',
			title: 'Senior Developer',
			location: 'Tech Corp'
		}
	});
	expect(screen.getByText('2023')).toBeInTheDocument();
});

test('TimelineItem renders title', () => {
	render(TimelineItem, {
		props: {
			year: '2023',
			title: 'Senior Developer',
			location: 'Tech Corp'
		}
	});
	expect(screen.getByText('Senior Developer')).toBeInTheDocument();
});

test('TimelineItem renders location', () => {
	render(TimelineItem, {
		props: {
			year: '2023',
			title: 'Senior Developer',
			location: 'Tech Corp'
		}
	});
	expect(screen.getByText('Tech Corp')).toBeInTheDocument();
});

test('TimelineItem title renders as h3 element', () => {
	render(TimelineItem, {
		props: {
			year: '2023',
			title: 'Senior Developer',
			location: 'Tech Corp'
		}
	});
	const heading = screen.getByRole('heading', { level: 3 });
	expect(heading).toHaveTextContent('Senior Developer');
});

test('TimelineItem has timeline-item class', () => {
	const { container } = render(TimelineItem, {
		props: {
			year: '2023',
			title: 'Senior Developer',
			location: 'Tech Corp'
		}
	});
	expect(container.querySelector('.timeline-item')).toBeInTheDocument();
});

test('TimelineItem has timeline-dot', () => {
	const { container } = render(TimelineItem, {
		props: {
			year: '2023',
			title: 'Senior Developer',
			location: 'Tech Corp'
		}
	});
	expect(container.querySelector('.timeline-dot')).toBeInTheDocument();
});

test('TimelineItem dot is not active by default', () => {
	const { container } = render(TimelineItem, {
		props: {
			year: '2023',
			title: 'Senior Developer',
			location: 'Tech Corp'
		}
	});
	const dot = container.querySelector('.timeline-dot');
	expect(dot).not.toHaveClass('active');
});

test('TimelineItem dot is active when active prop is true', () => {
	const { container } = render(TimelineItem, {
		props: {
			year: '2023',
			title: 'Senior Developer',
			location: 'Tech Corp',
			active: true
		}
	});
	const dot = container.querySelector('.timeline-dot');
	expect(dot).toHaveClass('active');
});

test('TimelineItem has timeline-content wrapper', () => {
	const { container } = render(TimelineItem, {
		props: {
			year: '2023',
			title: 'Senior Developer',
			location: 'Tech Corp'
		}
	});
	expect(container.querySelector('.timeline-content')).toBeInTheDocument();
});

test('TimelineItem handles different year formats', () => {
	render(TimelineItem, {
		props: {
			year: '2020-2023',
			title: 'Full Stack Developer',
			location: 'Remote'
		}
	});
	expect(screen.getByText('2020-2023')).toBeInTheDocument();
	expect(screen.getByText('Full Stack Developer')).toBeInTheDocument();
	expect(screen.getByText('Remote')).toBeInTheDocument();
});