import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Layout from './components/layout/Layout';
import { Analytics } from "@vercel/analytics/next"

// Lazy-loaded pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const KNestLMS = lazy(() => import('./pages/products/KNestLMS'));
const LearningTrainingSolutions = lazy(() => import('./pages/services/LearningTrainingSolutions'));
const CustomSoftwarePlatforms = lazy(() => import('./pages/services/CustomSoftwarePlatforms'));
const GameDevelopmentSimulations = lazy(() => import('./pages/services/GameDevelopmentSimulations'));
const ELearningXRARVR = lazy(() => import('./pages/services/ELearningXRARVR'));
const ConsultingArchitecture = lazy(() => import('./pages/services/ConsultingArchitecture'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Resources = lazy(() => import('./pages/Resources'));
const Company = lazy(() => import('./pages/Company'));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-gray">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
        <p className="mt-4 text-medium-gray font-body text-sm">Loading…</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/k-nest-lms" element={<KNestLMS />} />
            <Route path="/services/learning-training-solutions" element={<LearningTrainingSolutions />} />
            <Route path="/services/custom-software-platforms" element={<CustomSoftwarePlatforms />} />
            <Route path="/services/game-development-simulations" element={<GameDevelopmentSimulations />} />
            <Route path="/services/vr-ar-xr-solutions" element={<ELearningXRARVR />} />
            <Route path="/services/consulting-architecture" element={<ConsultingArchitecture />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/company" element={<Company />} />
            {/* Catch-all: redirect to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
        <Analytics />
      </Layout>
    </BrowserRouter>
  );
}
