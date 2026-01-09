import React from "react";
import Button from './button';
import styled from 'styled-components';
import {AddRounded} from '@mui/icons-material';
const Container = styled.div`
   flex: 1;
   background: ${({theme})=> theme.navbar};
   color: ${({theme})=>theme.text_primary};
   display: flex;
   justify-content: space-between;
   font-weight: bold;
   font-size: 22px;
   padding: 14px 50px;
`;
const Navbar =()=>{
    return(
       <Container>
        GenAI 
        <Button text="Create New Post"
        leftIcon={ <AddRounded 
        style={{fontSize: '18px',}}
         />
        }
        />
       </Container>
    )
}
export default Navbar