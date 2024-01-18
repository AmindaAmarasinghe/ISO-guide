import React, { Component } from "react"
import './NavBar.css';
import { Link } from "react-router-dom";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import HomeIcon from '@mui/icons-material/Home';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import SideBar from "./SideBar";

class NavBar extends Component {
    
  state = {
    click: true,
    open: true
  };

  handleMenu = () => {
    this.setState({ click: !this.state.click });
  };

  closeMenu = (page_num) => {
    this.setState({ click: true});
  };
  toggleOpen = () => {
    let currentV = this.state.open;
    this.setState({open:!currentV});
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-container">
            <SideBar />
            <a className="navbar-logo" to="/" style={{width:'800px',height:'100%'}}>
              <img src="favicon.ico" alt="" style={{width:'90px',height:'100%', marginLeft:'20px',marginRight:'20px'}} />
              <h2 style={{color:'white'}}>ISO GUIDE</h2>
            </a>
            <ul className={!this.state.click ? "nav-menu active" : "nav-menu"} >


              <li className="nav-item">
                <a
                  href="home"
                  className={
                    this.props.page_no == 1
                      ? "nav-links current-page"
                      : "nav-links"
                  }
                  onClick={() => this.closeMenu(1)}
                >
                  HOME
                </a>
              </li>


              <li className="nav-item">
                <a
                  href="/login"
                  className={
                    this.props.page_no == 2
                      ? "nav-links current-page"
                      : "nav-links"
                  }
                  onClick={() => this.closeMenu(2)}
                >
                  Login
                </a>
              </li>


              <li className="nav-item">
                <a
                  href="/register"
                  className={
                    this.props.page_no == 3
                      ? "nav-links current-page"
                      : "nav-links"
                  }
                  onClick={() => this.closeMenu(3)}
                >
                  Sign up
                </a>
              </li>


            </ul>
             
            
           

           
          
          </div>

          

        </nav>
      </>
    );
  }
}
export default NavBar;