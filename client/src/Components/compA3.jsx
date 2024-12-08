
import React, { useState } from 'react'
function CompA3() {
    const [counter, setCounter] = useState(0);
    return (
        <>

            <p>{counter}</p>
            <button onClick={() =>
           counter<6?setCounter(counter + 1)
            : (setCounter(0),alert("הגעת ל-6"))}>+</button >
          
       
        
        
        </>
    )
}
export default CompA3