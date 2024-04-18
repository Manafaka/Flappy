
import React from "react";
import { Text } from "react-native";
import { View } from "react-native-web";
import {s} from './help.style';
const Score = () => {
    return (
        <View style={s.container}>
        <Text style={s.bouttonTexte}>YOUR BEST SCORE: 6</Text>
      </View> 
        
    );
};

export default Score;