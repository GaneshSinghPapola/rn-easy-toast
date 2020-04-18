# rn-toast
A react native simple toast module to show animated or default types of toast in android and iOS.




## Installation

* 1.Run `npm i rn-toast --save` or `yarn add rn-toast`
* 2.`import Toast from 'rn-toast'`    

## Demo  


## Example    

`import Toast, { ToastContainer } from 'rn-toast'`  

Use Toast method to show toast   

```
Toast({
  message : "Hii this is  test Toast!",
  delay : 5000
})
```
or use toast as a container with `ToastContainer` anywhere inside the component

```
<ToastContainer message="Hii this is  test Toast" delay={5000} />

```



## Props


Props              | Type     | Optional | Default     | Description
----------------- | -------- | -------- | ----------- | -----------
message  | string  | false |   |  toast message
delay  | number | true | 3000 | toast delay duration
position |  string, one of (['top','bottom']) | true | bottom  |  toast position
type  | string one of (['default','wide'])  | true | default  |    type of toast
animation  | string one of (['slideUpDown','slideRight', slideLeft])  | true | slideUpDown  |   *only for type 'wide'
background  | string  | true | '#121010'  |   toast background color
borderRadius  | number  | true | 100  |   border radius ( default 0 for type wide)
textStyle  | style  | true | { color:'#8ad2ff' }  |   custom style text
button | object | true | {} | to show button on toast ex. { titile : "button", onpress=()=>{}, background : "#8ad2ff", borderRadius : 5, textStyle : {} }

   


## Contribution

Issues and Pull requests are welcome.

