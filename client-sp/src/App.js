import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';


function App() {
  return (
    <>
    <Router>
      <div id='root' className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;