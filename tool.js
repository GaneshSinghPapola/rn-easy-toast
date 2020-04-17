import { Dimensions, Platform, StatusBar } from "react-native"
const {height, width} = Dimensions.get("window")
let heightCheck = 812, widthCheck = 375;
export let x = false, statusHeight =  5;
if( width >= widthCheck && height >= heightCheck ){
    x = true;
    statusHeight = Platform.OS === "ios"? 30 : 5;
}
