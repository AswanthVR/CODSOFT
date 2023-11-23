import logo from './logo.svg';
import './index.css';
import {BrowserRouter , Route , Router, Routes} from 'react-router-dom'
import AddTask from './Components/AddTask';

function App() { 
    return (
     <div className='bg-gray-700'>
     <BrowserRouter> 
      <Routes>
        <Route path='/' element={<AddTask/>}/>
      </Routes> 
     </BrowserRouter>
     </div>
    )
  } 

export default App;
