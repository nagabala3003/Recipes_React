import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import Products from './Products';

const App=()=>{
   const [search,setSearch]=useState('');
   const [data,setData]=useState([]);
    const YOUR_APP_ID="c2648f17";
    const YOUR_APP_KEY="fcb61fa4976e765cd21bdf02e477d94c";
   const submitHandler=e=>{
    e.preventDefault();
    console.log(search);
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response=>response.json()
    ).then(
      data=>setData(data.hits)
    )
   }
  return (
    <div>
      <center>
        <h4><u>Food Reacipe App</u></h4>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/><br/>
          <input type="submit" className="btn btn-primary" value="search"/>
        </form>
        {data.length>=1 ? <Products data={data} />:null}
      </center>
        
    </div>
  )
}

export default App;
