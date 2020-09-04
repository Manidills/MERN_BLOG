import React from 'react';
import styled from 'styled-components';
import logo from '../../man.png';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <NavbarContainer>
               <nav class="navbar navbar-expand-lg navbar-light px-5 py-0">
  <Link class="navbar-brand" href="#"><img style={{width: '50px'}}src={logo} alt='logo'/></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/add-article">Add Article</Link>
      </li>
      
    </ul>
   
  </div>
</nav>
        </NavbarContainer>
    )
}

export default Navbar


const NavbarContainer = styled.div`
    background: var(--dark-green);
    .nav-link {
        color: #ffff !important;
        &:hover{
            background: var(--light-green);
        }
    }
`;