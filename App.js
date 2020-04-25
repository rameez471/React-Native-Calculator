import React,{Component} from 'react';
import {SectionList,StyleSheet,Text,View, Button } from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>11*11</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
            <View style={styles.numbers}>
              <View style={styles.row}>
                <Button title='0'/>
                <Button title='1'/>
                <Button title='2'/>
              </View>
              <View style={styles.row}>
                <Button title='4'/>
                <Button title='5'/>
                <Button title='6'/>
              </View>
              <View style={styles.row}>
                <Button title='7'/>
                <Button title='8'/>
                <Button title='9'/>
              </View>
              <View style={styles.row}>
                <Button title='0'/>
                <Button title='0'/>
                <Button title='0'/>
              </View>
            </View>
            <View style={styles.operations}>
                <Button title='+'/>
                <Button title='+'/>
                <Button title='+'/>
                <Button title='+'/>
            </View>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  calculationText:{
    fontSize:14,
    color:'white'
  },  
  resultText:{
    fontSize:20,
    color:'white'
  },
  row:{
    flexDirection:'row',
    flex:1,
    justifyContent:'space-around',
    alignItems:'center'
  },
  result:{
    flex:2,
    backgroundColor:'red',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  calculation:{
    flex:1,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  buttons:{
    flexGrow:7,
    flexDirection:'row'
  },
  numbers:{
    flex:3,
    backgroundColor:'yellow'
  },
  operations:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'stretch',
    backgroundColor:'black'
  }
})

export default App;