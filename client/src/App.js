import logo from './logo.svg';
import './App.css';
import './components/AddUser'

// Components
import AddUser from './components/AddUser';
import NavBar  from './components/NavBar';
import CodeforInterview  from './components/CodeForInterview';
import AllUser from './components/AllUsers';

import { BrowserRouter, Routes , Route } from 'react-router-dom' 
function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path = "/" element = {<CodeforInterview/>} />
            <Route path='/add' element = {<AddUser/>} />
            
            <Route path = '/all' element = {<AllUser/>}  />
            

        </Routes>
        
    </BrowserRouter>
      
  );
}

export default App;
