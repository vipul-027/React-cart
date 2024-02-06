import React from 'react'
import img1 from "../Assets/Apple.jpg"
import img2 from "../Assets/gettyimages.jpg"
import toast from 'react-hot-toast';


 
const ProductList =[
  {
    name:"Mac book",
    price:1500,
    imgsrc:img1,
    id:"dsafdsf"
  },

  {
    name:"pen",
    price:123,
    imgsrc:img2,
    id:"adefgg"
  }
];

const AddtoCartHandler=(options)=>{
  console.log(options);
  toast.success("Added to cart");
};

const Home = () => {
  return (
    <div className='home'>
     {
      ProductList.map(i=>(
        <ProductCard 
          key={i.id}
          imgsrc={i.imgsrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={AddtoCartHandler}
        />
      ))
     }
      </div>
  );
};


const ProductCard = ({name, id, price, handler, imgsrc}) => (
      
   <div className="productCard">
    <img src={imgsrc}  alt={name}/>
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={()=>handler({name, price, id, quantity: 1, imgsrc})}>
      Add to Cart
      </button>
   </div>
);

export default Home