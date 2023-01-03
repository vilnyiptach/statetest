import boxes from './boxes'
import React from "react"
import Square from './square'


export default function App(props){
    const [state, setState] = React.useState(boxes)
    
    function colorChange(id){

        setState(prevSquares =>{
            const newSquares = []
            for(let i = 0; i < prevSquares.length; i++){
                const currentSquare = prevSquares[i]
                if(currentSquare.id === id){
                    const updateSquare = {
                        ...currentSquare,
                        on:!currentSquare.on
                    }
                    newSquares.push(updateSquare)
                }else{
                    newSquares.push(currentSquare)
                }
            }
            return newSquares
        })
        console.log(id)
    }
    
    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }
    console.log(styles.backgroundColor)

    const Box = state.map(elem => {
        return < Square    
            key = {elem.id}
            id = {elem.id}
            on = {elem.on}
            colorChange ={colorChange}
        />

        
        // return  <div className='square' style={styles} key={elem.id}>   
        //         </div>
        // if I pass object from above = it's 1 braces, if write style directly = 2 braces
    
})
    return(
        <div>
            {Box}
        </div>
    )





























    
    // ------------------------------------------------
    // default  +- calculator

    // const [count, setCount] = React.useState(1);
    // function add(){
    //     return setCount(prevValue =>  prevValue + 1) 
    // }
    // function minus(){
    //     return setCount(prevValue => prevValue - 1)
    // }
    
    // return(
    //     <div>
    //         <button onClick = {add}>+</button>
    //         <p>{count}</p>
    //         <button onClick = {minus}>-</button>
    //     </div>
    // )
    // ------------------------------------------------



}



