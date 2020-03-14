import React, { Component } from 'react'
import { FooterFlex } from './FooterFlex.style'
import { CustomFlex } from './CustomFlex.stlye.js'
// import { Size } from './CustomFlex.stlye'
import { Button } from './Button.style'
import google from './google.png'

// import './Footer.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFemale, faDoorOpen, faGlobeAfrica, faFootballBall} from "@fortawesome/free-solid-svg-icons";
class Footer extends Component{
    render() {
        return (
          // <FontAwesomeIcon icon={faFemale} color="orangered" />
          // <FontAwesomeIcon icon={faFootballBall} color="orangered" />
          // <span>(c) Jesus Kingdom 2020</span>
          // <FontAwesomeIcon icon={faGlobeAfrica} color="orangered" />
          // <FontAwesomeIcon icon={faDoorOpen} color="orangered" />
          <div>

            <FooterFlex>

            <CustomFlex row= {true}>

            <div className='links'>
            <a href='wwww.me'>Service</a>
            <a href='wwww.me'>About Us</a>
            </div>

            <CustomFlex>

            <div className='imageC'>
            
            <img src={google} alt='an icon' className='icon'/>
            <img src={google} alt='an icon' className='icon'/>
            <img src={google} alt='an icon' className='icon'/>
           
            </div>
            
            <div> <Button>Download</Button> </div>
            
            </CustomFlex>
            
            </CustomFlex>
            
            </FooterFlex>
            
            
          </div>
          );
        }
}
export default Footer;