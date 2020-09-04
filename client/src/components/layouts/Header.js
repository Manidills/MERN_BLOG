import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <MainContainer>
            <h1> <br /></h1>
            
        </MainContainer>
    )
}

export default Header

const MainContainer = styled.header`background: url(../../images/iron.gif) no-repeat top/cover; height: 20rem; h1 {
    
    color: #D67449;
    text-align: center;
    position:relative;
    bottom:-200px;
    font-size:54px;
   
}`;



