import './App.css';
function App()
{
    const HandleClick=(name)=>
    {
        console.log("welcome "+name)

    }
    const HandleChange=(e)=>
    {
        console.log(e)
    }
    return (
        <div>
            <buton onClick={()=>HandleClick('techwave')}>Click</buton>
            <input onChange={(e)=>HandleChange(e.target.value)}></input>
        </div>
    );
}
export default App;