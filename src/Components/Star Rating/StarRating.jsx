import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import { FaS } from 'react-icons/fa6';
const StarRating = ({noOfStars=5}) => {

    const [rating , setRating ] = useState(0);
    const [hover, setHover] = useState(0);
    function handleClick(getCurrentIndex){
setRating(prev=> prev=== getCurrentIndex ?0:getCurrentIndex);
setHover(getCurrentIndex)
}
function handleMouseLeave(){
    setHover(rating)
}
function handleMouseHover(getCurrentIndex){
        setHover(getCurrentIndex)

    }
  return (
    <div className=' h-[100vh]'>
        <div>
            <h1 className=" text-center text-3xl mt-6 mt-3">Please Rate Us! </h1>
        </div>
        <div className="stars flex gap-2  mx-auto w-full justify-center items-center mt-6 ">
           
        {
           
           [...Array(noOfStars).fill(0).map((_,index)=>{
            
            index+=1;
                 return <FaStar style={
                    index <= hover &&{color:'yellow'}
                 } className=' cursor-pointer'
                  key={index}
                  size={40}
                  onClick={()=>handleClick(index)}
                  onMouseMove={()=>handleMouseHover(index)}
                  onMouseLeave={()=>handleMouseLeave(index)}/>
            })]
        }
        </div>
    </div>
  )
}

export default StarRating