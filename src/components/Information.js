import React from 'react'

export default function Information(handleChangeName) {
    return (
        <div>
            <button onClick={()=>handleChangeName('raj')}>change name</button>
        </div>
    )
}
