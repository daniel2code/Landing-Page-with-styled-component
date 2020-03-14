import React from "react";
import Header from "./Header";
import Forms from "./Form";
import Footer from './Footer'
import Body from './Body'
const UiDesign = () => {
  return (
    <div id='host'style={{height:'min-content'}}>
      <Header  />
      <Forms />
      <Body />
      <Footer  />
    </div>
  );
};
export default UiDesign;
