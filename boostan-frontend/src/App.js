import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import StudentPage from './components/StudentPage';

import './App.css';
import './components/styles/LoginPage.css'
import './components/styles/StudentHeader.css'
import './components/styles/StudentBookClass.css'
import './components/styles/StudentClassCard.css'
import './components/styles/ClassInfo.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/StudentPage/register" element={<StudentPage tab={'register'} />} />
          <Route path="/StudentPage/my_classes" element={<StudentPage tab={'my_classes'} />} />
          <Route path="/StudentPage/prev_semesters" element={<StudentPage tab={'prev_semesters'} />} />
          <Route path="/StudentPage/reviews" element={<StudentPage tab={'reviews'} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
