import React from 'react'
import './style.css'
import AnchorTemporaryDrawer from './drawer'
import Button from '../Button'
import {Link} from 'react-router-dom';
import Search from '../Dashboard/Search';
const Header = () => {
  return (
    <>
      <div className="navbar">
        <h1 className='logo'>
          CrypToTracker<span style={{color:"var(--blue)"}}>.</span>
        </h1>  
        <div className='links'>
          <Link to='/'>
          <p className='link'>Home</p>
          </Link>
          <Link to='/compare'>
          <p className='link'>Compare</p>
          </Link>
          <Link to='/watchlist'>
          <p className='link'>WatchList</p>
          </Link>
          <Link to='/dashboard'>
          <Button text={"Dashboard"} onClick={()=> console.log("edge")} />
          </Link>
        </div>
        <div className="mobile-drawer">
          <AnchorTemporaryDrawer></AnchorTemporaryDrawer>
        </div>
      </div>
      {/* <Search/> */}
    </>
  )
}

export default Header
