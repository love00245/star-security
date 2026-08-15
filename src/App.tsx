import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ModalProvider } from './context/ModalContext'
import { ModalRoot } from './components/ui/ModalRoot'
import { ScrollToTop } from './components/shared/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Sectors = lazy(() => import('./pages/Sectors'))
const SectorDetail = lazy(() => import('./pages/SectorDetail'))
const About = lazy(() => import('./pages/About'))
const Clients = lazy(() => import('./pages/Clients'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageFallback() {
  return <div className="min-h-[70vh]" aria-busy="true" aria-live="polite" />
}

export default function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-bg-primary text-chalk">
          <Navbar />
          <main className="flex-1">
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/sectors" element={<Sectors />} />
                <Route path="/sectors/:slug" element={<SectorDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
        <ModalRoot />
      </ModalProvider>
    </BrowserRouter>
  )
}
