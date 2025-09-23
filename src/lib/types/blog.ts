export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPostCreateInput {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  published?: boolean;
}

export interface BlogPostUpdateInput {
  title?: string;
  slug?: string;
  content?: string;
  excerpt?: string;
  published?: boolean;
}

export interface PaginationInfo {
  currentPage: number;
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrevious: boolean;
  hasPrev: boolean;
}

export interface BlogListResponse {
  posts: BlogPost[];
  pagination: PaginationInfo;
}

export interface User {
  id: string;
  email: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthSession {
  userId: string;
  email: string;
  isAdmin: boolean;
  createdAt: Date;
}
