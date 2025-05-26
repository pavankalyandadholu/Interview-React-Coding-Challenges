import { useEffect, useState } from "react"

const ImageSlider = ({url}) => {
    const [images , setImages ] = useState([])
    const [currentSlide , setCurrentSlide ] = useState(0);
    const [errorMsg , setErrorMsg ] = useState(null)
    const [loading , setLoading ] = useState(false)
    async function fetchImages(getUrl ) {
        try{
        setLoading(true);
            const resonse= await fetch(getUrl);
            const data= await resonse.json();
            if(data){
                setImages(data);
            }
            setLoading(false)

        }catch(error){
            setLoading(false)
            setErrorMsg(error.message)
            
        }
    }
useEffect(()=>{
if(url!=='') fetchImages(url)
},[url])

  return (
    <div>
        
    </div>
  )
}

export default ImageSlider