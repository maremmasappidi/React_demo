import './App.css';

import Admin from './components/Admin';
import User from './components/User';
function App() {
  // const Head="react";
  // const obj={name:'maremma',location:'hyd'};
  // return (
  //  <div>
  //   <h1>{Head}</h1>
  //   <h1>{obj.name}</h1>
  //   <h1>{obj.location}</h1>
  //   <Biodata/>
  //  </div>
  // );

//   const isLoggedIn=false;
//   return(
//     <div>
//       {
//       isLoggedIn?(<Admin/>):(<User/>)
  
//         }
// </div>
//   )
let comp;
const isLoggedIn=false;
if(isLoggedIn)
{
  comp=<Admin></Admin>
}
else
{
  comp=<User></User>
}

return (
  <div>
    {comp}
  </div>
)
}
export default App;
