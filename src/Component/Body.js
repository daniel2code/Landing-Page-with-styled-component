import React, { Component } from "react";
import "./Bstyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export default class Body extends Component {
render() {
return (
  <div id="body">
    <div className="bdtxt">
      <div className="bdtxt2">
        <div className="t1">Learn on your schedule</div>
        <div className="t2">
          Study any topic, anytime. Explore thousands of <br />
          courses starting at $11.99 each.{" "}
        </div>
        <div className="dinp">
          <input
            className="input"
            type="text"
            placeholder="What do you want to learn?"
          />
          <div className="ftt-container">
            <div className="ftt">
              <FontAwesomeIcon color="red" icon={faSearch} className='fa'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
  }
}
