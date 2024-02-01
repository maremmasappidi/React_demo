import './App.css';
function App()
{
    const products=[
        {id:1,name:'Tv',instock:false},
        {id:2,name:'Wm',instock:true,},
        {id:3,name:'Ac',instock:false},
    ];

    return(
        <div>
       <table>
        <thead>
            <tr>
                <th>
                  Id  
                </th>
                <th>
                  Name  
                </th>
            </tr>
        </thead>
        <tbody>
            {
               products.map((item)=>
               <tr key={item.id} style={{color:item.instock?'green':'red'}}>
                <td>{item.id}</td>
                <td>{item.name}</td>

               </tr>
               ) 
                
             }


        </tbody>
       </table>
        </div>
    );
            
}
export default App;