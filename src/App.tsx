import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PageLayout } from './components/layout/PageLayout';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { ProjectDetails } from './pages/ProjectDetails';
import { Studio } from './pages/Studio';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:slug" element={<ProjectDetails />} />
          <Route path="studio" element={<Studio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
