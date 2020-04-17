import { x, statusHeight } from "./tool"
export default {
  toastView : {
    minHeight: 53,
    maxHeight : 100,
    width:"100%", 
    position: 'absolute',
    zIndex: 9999,
  },
  innerView : {
    alignItems : "center",
    flexDirection : 'row',
    flex : 1,
    paddingHorizontal : 10,
    height : 60,
  },
  spaceBottom : {
    height : x ? 15 : 5  
  },
  spaceTop : {
    height :  x ? statusHeight : 5
  },
  top : {
    top : 0,
  },
  bottom : {
    bottom : 0,
    // marginBottom : 0,
   },
   row : {
     flexDirection : 'row'
   },
  toastText : {
    fontSize : 14,
    color : "#8ad2ff",
  },
  button : {
    borderRadius : 5,
    paddingHorizontal :10,
    paddingVertical : 7,
    justifyContent : 'center',
    alignItems : 'center' ,
    backgroundColor : "#8ad2ff",
    marginLeft : 'auto',
  },
  buttonText : {
    color : "#121010",
    fontSize : 14,
  },
  defaultToastView : {
    alignItems : "center",
    paddingHorizontal : 20,
    minHeight: 53,
    maxHeight : 60,
    position: 'absolute',
    flexDirection : 'row',
    borderRadius : 60,
    zIndex: 9999,
    width : '80%',
    alignSelf : 'center' 
  },
  dbottom : {
    top : "7%"
  },
  dtop : {
    top : "85%"
  }
}