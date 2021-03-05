
import React from 'react';
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import  {HelpOutline}from '@material-ui/icons';


function Header() {
    return (
        <HeaderContainer>

           
            {/* Header Left */}
            <HeaderLeft>
                <HeaderAvatar 
                //  ToDo: Add onclick
                
                
                />
                <AccessTimeIcon />

            </HeaderLeft>

            {/* Header Search */}
            <HeaderSearch>
                <SearchIcon />
                <input placeholder="search Prashant Gautam"></input>
            </HeaderSearch>

            {/* Header Right */}
            <HeaderRight>
                <HelpOutline />
            </HeaderRight>
            
        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer =  styled.div`
display:flex;
position:fixed;
width:100%;
align-items: center;
justify-content:space-between;
padding:10px 0;
background-color: var(--slack-color);
color: white;
`;

const HeaderLeft = styled.div`
flex:0.3;
display:flex;
align-items:center;
margin-left: 20px;

>.MuiSvgIcon-root{
    margin-left:auto;
    margin-right:30px;

}
`;

const HeaderAvatar = styled(Avatar)`
cursor: pointer;
:hover{
    opacity:0.7;
}
`;




const HeaderSearch = styled.div`
flex:0.4;
opacity:1;
border-radius:7px;
background-color:#421d44;
text-align: center;
display: flex;
padding:0 50px;
color: gray;
border: 1px gray solidcolor;

> input{
    background-color: transparent;
    border: none;
    text-align:center;
    min-width: 30vw;
    outline: 0;
    color: white;
}
`;


const HeaderRight = styled.div`
flex:0.3;
display:flex;
align-items:flex-end;
>.MuiSvgIcon-root{
    margin-left:auto;
    margin-right:20px;
}

`;
