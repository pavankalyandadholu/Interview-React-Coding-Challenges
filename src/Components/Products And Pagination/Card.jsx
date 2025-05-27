
const Card = ({product}) => {
  return (
    <div className=" w-[250px] border m-2 hover:-translate-y-2 transition-transform duration-100 shadow-lg shadow-gray-200 rounded-md p-3">
        <div>
            <img className=" w-[200px] h-[200px] object-cover " src={product.image} alt="product image" />
        </div>
        <h1 className=" text-center mt-2">{product.title}</h1>
    </div>
  )
} 

export default Card