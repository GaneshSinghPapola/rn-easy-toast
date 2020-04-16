/**
 * Toast component
 * Author - Ganesh Singh Papola
 * simple animated toast callable with api method from anywhere
 */


import React from "react";
import WideToast from "./WideToast";
import DefaultToast from "./DefaultToast";
import RootSiblings from 'react-native-root-siblings';


const Container = ({type="default", ...props}) => {
    return (
          type==="default"?
         <DefaultToast {...props}/> :
         <WideToast {...props}/>
    )
}
const Toast = props => {
    const {delay = 3000} = props;
    let sibling = new RootSiblings(<Container {...props}/>);
    setTimeout(() => {
      sibling.destroy();
      sibling = null;
    }, delay+1000);
}
export default Toast;
export const ToastContainer = props => {
  Toast(props);
  return null;
}
