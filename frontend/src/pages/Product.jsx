import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { getProductById } from '../apiCalls';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  margin-bottom: 40px;
`;

const Button = styled.button`

  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

function Product() {
  
const [product,setProduct] = useState({})
const [images,setImages] = useState([])
const navigate = useNavigate()
const id = window.location.pathname.split("/")[1]
  useEffect(()=>{
    async function FD() {
      const res = await getProductById(id)
      setProduct(res)
      setImages(res.images)
    }
    FD()
  },[])
  
            
  return (
    <Container>
      <Wrapper>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.description}</Desc>
          <Desc>Seller : {product.brand}</Desc>
          <Price>{product.price} $</Price>
          <label style={{"margin-bottom":"20px","font-weight":"Bold"}}>additional image :</label>
          <div>
            {images?.map((elm)=>{
              return <img src={elm} style={{"width":"200px","height":"150px"}} />
            })}
          </div>
          <br />
          <Button onClick={()=>navigate('/')}>Return to products list</Button>
        </InfoContainer>
        
      </Wrapper>
    </Container>
  );
}

export default Product;
