import React, {Component} from 'react';
import  Login from './screen/Login'
import Register from './screen/Register'
import Welcome from './screen/Welcome'
import {  createAppContainer } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack"

const AppNavigator = createStackNavigator({
 
  Welcome:{
    screen: Welcome, navigationOptions:{
      header:null
    }
  }, 
  Login: {
    screen: Login, navigationOptions:{
      header:null
    }
  },
 
  Register:{
    screen: Register, navigationOptions:{
      header:null
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}