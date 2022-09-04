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
      {/* <LoginPage /> */}
      <StudentPage />
    </div>
  );
}

export default App;
