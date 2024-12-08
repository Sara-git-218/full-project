import React, { useState } from 'react'
function CompA2()
{
    const [cities,setCities]=useState(["jerusalem","tel-aviv","bnei-brak"])
    return(<>
    
    {cities.map(a=>(<p style={{backgroundColor:"pink"}}>{a}</p>))}
    
    
    </>)
}
export default CompA2