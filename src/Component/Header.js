<<<<<<< HEAD
import React, { Component } from "react";
import { HeaderContainer } from "./Headercss";
import { Button } from "./Button.style";
import Logo from "./google.png";
class Header extends Component {
  state = {
    toggle: true,
    openMenu: undefined
  };

  handleOpenMenu = () => {
    this.setState(prevState => ({
      openMenu: !prevState.openMenu
    }));
    console.log(this.state.openMenu);
  };
  // itoggle = () => {
  //   this.refs.navBar.style.visibility = "visible";
  //   this.setState({ toggle: this.state.toggle });
  // };

  // itoggleAgain = () => {
  //   this.refs.navBar.style.visibility = "hidden";
  // };

  render() {
    const { openMenu } = this.state;

    return (
     
        <HeaderContainer openMenu={openMenu}>
          {/* <!-- ----------DIV 1---------------------------- --> */}
          <div className="imageMain">
            <div
              className="menu_icon_div"
              onClick={() => this.handleOpenMenu()}
            >
              <div className="menu_icon"></div>
              <div className="menu_icon"></div>
              <div className="menu_icon"></div>
            </div>
            <div className="imagediv flex">
              <img className="logo" src={Logo} alt="" />
            </div>
          </div>
          {/* <!-- ----------DIV 2--------------------------------- --> */}

          <div className="navBar " ref="navBar">
            <div className="navBarSub flex">
              <div className="header_ul">
                <ul className="ul">
                  <li className="li">
                    <a className="header_a" href="/">
                      Services
                    </a>
                  </li>
                  <li className="li">
                    <a className="header_a" href="/">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <Button>Download Now</Button>
              </div>
            </div>
          </div>
        </HeaderContainer>
      
    );
  }
}
export default Header;
=======
import React from 'react';
import './Styles/Header.css'
import logo from './Images/omni.png'

class Header extends React.Component{
    render(){
        return(
            <div className='parent'>

            <div className='nav' >

            <div className='logo'>
            <img src={logo} alt='logo' />
            </div>

            <div className='link'>
            
            <a href='www.go'>FOOD DELIVERIES</a>
            <a href='www.go'>HOW IT WORKS</a>
            <a href='www.go'>OUR CITIES</a>
            <a href='www.go'>SIGN UP</a>
            
            </div>
            
            </div>

            <div className='body-text'>
            <p>GOODBYE JUNK FOOD</p>
            <p>HELLO SUPER HEALTHY MEALS</p>
            
            </div>

            <div className='button'>
            <button className='btn1'>Am hungry</button>
            <button className='btn2'>Show me more</button>
            </div>
            
            </div>
        )
    }
}export default Header;
>>>>>>> 94e49315013afc3d4c059bfa7b819eaf76fc24d4
