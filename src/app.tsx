import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppRoutes } from './routes'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './index.css'

// Create a query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
    },
  },
})

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollToTop />
      <AppRoutes />
    </QueryClientProvider>
  )
}
