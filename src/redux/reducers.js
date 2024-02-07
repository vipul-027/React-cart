// import { createReducer } from "@reduxjs/toolkit";

// export const cartReducer = createReducer({

//     cartItems:[],
//     subTotal:0,
//     shipping:0,
//     tax:0,
//     total:0
// }, 
// {
//     addToCart:(state, action)=>{
//         const item = action.payload;
//         const   isItemExist= state.cartItems.find((i)=>i.id===item.id);

//    if(isItemExist) {

//    } else {
//       state.cartItems.push(item)
//    }

//       },
  
// }
// );




import { createReducer } from "@reduxjs/toolkit";

export const cartReducer = createReducer(
  {
    cartItems: [],
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0
  },
  builder => {
    builder.addCase('addToCart', (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find(i => i.id === item.id);

      if (isItemExist) {
        // Handle logic when item already exists in cart
      } else {
        state.cartItems.push(item);
      }
    });
    // Add other action cases if needed
  }
);


