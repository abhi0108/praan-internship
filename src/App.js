import './App.css';
import BarChart from './Components/BarChart';
import React, { Component } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import {CgSun} from 'react-icons/cg';
import {HiMoon} from 'react-icons/hi';
import {Admin,Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import TT from './Components/TT';
import { createMuiTheme } from '@material-ui/core/styles';
import Doughnutchart from './Components/Compare';
import Dashboard from './Components/Dashboard';



const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;   
    border-radius: 50%;
    border: none;
    position: fixed;
    right:60px;
    top: 60px;
    z-index:3;
    float:center;
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');



function App() {
const [theme, setTheme] = useState('light');

// The function that toggles between themes
function toggleTheme () {
  // if the theme is not light, then set it to dark
  
  if (theme === 'light') {
    setTheme('dark');
  // otherwise, it should be light
  } else {
    setTheme('light');
  }
}
  

  const [isDarkMode, setIsDarkMode] = useState(() => false);

   const theme2 = createMuiTheme({
     palette: {
       type: 'dark', // Switching the dark mode on is a single property value change.
     },
   });

   const theme3 = createMuiTheme({
    palette: {
      type: 'light', // Switching the dark mode on is a single property value change.
    },
  });
 
  const icon= theme === 'light'?<HiMoon size={30} />:<CgSun size={30} />
  return (
  
   <div>
    
  
    <Admin theme={theme === 'light' ? theme3 : theme2}  dashboard={Dashboard} dataProvider={dataProvider} >
    
    <Resource name="charts" list={BarChart}/>
    <Toggle onClick={toggleTheme}>
      {icon}
    </Toggle>
    <Resource name="Data" list={TT}/>
    <Resource name="Analysis" list={Doughnutchart}/>
    </Admin> 
    </div>
   
  );
}

export default App;
