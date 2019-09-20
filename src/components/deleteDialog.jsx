import React from 'react'

const DeleteDialog = props=>{
  let {deleteShow,handDeleteHide,handDelete}=props
  return (
    <div style={{display:deleteShow?'block':'none'}} className="dialog">
    <div className="mask">
       <div className="mask-desc">
         <span className="warn">!</span><span>你确定删除吗?</span>
       </div>   
       <div className="mask-btns"> 
         <button onClick={()=>handDeleteHide()}>取消</button>
         <button style={{backgroundColor:'#1890FF'}} onClick={()=>handDelete()}>确定</button>
       </div>   
    </div>       
 </div> 
  )
}

export default DeleteDialog