import './App.css';
import AddTest from './components/AddTest/AddTest';
import TestsList from './components/TestsList/TestsList';
import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import QuestionList from './components/QuestionsList/QuestionList';

function App() {

  return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/TestList/TestList' element={<TestsList/>} />
          <Route path='/AddTest/AddTest' element={<AddTest/>} />
        </Routes>
      </div>
  );
}

export default App;
