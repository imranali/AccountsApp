import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";

const Stack  = createNativeStackNavigator();

export const AppStack = () => {



    return (

     <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen  name="Home" component={HomeScreen} />
     </Stack.Navigator>

    )

}

export default AppStack