import React from "react";
import { Text } from "react-native";
import { View } from "react-native-web";

import {s} from './help.style';
const Help = () => {
    return (
      <View style={s.container}>
        <Text style={s.bouttonText}> ************************************************</Text>
   
        <Text style={s.bouttonText}> 1-----toucher l'ecran pour sauter vers le haut en evitant les obstacles</Text>
        <Text style={s.bouttonText}> ************************************************</Text>
        <Text style={s.bouttonText}> ************************************************</Text>
        <Text style={s.bouttonText}> 2-----quand vous touchez la partie bas, vous avez perdu et vous aurez une message d'erreur GAME OVER
        </Text>
      
        <Text style={s.bouttonText}> *************************************************</Text>
        <Text style={s.bouttonText}> *************************************************</Text>
        <Text style={s.bouttonText}> 3------eviter d'aller a la haut quand l'obstacle pass car, il existe aussi une autre obstacle qui se cache en dessus 
        qui est reciproque a l'obstacle visible.
        </Text>
       
        <Text style={s.bouttonText}> *************************************************</Text>
        <Text style={s.bouttonText}> *************************************************</Text>
      </View>  
        
    );
};
export default Help;