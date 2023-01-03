import React from "react"

// export default function AppCounter(){
//     const[currentCount, setCount] =React.useState(0)

//     function add(){
//         setCount(previousCount => currentCount + 1)
//     }

//     function minus(){
//         setCount(previousCount => currentCount - 1)
//     }
//     return(
//         <div>
//             <button onClick={add}>+</button>
//             <p>{currentCount}</p>
//             <button onClick={minus}>-</button>

//         </div>
//     )
// }

export default function AppCounter(){
    const [namesList,setNamesList] = React.useState(['anton', 'jane', 'andrew'])
    const [name, setName] = React.useState('')

    function addName(){
        setNamesList([...namesList, name])
    }

    return(
        <div>
            <ul>
                {namesList.map( name => {
                return <li>{name}</li>
                })}
            </ul>

            <input
            type='text'
            value={name}
            onChange = {(e) => setName(e.target.value)}
            />
            <button onClick={addName}>add</button>
            
        </div>
    )
}