import { useState }  from 'react'


    function App () {
let [counter , setCounter ] = useState(0)

let btnclick = () => {
    if (counter != 10) {
        return setCounter(counter + 1)
    }
}
let dec = () => {
    if (counter > 0 ) {

    
    setCounter(counter - 1)
    }
} 

        return (
            <>
        <h1> hiii: {counter} </h1>
        <button onClick = {btnclick}> Increase</button>
        <br></br>
        <button onClick={dec}> Decrease </button>

        </>
        )
    }

    export default App