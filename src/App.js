import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import styled from "styled-components";
import Chat from "./components/Chat";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import Login from "./components/Login";
import Spinner from"react-spinkit";
function App() {
  const [user,loading] = useAuthState(auth);
  if(loading){
    return (
      <AppLoading>
        <AppLoadingContents>
          <img 
          src="https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-5guop3/Slack_RGB.jpg"
          alt ="Slack Logo"
          />
          <Spinner
           name="ball-spin-fade-loader"
           color="purple"
           fadeIn="none"
          
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }
  return (
    <div className="app">
      
      <Router>
        {!user ?(
          <Login />
        ):(
          <>
           <Header />
           <AppBody>
              <SideBar/>
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>

            </AppBody>
        
          </>
        )}
      </Router>
      
    </div>
  );
}


export default App;

const AppBody = styled.div`
display:flex;
height:100vh;
`;

const AppLoading = styled.div`
display:grid;
place-items:center;
height:100vh;
width:100%;
`;
const AppLoadingContents = styled.div`
  display: flex;
  text-align:center;
  padding-bottom:100px;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  >img{
    height:100px;
    padding:20px;
    margin-bottom:40px;

    
  }
`;

