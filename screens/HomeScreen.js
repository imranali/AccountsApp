import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/authContext'
import axios from 'axios';






const HomeScreen =  () => {


   const Initialize = [{
   accountID: 0,
   accountName: "string",
   accountDescription: "string",
   mobile: "string",
   email: "string",
   isActive: true,
   accountRoleID: 0,
   accountRoleName: "string",
   openingBalance: 0,
   give_Amount: 0,
   take_Amount: 0,
   currentBalance: 0}];


   const {userInfo, userToken} = useContext(AuthContext);
   const [accountBalanceList, setAccountBalanceList] = useState(Initialize);


   let arrAccounts = [];

   const getAccountLedger = async () => {


    let m_date = new Date();
    let date = new Date(m_date.getFullYear(), (m_date.getMonth() +1), m_date.getDate(), 26,59,59,0)
   





    try{

        
      await axios("https://accountsapi.ssdcounter.com/api/Accounts/GetAccountBalance", {

       method:"POST",
       data: JSON.stringify({

        fromDate: "2015-01-01T00:00:00",
        toDate: date.toJSON(),
        accountName: ""

       }),
       headers: {

           "Accept":"application/json",
           "Content-Type":"application/json",
           "Authorization": "Bearer " + userInfo.token

       }         

     }).then((response) => {

        
          let result = response.data;
       

          if(result.status){

            setAccountBalanceList(result.data);
           
            
          }

     });

   }
   catch(err){

       console.log(err);
   }

      
  }


  useEffect(() => {

    getAccountLedger();


  }, [])




  return (


    <View style={styles.containerfluid}>
     
     <View style={styles.shape1}>

      </View>
      <View style={styles.shape2}>

      </View>
      <View style={styles.logoutContiner}>
        
        <TouchableOpacity
         style={styles.logoutButton}
        >

        </TouchableOpacity>
        </View> 
      <View style={styles.headerHome}>
           <Text style={styles.headerAccountTex}>Hello {userInfo.accountname} </Text>
      </View>

      <View style={styles.container}>

         
         <View style={styles.card}>

              <View style={{flexDirection:'row', marginBottom:5}}>
                <Text style={{fontWeight:'700', fontSize:16}}>Accounts</Text>
              </View> 


               <View style={styles.inputSearchContiner}>                               
                <TextInput style={styles.inputSearch} > 
                                               
                </TextInput>
                <TouchableOpacity            
                 >
                <FontAwesomeIcon name={'search'} size={16}  />
                </TouchableOpacity>
               </View>


               <View style={{marginTop:10, justifyContent:'center', alignItems:'center'}}>                
                {
                         
                         <ScrollView>
                          <View>
                               {

                                  accountBalanceList.map((item, index) => {

                                      <Text>{item.accountName}</Text>

                                  })   

                               }
                               </View>
                         </ScrollView>
                } 
               </View>


         </View>
      

      </View>  


    </View>
  )
}

export default HomeScreen

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

headerHome : {

   height:150,
   marginTop:-125,
   marginLeft:0,
   marginRight:0,
   //backgroundColor:"rgba(124, 153, 169, 0.57)",   
   justifyContent:'center' ,
   alignItems:'center'

},

headerAccountTex: {

   

},
 container : {
   
   margin:0,
   justifyContent:'center',
   alignItems:'center',
 },

card: {

    width:'100%',
    height:'100%',
    backgroundColor:"rgba(124, 153, 169, 0.37)",
    borderRadius:10,
    paddingTop:10,
    paddingLeft:10,
    paddingRight:10,
    shadowRadius: 15,


},

inputSearchContiner :{
    flexDirection:'row',
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ffffff',
    borderRadius:10,
},
inputSearch: {
    
    width:'90%',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    backgroundColor:'#ffffff'

}

})