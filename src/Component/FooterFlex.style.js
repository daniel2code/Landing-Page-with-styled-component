import styled, { css } from "styled-components";


export const FooterFlex = styled.footer`
   
 height: 20vh;
 width: 100vw;
 background: blue;
 display: flex;
 align-items: center;

 .icon{
     height:20px;
     width: 50px;
 }

 .links{
     display: flex;
     flex-direction: column;
     color: white;
 }

 a{
     text-decoration: none;
     color: white;
 }

 .imageC{
     left:0;
     right:0;
     bottom:0;
     top:0;
     margin: auto;
 }
 
 `;