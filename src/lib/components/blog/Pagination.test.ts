import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Pagination from './Pagination.svelte';
import type { PaginationInfo } from '$lib/types/blog';

const mockPagination: PaginationInfo = {
  currentPage: 2,
  page: 2,
  limit: 10,
  total: 50,
  totalPages: 5,
  hasNext: true,
  hasPrevious: true,
  hasPrev: true,
};

describe('Pagination', () => {
  it('renders pagination info', () => {
    render(Pagination, { props: { pagination: mockPagination } });
    expect(screen.getByText('Showing page 2 of 5')).toBeInTheDocument();
  });

  it('renders current page number', () => {
    render(Pagination, { props: { pagination: mockPagination } });
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('renders previous button when hasPrev is true', () => {
    render(Pagination, { props: { pagination: mockPagination } });
    expect(screen.getByText('← Previous')).toBeInTheDocument();
  });

  it('renders next button when hasNext is true', () => {
    render(Pagination, { props: { pagination: mockPagination } });
    expect(screen.getByText('Next →')).toBeInTheDocument();
  });

  it('does not render pagination for single page', () => {
    const singlePagePagination: PaginationInfo = {
      currentPage: 1,
      page: 1,
      limit: 10,
      total: 5,
      totalPages: 1,
      hasNext: false,
      hasPrevious: false,
      hasPrev: false,
    };
    render(Pagination, { props: { pagination: singlePagePagination } });
    expect(screen.queryByText('Showing page')).not.toBeInTheDocument();
  });

  it('does not render previous button when hasPrev is false', () => {
    const firstPagePagination: PaginationInfo = {
      ...mockPagination,
      currentPage: 1,
      page: 1,
      hasPrevious: false,
      hasPrev: false,
    };
    render(Pagination, { props: { pagination: firstPagePagination } });
    expect(screen.queryByText('← Previous')).not.toBeInTheDocument();
  });

  it('does not render next button when hasNext is false', () => {
    const lastPagePagination: PaginationInfo = {
      ...mockPagination,
      currentPage: 5,
      page: 5,
      hasNext: false,
    };
    render(Pagination, { props: { pagination: lastPagePagination } });
    expect(screen.queryByText('Next →')).not.toBeInTheDocument();
  });
});
