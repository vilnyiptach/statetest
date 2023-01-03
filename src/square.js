import React from 'react'
export default function Square(props){
    // const [color,setColor] = React.useState(props.on)
    // function colorChange(){
    //     setColor(prevColor =>  !prevColor)
    //     console.log(color)
// }
    const styles = {
        backgroundColor: props.on ? "black" : "transparent"
    }
    

    return(
        <div className="square" style={styles} onClick = {()=> props.colorChange(props.id)}>
            
        </div>
    )
}