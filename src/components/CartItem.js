import { AddRounded, RemoveRounded } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { actionType } from './reduce';
import { useStateValue } from './StateProvider';

let cartItems = [];

function CartItem({name,imgSrc,price, itemId}) {

   const [qty, setQty] = useState(1);
   const[{cart}, dispatch] = useStateValue();
   const[itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));

   useEffect(()=>{
     cartItems = cart;
     setItemPrice(parseInt(qty) * parseFloat(price));
   },[qty])

   const updateQuantity = (action, id) => {
      if(action === 'add'){
        setQty(qty + 1);
      }
      else{
        if(qty === 1){
            cartItems.pop(id);
            dispatch({
                type: actionType.SET_CART,
                cart: cartItems
            })
        }
        setQty(qty - 1);
      }
   }

  return (
    <div className="cartItem">
        <div className="imgBox">
            <img src={imgSrc} alt="" />
        </div>

        <div className="itemSection">
            <div className="itemName">{name}</div>
            <div className="itemQuantity">
                <span>X {qty}</span>
                <div className="quantity">
                    <RemoveRounded className='itemRemoved' onClick={()=> updateQuantity(`remove`, itemId)}/>

                    <AddRounded className='itemAdd' onClick={()=> updateQuantity(`add`,itemId)}/>
                </div>
            </div>
        </div>
        <p className="itemPrice">
            <span className="rupeeSign">₹</span>
            <span className='itemPriceValue'>{itemPrice}</span>
        </p>
    </div>
  )
}

export default CartItem