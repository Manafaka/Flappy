import { StyleSheet } from "react-native";
const t= StyleSheet.create({
    buttonText :{
        fontSize :24,
        textAlign : 'center',
        position : 'relative',
        color : '#ffff',
        fontWeight : 'bold',
  },
    buttonsText :{
      fontSize :20,
      textAlign : 'center',
      position : 'relative',
      top : -4,
      color : '#ffff',
  },
    bien : {
      color : '#0000',
      fontSize : 12,
  },
  image : {
    position : 'relative',
    width : 120,
  },
  b : {
    position : 'absolute',
    top : 120,
    width : 140,
    height : 160,
  },
  h : {
    position : 'absolute',
    top : 120,
    width : 280,
    height : 280,
  },
  text : {
    position : 'absolute',
    top : 430,
    fontSize : 30,
    fontWeight : 'bold',
    color : '#167CB0'

  },
  texte : {
    position : 'absolute',
    top : 470,
    fontSize : 20,
    fontFamily : 'serif',
    color : '#0F120F'
  },
  texto : {
    top:10,
    position : 'absolute',
    fontSize:32,
    borderWidth:3,
    borderRadius:50,
    borderColor: 'white',
    backgroundColor:'#D8B90C',
    paddingLeft:50,
    paddingRight:50,

  }
});
export {t};