import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { productsSelector,productsActions } from './productsReducer'

const StoreProducts = () => {
    const dispatch=useDispatch();
    const {products}= useSelector(productsSelector);
    const [title, setTitle] = React.useState('')
    console.log(products);
    function handleAdd(){
        dispatch(productsActions.add({title}))
        setTitle('')
    }
  return (
    <>
    <div>StoreProducts</div>
    <div>
        {
            products.length && products.map((p,i)=>{
                return(<p key={i}>{p.title}</p>)
            })
        }
    </div>
    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" />
    <button onClick={handleAdd}>Add</button>
    </>

  )
}

export default StoreProducts