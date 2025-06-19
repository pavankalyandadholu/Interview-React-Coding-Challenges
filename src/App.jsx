// import Accordian from "./Components/Accordian";
// import Context from "./Components/Context";
// import ProductsAndPagination from "./Components/Products And Pagination/ProductsAndPagination";
// import RandomColor from "./Components/Random Color/RandomColor";
// import StarRating from "./Components/Star Rating/StarRating";

import { Provider } from "react-redux";
import { store } from "./Components/Redux Implementation/store";
import StoreProducts from "./Components/Redux Implementation/StoreProducts";

// import { dummyContext } from "./Components/Context";
export default function App() {
  return (
    <>
    <Provider store={store} >

    
    {/* <dummyContext.Provider value={{data:"Hello Good morning"}}> */}

    {/* Accordian Project */}
    {/* <Accordian/> */}
    <hr className=" border-2" />
    {/* Color */}
    {/* <RandomColor/> */}
    <hr className=" border-2" />
      {/* <StarRating noOfStars={10}/> */}
    <hr className=" border-2" />
    {/* ProductsAnd Pagination */}
      {/* <ProductsAndPagination/> */}

      {/* <Context/> */}
    {/* </dummyContext.Provider> */}
    <StoreProducts/>
</Provider>
    </>
  )
}