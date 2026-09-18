import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useOutletContext } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { RootLayout } from './layouts/RootLayout';

// Lazy Loaded Independent Pages
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./pages/Services').then(m => ({ default: m.Services })));
const Gallery = lazy(() => import('./pages/Gallery').then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Login = lazy(() => import('./pages/Login').then(m => ({ default: m.Login })));

// Scroll restoration helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Loading Fallback Component
function PageLoadingFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
      <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-bold text-xl shadow-lg animate-pulse mb-4">
        SR
      </div>
      <div className="w-6 h-6 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin" />
      <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 font-medium">
        Loading S.R Medical Store...
      </p>
    </div>
  );
}

// Route wrappers that access RootLayout context
function HomeRoute() {
  const { onOpenOrderModal } = useOutletContext<{ onOpenOrderModal: (med?: string) => void }>();
  return <Home onOpenOrderModal={onOpenOrderModal} />;
}

function ServicesRoute() {
  const { onOpenOrderModal } = useOutletContext<{ onOpenOrderModal: (med?: string) => void }>();
  return <Services onOpenOrderModal={onOpenOrderModal} />;
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <HomeRoute />
                </Suspense>
              }
            />
            <Route
              path="about"
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="services"
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <ServicesRoute />
                </Suspense>
              }
            />
            <Route
              path="gallery"
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <Gallery />
                </Suspense>
              }
            />
            <Route
              path="contact"
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="login"
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <Login />
                </Suspense>
              }
            />
            {/* Fallback route back to home */}
            <Route
              path="*"
              element={
                <Suspense fallback={<PageLoadingFallback />}>
                  <HomeRoute />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
