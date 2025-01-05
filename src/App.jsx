import Accordian from "./Components/Accordian";
import RandomColor from "./Components/Random Color/RandomColor";

export default function App() {
  return (
    <>
    {/* Accordian Project */}
    <Accordian/>
    <hr className=" border-2" />
    {/* Color */}
    <RandomColor/>
    <hr className=" border-2" />
    
    </>
  )
}