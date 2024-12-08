import React from 'react'
import {useState} from 'react'

    function CompA1() {
        const [flag, setFlag] = useState(true)
        const func = () => {
          if (flag)
            setFlag(false)
          else
            setFlag(true)
        }
        return (
          <div>
            {flag ? <div style={{ color: "red" }}>
             שרה הינמן<br />
              רמות<br />
             0583274218<br />
            </div> : <></>}
            <button style={{ color: "green" }} onClick={() => { func() }}>הצג\הסתר</button>
          </div>
        );
      }
      


export default CompA1