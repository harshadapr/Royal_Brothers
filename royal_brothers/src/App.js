import './App.css';
import Blogs from './Components/Blogs'
import Footer from './components/Footer';
import SinglePage from './components/SinglePage';

import Check from './Pages/Check';

import Home from './components/Pages/Home';
import Payment from './Components/Pages/Payment'

import Search from './Components/Search_page/Search'

import {Routes, Route} from 'react-router-dom';



//clear everything before pushing and merging the codes on github

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
    <Search/>
=======

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/checkout' element={<Check />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/search' element={<Search />} />
        <Route path='*' element={<>404</>} />
      </Routes>

      <Footer/>

>>>>>>> dda85600680ca90b5aaa9a8357cf2982c4e4fad5
    </div>
  );
}

export default App;
