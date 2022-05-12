import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { DarkModeContext } from '../../context/context';

const Sidebar = () => {
    
  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{ textDecoration: "none"}}>
                <span className="logo">Exclusive Ideas</span>
            </Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">
                    MAIN
                </p>
                <li>
                    <DashboardIcon className="icon" />
                    <span>Dashboard</span>
                </li>
                <p className="title">
                    LISTS
                </p>
                <Link to="/users" style={{ textDecoration: "none"}}>
                <li>
                    <PeopleAltOutlinedIcon className="icon" />
                    <span>Users</span>
                </li>
                </Link>
                <Link to="/products" style={{ textDecoration: "none"}}>
                <li>
                    <StoreIcon className="icon" />
                    <span>Products</span>
                </li>
                </Link>
                <li>
                    <CreditCardIcon className="icon" />
                    <span>Orders</span>
                </li>
                <li>
                    <DepartureBoardIcon className="icon" />
                    <span>Delivery</span>
                </li>
                
                <p className="title">
                    USEFUL
                </p>
                <li>
                    <AssessmentIcon className="icon" />
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsNoneIcon className="icon" />
                    <span>Notifications</span>
                </li>
                <p className="title">
                    SERVICE
                </p>
                <li>
                    <LocalHospitalIcon className="icon" />
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className="icon" />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className="icon" />
                    <span>Settings</span>
                </li>
                <p className="title">
                    USER
                </p>
                <li>
                    <AccountCircleOutlinedIcon className="icon" />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutOutlinedIcon className="icon" />
                    <span>Log Out</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})} ></div>
            <div className="colorOption" onClick={() => dispatch({type: "DARK"})} ></div>
        </div>
    </div>
  )
}

export default Sidebar