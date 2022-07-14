import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { ChatBubbleOutlineOutlined, LightMode, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationsNoneOutlined } from '@mui/icons-material'
import { useContext } from 'react';
import { DarkModeContext } from '../../context/context';

const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext);
  const {darkMode} = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...' />
           <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item" style={{cursor: "pointer"}}>
            {!darkMode ? <DarkModeOutlined className="icon" onClick={() => dispatch({ type: "TOGGLE"})} /> :
            <LightMode color="white" className="icon" onClick={() => dispatch({ type: "TOGGLE"})} /> }
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlined className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlined />
          </div>
          <div className="item">
            <img src="https://cdn.wallpapersafari.com/33/27/0wPzOY.jpg" alt="" className='avatar' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar