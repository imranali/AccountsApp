
import axios from 'axios';
import React, {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PostWithoutAuthorized}  from '../apihelper/ApiHelper'
import LoginScreen from '../screens/LoginScreen';


export const AuthContext = React.createContext();


export const AuthProvider = ({children}) => {


    const [userInfo, setUserInfo]  = useState(null);
    const [userToken, setUserToken] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

  

    const UserLogin = (email, password) => {
       
    

        try {
        
       setIsLoading(true);

       login(email,password);

       

       setIsLoading(false);

          
    }
    catch (err){

        console.log(err);
    }
        
    }

     const login = async (email, password) => {


try{

        
       await axios("https://accountsapi.ssdcounter.com/api/Authentication", {
        method:"POST",
        data: JSON.stringify({

            email: email,
            password: password
        }),
        headers: {

            "Accept":"application/json",
            "Content-Type":"application/json",

        }         

      }).then((response) => {

         
           let result = response.data;

           if(result.status){

                setUserInfo(result);
                setUserToken(result.token);
                setStorageToken(result);

           }


      });



    }
    catch(err){

        console.log(err);
    }

    }
    

    const setStorageToken = async (result) => {

        try{

        await AsyncStorage.setItem("@userInfo", JSON.stringify(result));
        await AsyncStorage.setItem("@userToken", JSON.stringify(result.token));

    }
     catch(err){

        console.error(err);
     }
    }

   
    const UserLogout = async () => {

        try{

            setIsLoading(true);
            setUserInfo(null);
            setUserToken(null);
            await AsyncStorage.removeItem('@userInfo');
            await AsyncStorage.removeItem('@userToken');        
            setIsLoading(false);

        } 
        catch(e){

            console.log(e);
        }
    }

    const __isLoggedinUser = async () => {

        try{

            setIsLoading(true);
            let __userInfo = await AsyncStorage.getItem('@userInfo');
            if(__userInfo !==null){
            let _userInfo = JSON.parse(__userInfo);          
            let __userToken = await AsyncStorage.getItem('@userToken');
            setUserInfo(_userInfo);            
            setUserToken(__userToken); 
            }
            setIsLoading(false);

        } 
        catch(e){
        console.log(e);
        }
    }
      
    

    useEffect(() => {

        try{

        __isLoggedinUser();

    }
    catch(e){

        console.log(e);
    }


    }, [])

   

    return (
        <AuthContext.Provider value={{UserLogin, UserLogout, userInfo, userToken, isLoading}}>
            {children}
        </AuthContext.Provider>
   )
        
    

}

 const useAuth = React.createContext(AuthContext)

export default {AuthProvider, useAuth}