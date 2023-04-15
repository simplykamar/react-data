import {addToCart,removeFromCart,emptyCart} from '../redux/action';//dispatch somethin/ send somthing from view to action
import {useDispatch,useSelector} from 'react-redux';
import {listProduct,searchProduct} from '../redux/productAction'
import {useEffect} from 'react'

function Main() {
  const dispatch = useDispatch();//make executable
  const data = useSelector((state)=>state.productData)
  console.log("product in main",data)
  const product ={
    name:"samsung",
    price:89999,
    color:"black"
  }
  useEffect(()=>{
      dispatch(listProduct())
  },[])
  return (
    <div className="App">
    <div className="my-3">
    
   {/*  <button onClick={()=> dispatch(addToCart(product))}>Add to Cart</button>
     <button onClick={()=> dispatch(removeFromCart(product))}>Remove from Cart</button>*/}
    <input type="search" onChange={(e)=>dispatch(searchProduct(e.target.value))} placeholder="search product.." className="form-control w-50 mb-3"/>

     <button onClick={()=> dispatch(emptyCart())}>Empty Cart</button>
     {/*<button onClick={()=> dispatch(listProduct())}>List Product</button>*/}
     </div>

    <div className="product-container">
    {
      data.map((item)=><div key={item.id} className="product-item my-2" >
        <img src={item.photo} alt="" width="200" height="200"/>
        <div>{item.name}</div>
        <div>{item.color}</div>
        <div>{item.price}</div>
        <div>
          <button onClick={()=> dispatch(addToCart(item))}>Add to cart</button>
          <button onClick={()=> dispatch(removeFromCart(item.id))}>Remove from cart</button>
        </div>

        </div>
        )
    }
    </div>
    </div>
  );
}

export default Main;
