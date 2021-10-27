import React from "react";
import Product from "./Product";

export default function RecipeReviewCard(props) {
  const {data,onAdd} = props;

  return (
   <> 
  
    <div className="row">
     <br/>
        {data.blogpost.map((item) => (
          // <div>{item.Category === "Seasonings & Spices" &&<>
        <div> <Product key={item._id} item={item} onAdd={onAdd} /></div> 
          // </>}</div>
        ))}
    </div>
    </>
  );
}
