import './App.css';
import Blogs from './Components/Blogs'
import Footer from './Components/Footer';
import SinglePage from './Components/SinglePage';

import Check from './Pages/Check';

import Home from './Components/Pages/Home';
import Payment from './Components/Pages/Payment'
import SearchForm from './Components/SearchForm';

import {Routes, Route} from 'react-router-dom';



//clear everything before pushing and merging the codes on github

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/checkout' element={<Check />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/search' element={<SearchForm />} />
        <Route path='*' element={<>404</>} />
      </Routes>

      <Footer/>

    </div>
  );
}

export default App;
