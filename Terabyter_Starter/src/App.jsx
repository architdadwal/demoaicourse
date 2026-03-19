import { useEffect, useMemo, useState } from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Work from './pages/Work.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import SiteHeader from './components/SiteHeader.jsx'

function getPathFromHash() {
  const raw = window.location.hash || '#/'
  const path = raw.replace(/^#/, '') || '/'
  return path.startsWith('/') ? path : `/${path}`
}

export default function App() {
  const [path, setPath] = useState(getPathFromHash())

  useEffect(() => {
    const onChange = () => setPath(getPathFromHash())
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  const routes = useMemo(
    () => ({
      '/': <Home />,
      '/about': <About />,
      '/services': <Services />,
      '/work': <Work />,
      '/contact': <Contact />,
    }),
    [],
  )

  const page = routes[path] ?? <NotFound />

  return (
    <>
      <SiteHeader path={path} />
      <main style={{ flex: 1 }}>{page}</main>
      <SiteFooter />
    </>
  )
}
