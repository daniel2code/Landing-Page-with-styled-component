import React from "react";
import pic from "./Images/flash.jpg";
import picx from './Images/flash4.png'
import "./Styles/Cool.css";

const Page = () => {
  return (
      //         <h2>
      //   <span className="char1">D</span>
      //   <span className="char2">E</span>
      //   <span className="char3">S</span>
      //   <span className="char4">I</span>
      //   <span className="char5">G</span>
      //   <span className="char6">N</span>
      //   <span className="char7">E</span>
      //   <span className="char8">R</span>
      
      
        
      // </h2>
    <div>
      <div className="parent">
        <div className="section1">
        <div className='sub'>
          <div className="img">
            {" "}
            <img src={pic} alt="this is" />{" "}
          </div>
          <div className="text">
            <div className='name'>
              {" "}
              <h4>I AM A </h4>{" "}
            </div>
            <div className='name'>
              {" "}
              <h1>DESIGNER</h1>
            </div>
            <div className='name'>
              {" "}
              <p className='parb'>I WANT TO IMAGINE THE IMPOSSIBLE.</p>
            </div>
          </div>
          <div className='btn'>
            <button><b>DISCOVER MORE </b></button>
            </div>
          </div>
        </div>

        <div className="section2">
<div className='sub'>  
        <div className="img">
            {" "}
            <img src={picx} alt="thissi" />{" "}
          </div>
          <div className="text">
           <div className='name'> <h4>I AM A </h4></div>
           <div className='name'>  <h1>DEVELOPER</h1></div>
           <div className='name'> <p className='para'>I WANT TO BUILD THE IMPOSSIBLE.</p></div>
          </div>
          <div className='btn'>
            <button><b> DISCOVER MORE </b></button>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Page;
