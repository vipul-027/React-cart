import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import img1 from "../Assets/Apple.jpg"
import { useSelector } from 'react-redux';
const Cart = () => {

  const {cartItems}= useSelector(state=>state.cart)
  return (
    <div className="cart">
 
   <main>

    {
      cartItems.length >0?(
        cartItems.map(i=>(
          <CartItem
          imgsrc={img1}
          name={"macxbook"}
          price={787}
          qty={1}
          id="jjk"
          />
        ))
      ):(
        <h1>No Items yet</h1>
      )
        }
   </main>
   <aside>
    <h2>subTotal:${2000}</h2>
    <h2>shipping:${4}</h2>
    <h2>Tax:${3}</h2>
    <h2>Total:${1220}</h2>

   </aside>

    </div>
  );
};

const CartItem = ({imgsrc, name, price, qty, increment, decrement, deleteHandler, id}) =>(
    <div className="cartItem">
      <img src={imgsrc} alt="Item" />
      <article>
        <h3>{name}</h3>
        <p>${price}</p>
      </article>

   <div>
    <button onClick={()=>decrement(id)}>-</button>
    <p>{qty}</p>
    <button onClick={()=>increment(id)}>+</button>

   </div>

   <AiFillDelete onClick={()=> deleteHandler(id)}/>

    </div>
);

export default Cart