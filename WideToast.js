import React, { useEffect } from "react";
import { Text, TouchableOpacity, Animated, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import Styles from "./sytles"
const { width } = Dimensions.get('window')



const Button = props => {
  const {title = "retry", onPress=()=>console.log("empty toast button pressed"), background="#8ad2ff", borderRadius=5, textStyle={} } = props;
 return (
    <TouchableOpacity activeOpacity={1} style={[Styles.button, background, borderRadius]} onPress={onPress}>
        <Text numberOfLines={1} style={Styles.buttonText, textStyle} >{title}</Text>
    </TouchableOpacity>
  ) 
}


export default props => {

  const { message="", delay=3000, textStyle={}, position="bottom", animation="slideDown", background="#121010", borderRadius = 0, button={} } = props;
  let xvalue = animation==="slideLeft"? width : -width
    let animatedYValue = new Animated.Value(0), animatedXValue = new Animated.Value(xvalue),isBottom = position === "bottom",
    animationValue = animation === "slideDown"?animatedYValue : animatedXValue,
    startValueY = isBottom ? 0 : 1, endValueY = isBottom ? 1 : 0, 
    startValueX = 0, endValueX = xvalue,
    startValue = animation === "slideDown"? startValueY : startValueX,
    endValue = animation === "slideDown"? endValueY : endValueX;

    let animationY = position==="bottom" ? animatedYValue.interpolate({
      inputRange: [0, .3, .5, .7, 1],
      outputRange: [0, 30, 50, 70, 100]
    }) : 
    animatedYValue.interpolate({
      inputRange: [0, .3, 1],
      outputRange: [-100, -50, 0]
    });
  useEffect(()=>{
    callToast()
  },[])

  const callToast = () => {
    Animated.timing(animationValue, { toValue: startValue, duration: 700, useNativeDriver: true}).start(closeToast());
  }
  const closeToast = () => {
    setTimeout(() => {
      Animated.timing(animationValue, {toValue: endValue, duration: 700, useNativeDriver: true}).start()
    }, delay);
  }

  if (animation === "slideDown")
    return (
      <Animated.View style={[Styles.toastView, 
        {backgroundColor:background}, isBottom ? Styles.bottom : Styles.top, {borderRadius},
         { transform: [{ translateY: animationY }] }]}>
        <Text numberOfLines={1} style={[Styles.toastText, textStyle]}>
          {message}
        </Text>
        {Object.keys(button).length > 0 && <Button {...button} />}
      </Animated.View>
    )
  else
    return (
      <Animated.View style={[Styles.toastView,
        {backgroundColor:background}, isBottom ? Styles.bottom : Styles.top, {borderRadius},
        { transform: [{ translateX: animatedXValue }] }]}>
        <Text numberOfLines={1} style={[Styles.toastText, textStyle]}>
          {message}
        </Text>
        {Object.keys(button).length > 0 && <Button {...button} />}
      </Animated.View>
    )

}





