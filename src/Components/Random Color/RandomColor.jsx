import { useEffect, useState } from "react";

const RandomColor = () => {
    const [typeOfColor , setTypeOfColor ] = useState('hex');
    const [color , setColor ] = useState('#000000');
    useEffect(()=>{
        genarateRandomColor();
    },[typeOfColor])

    function genarateRandomNumber(length){
        return Math.floor(Math.random()*length);
    }
    function genarateRandomColor(){
        if(typeOfColor==='hex')
         setColor( genarateHexColor())
        else setColor(genarateRgbColor())
        
    }
    function genarateHexColor(){
        const hexCodes=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexcode='#';
        for(let i=0;i<6;i++){
            hexcode+=hexCodes[genarateRandomNumber(hexCodes.length)]
        }
        return hexcode

    }
    function genarateRgbColor(){
        return `rgb(${genarateRandomNumber(255)},${genarateRandomNumber(255)},${genarateRandomNumber(255)})`
    }
    function copytoClipBoard(){
        navigator.clipboard.writeText(color).then(()=>{
            alert("Text copied to clipboard! ")
        }).catch((error)=>{
            console.error('Failed to copy text:',error)
        })
    }


  return (
    <div className=" p-2 container h-[100vh]">
        <h1 className=" text-2xl font-semibold text-center uppercase mt-5">Random Color </h1>
        <div className=" text-lg  mx-auto flex items-center justify-center w-full mt-2">

        <button onClick={()=>setTypeOfColor('hex')} className=" border-2 px-4 py-2 mt-4 mx-3 rounded-md hover:bg-gray-200">Create HEX Color </button>
        <button onClick={()=>setTypeOfColor('rgb')} className=" border-2 px-4 py-2 mt-4 mx-3 rounded-md hover:bg-gray-200">Create RGB Color </button>
        <button onClick={genarateRandomColor} className=" border-2 px-4 py-2 mt-4 mx-3 rounded-md hover:bg-gray-200">Generate Random Color </button>
        </div>
        <div style={{backgroundColor:color}} className=" rounded-lg  flex justify-center text-white items-center flex-col h-[50%] mt-6">
            <h1 className=" text-3xl text-center">{typeOfColor==='hex'?'HEX':'RGB'} Color</h1>
            <h3 onDoubleClick={copytoClipBoard} className=" cursor-pointer text-xl  text-center mt-3">
                {color}
            </h3>
        </div>

    </div>
  )
}

export default RandomColor;