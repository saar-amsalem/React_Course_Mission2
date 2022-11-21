
function Single_Product(props) {          
  return (
        <>
          <div style={{"align-self":"flex-start","display":"flex","flex-direction":"column","width":"50%"}}>
          <h4>{props.product.title}</h4>
          <label>{props.product.price} $</label>
          </div>
          <div style={{"alignSelf":"flex-end","width":"60%"}}>
          <img src={props.product.images[0]} style={{"width":"100px","height":"70px","alignSelf":"flex-end"}}/>
          </div>
        </>
  );
}

export default Single_Product;
