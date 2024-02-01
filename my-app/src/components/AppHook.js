import { useState } from "react";

const AppHook = () => {
    //let title="welcome to techwave"
    const[title,change]=useState("welcome to techave");
    const [userinfo,userchange]=useState({'name':'abc','age':23});
    
    const HandlClick=()=>
    {
        change("React tutorial");
        console.log(title);
        userchange({'name':'maremma','age':24})
    }
    return ( 
       <div>
        <h1>{title}</h1>
        <h1>{userinfo.name}</h1>
        <button onClick={HandlClick}>Click</button>

       </div>
     );
}
 
export default AppHook;