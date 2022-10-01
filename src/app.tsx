import { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import Layout from './hoc/layout';
import Home from './pages/home';
import NotFound from './pages/not-found';

config.autoAddCss = true;
library.add(fab, fas, far);

export default function App(): ReactElement {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}
