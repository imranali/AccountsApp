import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext,  useState } from 'react'
import { AuthContext } from '../context/authContext'


const LoginScreen = () => {


const [email, setEmail] = useState('');
const [password, setPassword]  = useState('');
const {UserLogin} = useContext(AuthContext);

return (


  <View style={styles.containerfluid}>

      <View style={styles.shape1}>

      </View>
      <View style={styles.shape2}>

      </View>

     

  <KeyboardAvoidingView
   style={styles.container}
  >

      <View style={styles.welComeContainer}>
      <Text style={styles.textWelCome}>Welcome Back!</Text>
      </View>
  
   
   <View style={styles.inputContainer}>        
        <TextInput
        placeholder='Email'
        style={styles.input}
        value={email}
        onChangeText={text => {setEmail(text)}}
        ></TextInput>
  
        <TextInput
        placeholder='Password'
        style={styles.input}        
        secureTextEntry
        value={password}
        onChangeText={text=> {setPassword(text)}}
        ></TextInput>

   </View>

   <View
        style={styles.buttonContainer}
        >

        <TouchableOpacity 
        style={styles.button}
        onPress={() => UserLogin(email, password)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        </View>
   </KeyboardAvoidingView>
      
  
  
  </View>


  )
}

export default LoginScreen

const styles = StyleSheet.create({

  containerfluid: {

     width: '100%',
     height:'100%',
     margin: 0
  },

  shape1 :{

       width:150,
       height:150,
       borderRadius: 150/2,
       marginTop:-75,
       marginLeft:0,
       backgroundColor:"rgba(124, 153, 169, 0.57)"

  },
  shape2 :{

    width:150,
    height:150,
    borderRadius: 150/2,
    marginTop:-100,
    marginLeft:-50,
    backgroundColor:"rgba(124, 153, 169, 0.57)"
 

},
  container : {
    
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  
  welComeContainer: {
  
    width: '80%',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:40,

  },
  textWelCome: {
 
    fontWeight:'700',
    fontSize:22

  },
  inputContainer: {

      width:'80%',
  },
  input: {
    
    backgroundColor:'white',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    marginTop:5

  },
  buttonContainer: {

       width:'60%',
       justifyContent:'center',
       alignItems:'center',
       marginTop:40
  },
  button:{

    backgroundColor:'#0782F9',
    width:'100%',
    padding:15,
    borderRadius:10,
  alignItems:'center',


  },
  buttonText: {

     color:'white',
    fontWeight:'700',
    fontSize:16

  }

})