import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home"
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </main>
    </div>
  );
}

export default App;
