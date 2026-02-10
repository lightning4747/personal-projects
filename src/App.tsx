import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TodoPage from './pages/todo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </Router>
  );
}
export default App;