import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, Animated, Dimensions } from 'react-native';
import Styles from "./sytles"
const { width } = Dimensions.get('window')



const Button = props => {
  const {title = "retry", onPress=()=>{console.log("empty toast button pressed")}, background="#8ad2ff", borderRadius=5, textStyle={} } = props;
 return (
    <TouchableOpacity activeOpacity={1} style={[Styles.button, {background, borderRadius}]} onPress={onPress}>
        <Text numberOfLines={1} style={Styles.buttonText, textStyle} >{title}</Text>
    </TouchableOpacity>
  ) 
}


export default props => {

  const { message="", delay=3000, textStyle={},  position="bottom", borderRadius=100, background="#121010", button={} } = props;
    let animationY = new Animated.Value(0),
    isBottom = position === "bottom";
 
  const [show,display] = useState(true);
  useEffect(()=>{
    callToast()
  },[])

  const callToast = () => {
    Animated.timing(animationY, { toValue: 1, duration: 300, useNativeDriver: true}).start(closeToast());
  }
  const closeToast = () => {
    setTimeout(() => {
      Animated.timing(animationY, {toValue: 0, duration: 300, useNativeDriver: true}).start();
      display(false);
    }, delay);
  }


    return ( show?
      <Animated.View style={[Styles.defaultToastView, {borderRadius},
        {backgroundColor:background}, {opacity : animationY }, isBottom ? Styles.dbottom : Styles.dtop]}>
        <Text numberOfLines={1} style={[Styles.toastText, textStyle]}>
          {message}
        </Text>
        {Object.keys(button).length > 0 && <Button {...button} />}
      </Animated.View> : null
    )

}





