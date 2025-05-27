import { useEffect, useState } from "react"
import Card from "./Card"

const ProductsAndPagination = () => {
    const [products, setProducts] = useState([])
    const [currentIndex, setCurrentIndex] = useState(1);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const maxproducts=products.length;
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((data)=>{
            setProducts(data);
            setFilteredProducts(data.slice(0,5));
        })
    },[]);
    useEffect(()=>{
        if(maxproducts<currentIndex*5){
            return
        }
        const result= products.slice((currentIndex-1)*5,(currentIndex-1)*5+5);

        setFilteredProducts(result);
    },[currentIndex])

  return (
    <div>
        <h1 className=" text-center mt-5 text-2xl mb-3 font-bold" >
            Products
        </h1>
        {/* Display products */}
        
        <div className=" flex flex-wrap ">
        {
            filteredProducts.length>0 && filteredProducts.map((product)=>{

            return (<Card key={product.id} product={product}/>)
            })
        }
        </div>
        <div className=" flex justify-center items-center mt-5">
            {
                [...Array(Math.ceil(maxproducts/5))].map((_,i)=>{
                    return (<button onClick={()=>setCurrentIndex(i+1)} className={`px-5 ${currentIndex===i+1?"font-bold":""}  text-lg bg-blue-300 mx-3`} key={i}>{i+1}</button>)
                })
            }
        </div>
    </div>
  )
}

export default ProductsAndPagination