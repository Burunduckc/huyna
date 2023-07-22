import './App.scss';
import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Increment } from './pages/JustIncrmenent';
import { NotFound } from './pages/NotFound';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { Want } from './pages/Want';
const App = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/increment' element={<Increment/>}/>
    <Route path='/cats' element={<About url="https://images11.graziamagazine.ru/upload/img_cache/ad9/ad99521f39944fdfd03bde3737b531c1_cropped_666x666.jpeg" prevUrl='https://fakty.com.ua/wp-content/uploads/2016/08/08/1470624132_20150630205423n.jpg'/>}></Route>
    <Route path='/assorts' element={<Contacts/>}/>
    <Route path='/want' element={<Want/>}/>
    <Route path='*' element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
