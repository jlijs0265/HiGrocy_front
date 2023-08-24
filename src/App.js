
import logo from './logo.svg';
import './App.css';
import Router from './route';
import ProfileCard from "./components/ProfileCard";


function App() {
  return (
    <div className="App">
      <Router></Router>
      <ProfileCard />

    </div>
  );
}

export default App;
