import React from "react";
import Button from './button';
import styled from 'styled-components';
import {AddRounded, ExploreRounded} from '@mui/icons-material';
import { useLocation, useNavigate } from "react-router-dom";
const Container = styled.div`
   flex: 1;
   background: ${({theme})=> theme.navbar};
   color: ${({theme})=>theme.text_primary};
   display: flex;
   justify-content: space-between;
   font-weight: bold;
   font-size: 22px;
   padding: 14px 50px;
   align-items: center;
   box-shadow: 0 0 10px rgba(0, 0, 0 , 0.15);
  @media only screen and (max-width: 600px){
   padding: 10px 12px;
  } 
`;
const Navbar =()=>{
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split('/');
    return(
       <Container>
        GenAI 
        {
        path[1] === 'post' ? (    
        <Button text="Explore Post"
        onClick={()=> navigate("/")}
        leftIcon={ <ExploreRounded 
        style={{fontSize: '18px',}}
         />
         }
         type="secondary"
        />
        ) : ( 
        <Button text="Create New Post"
        onClick={()=> navigate("/post")}
        leftIcon={ <AddRounded 
        style={{fontSize: '18px',}}
         />
        }
        />)}
       </Container>
    )
}
export default Navbar