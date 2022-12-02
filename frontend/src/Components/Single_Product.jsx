import styled from "styled-components";
import { updateCartToDB } from "../apiCalls";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  align-self: center;
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;




function Single_Product(props) {    
  const navigate = useNavigate()
  
  const addToCart = async () => {
    props.setfunc([...props.cart,props.product])
    alert('added succssesfully !')
  }


  return (
        <>
          <div style={{"align-self":"flex-start","display":"flex","flex-direction":"column","width":"30%"}}>
          <h4>{props.product.title}</h4>
          <label>{props.product.price} $</label>
          </div>
          <div style={{"flex-direction":"row","justifyContent":"space-between"}}>
          <Button onClick={()=>navigate("/"+props.product._id)}>Details</Button>
          <Button onClick={addToCart}>Add to Cart</Button>
          </div>
          <div style={{"alignSelf":"flex-end","width":"40%"}}>
          <img src={props.product.images[0]} style={{"width":"100px","height":"70px","alignSelf":"flex-end"}}/>
          </div>
        </>
  );
}

export default Single_Product;
