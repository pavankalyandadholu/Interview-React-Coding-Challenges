import { useState } from "react";
import style from "./index.module.css";
import { accordianData as data } from "./data";
const Accordian = () => {
  const [selected, setSelected] = useState(null);
    const [enableMultiSelecton , setEnableMultiSelecton ] = useState(false);
    const [multiple , setMultiple ] = useState([])

function handleSingleSelectioin(id){
    setSelected((prev)=>prev===id?null:id);
}
function handleMultiSelectioin(id){
  let cpyMultiple=[...multiple];
  const findIndexCurrentId= cpyMultiple.indexOf(id);
  findIndexCurrentId === -1 ? cpyMultiple.push(id):cpyMultiple.splice(findIndexCurrentId,1);
  setMultiple([...cpyMultiple])

}


  return (
    <section className={style.wrapper}>
        {/* Enable Mulitiselection button */}
        <button onClick={()=>setEnableMultiSelecton(prev=>!prev)}> {enableMultiSelecton?"Disable Multi Selection":"Enable Multi Selection"} </button>

      <div className={style.accordian}>
        {data && data.length > 0 ? (
          <div>
            {data.map((item) => (
                <div className={style.item} key={item.id}>

              <div onClick={()=>enableMultiSelecton?handleMultiSelectioin(item.id):handleSingleSelectioin(item.id)} className={style.title} >
                <h3>{item.question}</h3>

                <span>{enableMultiSelecton? multiple.includes(item.id)? "--":"+" : selected=== item.id ?"--":"+"}</span>
              </div>
              {
               enableMultiSelecton? multiple.includes(item.id)&& <div className={style.content }>
               {item.answer}
           </div>  : selected === item.id &&
                    <div className={style.content }>
                        {item.answer}
                    </div>
                
              }
              </div>
            ))}
          </div>
        ) : (
          <div>No data Found</div>
        )}
      </div>
    </section>
  );
};

export default Accordian;
