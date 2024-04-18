import React, { useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity, StatusBar, BackHandler} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { s } from './style'; // Assurez-vous d'importer correctement votre fichier CSS contenant les styles
import {t} from './text';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Help from './components/help';
import Score from './components/score';
//import Play from './components/playv';
//import Play from './components/index.android';
import FlappyBirdGame from './components/ty';

const App = ({navigation}) => {
const [statusBarVisible, setStatusBarVisible] = useState(true);
useEffect(() => {
  StatusBar.setHidden(true);
}, []);
  

const OnScreenPress = () => {
  setStatusBarVisible(true);
};


// Masquer la barre de navigation inférieure lorsque la barre de navigation supérieure est visible
const hideBottomNavigationBar = statusBarVisible ? true : false;

const OnPlayPress = () => {
  navigation.navigate('FlappyBirdGame');
};const OnScorePress = () => {
  navigation.navigate('Score');
};
;const OnHelpPress = () => {
  navigation.navigate('Help');
};
const OnQuitPress = () => {
  //BackHandler.exitApp();
};





  return (
    <View style={s.container}>
      <TouchableOpacity onPress={OnScreenPress} style={{ flex: 1 }}>
        <View style={s.fullScreen}>           
            <Image source={require('./assets/Walk (8).png')} style = {t.b}/>  
            <TouchableOpacity style={s.button0} onPress={OnPlayPress}> 
              <Text style={t.buttonText} > <Icon name="gamepad" size={30} color="white" /> PLAY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.button1} onPress={OnScorePress}> 
              <Text style={t.buttonText}> <Icon name="star" size={30} color="white" /> SCORE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.button1} onPress={OnHelpPress}> 
              <Text style={t.buttonText}> <Icon name="info" size={30} color="white" /> HELP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.button2} onPress={OnQuitPress}> 
              <Text style={t.buttonText}> <Icon name="sign-out" size={30} color="white" /> Quit</Text>
            </TouchableOpacity>

             
        </View>
        <StatusBar hidden={hideBottomNavigationBar} /> 
      </TouchableOpacity>

    </View>
  );
};
const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={App} options={{ headerShown: false }} />
        <Stack.Screen name="FlappyBirdGame" component={FlappyBirdGame} options={{ headerShown: true }} />
        <Stack.Screen name="Score" component={Score} options={{ headerShown: true }} />
        <Stack.Screen name="Help" component={Help} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainApp;
