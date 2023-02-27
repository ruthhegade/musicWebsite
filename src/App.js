
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/login Page/Header';
import Home from './Component/login Page/Home';
import Login from './Component/login Page/Login';
import Dashboard from './Component/Drawer/Dashboard';
import Errror from './Component/login Page/Errrors';
import {Routes,Route} from "react-router-dom"
import MusicHome from './Component/Drawer/RouteItemList/MusicHome';
import Search from './Component/Drawer/RouteItemList/Search';
import Favourites from './Component/Drawer/RouteItemList/Favourites';
import PlayLists from './Component/Drawer/RouteItemList/PlayLists';
// import { Dashboard } from '@mui/icons-material';

function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details/' element={<Dashboard/>} >
      <Route path="musicHome" exact element={<MusicHome/>}></Route>
            <Route path="search" exact element={<Search/>}></Route>
            <Route path="favourites" exact element={<Favourites/>}></Route>
            <Route path="playlists" exact element={<PlayLists/>}></Route>
      </Route>
      <Route path='*' element={<Errror />} />
    </Routes>
  </>
  );
}

export default App;