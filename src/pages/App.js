import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import "../Components/Single_Product"
import Single_Product from '../Components/Single_Product';
import { Link, useNavigate } from 'react-router-dom';

function App() {
  
const [products,setProducts] = useState([])
const navigate = useNavigate()

  useEffect(()=>{
    async function FD() {
      const res = await axios.get('https://dummyjson.com/products/')
      console.log(res.data.products);
      setProducts(res.data.products)
    }
    FD()
  },[])
  
            
  return (
    <div className="App" style={{"display":"flex","alignItems":"center","flexDirection":"column"}}>
    <h1>Products List</h1>
    <br />
      {products.map((product)=>{
        return <div key={product.id} onClick={()=>navigate('/'+product.id)} style={{"display":"flex","flex-direction":"row","align-items":"space-between","border-radius":"25px","border":"1px solid", "width":"80%","margin-bottom":"10px"}}><Single_Product product={product} /></div>
      })}
    </div>
  );
}

export default App;
