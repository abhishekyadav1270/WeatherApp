import React from 'react'


//here we used default export
/*export default function Greet(){
    return (
        <div>
            Hello User
            </div>
    )
}
*/

//here we used named export
export const Greet=()=>{
    return <h1 >hello world from functional component</h1>
}