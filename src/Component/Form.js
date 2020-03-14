import React from 'react';
import { Button } from './Button.style';
import { FormStyle } from './Form.style';
import Header from './Header'
import Footer from './Footer'
import { CustomFlex } from './CustomFlex.stlye';


const Forms = () => {
    return (
      
        <div>

            <Header />
          
              <FormStyle>
              <div><h2>SIGN UP</h2></div>

              <div>

               <CustomFlex ai = 'flex-start'>
               <label>name</label>
               <input
               placeholder='name'
               type='text'

               /></CustomFlex>

               <CustomFlex ai = 'flex-start'>
               <label>password</label>
               <input
                placeholder='password'
                type='password'
                /></CustomFlex>

                </div>


              <CustomFlex ><Button>Submit</Button></CustomFlex>  
              </FormStyle>
           
              <Footer/ >
        </div>
      
    );
}
export default Forms;