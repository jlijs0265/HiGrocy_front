
import './App.css';
import ProfileCard from './components/ProfileCard';
import SearchBar from './components/SearchBar';
import SideBar from './components/SideBar';
import Router from './route';


function App() {
  return (
    <div className="App">
      <div className='contiainer row'>
        <div className='col-2 p-4'>
          <SideBar></SideBar>
        </div>
        <div className='col-10'>
          <div className='d-flex justify-content-between '>
            <div className='m-3 align-self-center'>
              <SearchBar></SearchBar>
            </div>
            <div className='m-3'>
              <ProfileCard></ProfileCard>
            </div>
          </div>
          <div className=''>
            <Router></Router>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
