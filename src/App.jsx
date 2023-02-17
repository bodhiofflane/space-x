import {HashRouter, Routes, Route} from 'react-router-dom';

import Header from './layout/Header/Header';

import Home from './Pages/Home/Home';
import Tech from './Pages/Tech/Tech';
import Timetable from './Pages/Timetable/Timetable';
import Guarantees from './Pages/Guarantees/Guarantees';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';
import Page404 from './Pages/Page404/Page404';

import './app.scss';

function App() {
  return (
    <HashRouter>
      <div className="wrapper">
        <Header />

        <main className="main">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/tech"
              element={<Tech />}
            />
            <Route
              path="/timetable"
              element={<Timetable />}
            />
            <Route
              path="/guarantees"
              element={<Guarantees />}
            />
            <Route
              path="/about"
              element={<About />}
            />
            <Route
              path="/contacts"
              element={<Contacts />}
            />
            <Route
              path="*"
              element={<Page404 />}
            />
          </Routes>
        </main>

        <footer className="footer"></footer>
      </div>
    </HashRouter>
  );
}

export default App;
