import React from "react";
import styled from 'styled-components';
import SearchBar from "../components/SearchBar";

const Container = styled.div`
   height: 100%;
   overflow-y: scroll;
   background: ${({theme})=> theme.bg};
   padding: 30px 30px;
   padding-bottom: 50px;
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 20px";
   @media(max-width: 768){
   padding: 6px 10px;
   }
`;

const Headline = styled.div`
   color: ${({theme})=> theme.text_primary};
   font-size: 34px;
   font-weight: 500;
   display: flex;
   flex-direction: column;
   align-items: center;
   @media(max-width: 600px){
   font-size: 22px;
   }
`;

const Span = styled.div`
   color: ${({theme})=> theme.secondary};
   font-size: 30px;
   font-weight: 800;
   @media(max-width: 600px){
   font-size: 20px;
   }
`;

const Home = () =>{
    return(
        <Container>
            <Headline>
                Explore popular posts in the Community!
                <Span>Generated with AI</Span>
            </Headline>
            <SearchBar/>
        </Container>
    )
}
export default Home