import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Coinpage from './pages/Coinpage'
import Dashboardpage from './pages/Dashboardpage'
import Compare from './pages/Compare'; // Import Compare component
import Watchlist from './pages/Watchlistpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/dashboard' element={<Dashboardpage/>} ></Route>
        <Route path='/coin/:id' element={<Coinpage/>} ></Route>
        {/* <Route path='/compare' element={<Compare/>}></Route>
        <Route path='/watchlist' element={<Watchlist/>} ></Route> */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
