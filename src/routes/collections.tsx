import { createFileRoute, Outlet } from '@tanstack/react-router';
export const Route = createFileRoute('/collections')({
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search.category === 'string' ? search.category : undefined,
  }),
  component: () => <Outlet/>,
});
