import React,{Component} from 'react';
import {StyleSheet,Text,View,StatusBar,SafeAreaView} from 'react-native';

import Row from './Components/row';
import Button from './Components/button';
import calculator,{initialState} from './utils/calculator';

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#202020',
    justifyContent:'flex-end'
  },
  value:{
    color:'#fff',
    fontSize:40,
    textAlign:'right',
    marginRight:20,
    marginBottom:10
  }
});

class App extends Component{
  state=initialState;

  handleTap=(type,value)=>{
    this.setState(state=>calculator(type,value,sate));
  }
}
