// src/routes.jsx
import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Components/Pages/Home';
import AboutPage from './Components/Pages/AboutPage';
import ServicePage from './Components/Pages/ServicePage';
import WorkPage from './Components/Pages/WorkPage';
import WorkFlow from './Components/Pages/WorkFlow';
import Contact from './Components/Pages/Contact';
import Career from './Components/Pages/Career';

// SubPages
import Architectural from './Components/SubPages/Architectural';
import Product from './Components/SubPages/Product';
import Event from './Components/SubPages/Event';
import Brand from './Components/SubPages/Brand';
import Marketing from './Components/SubPages/Marketing';

const appRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/services', element: <ServicePage /> },
  { path: '/work', element: <WorkPage /> },
  { path: '/work-flow', element: <WorkFlow /> },
  { path: '/career', element: <Career /> },
  { path: '/contact', element: <Contact /> },

  // SubPages Routes
  { path: '/work/architectural', element: <Architectural /> },
  { path: '/work/product', element: <Product /> },
  { path: '/work/event', element: <Event /> },
  { path: '/work/brand', element: <Brand /> },
  { path: '/work/marketing', element: <Marketing /> },
];

export const AppRoutes = appRoutes.map((route, index) => (
  <Route key={index} path={route.path} element={route.element} />
));
