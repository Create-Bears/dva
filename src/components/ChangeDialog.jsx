import React from 'react'

const ChangeDialog = props=>{
  let {changeShow,handHide}=props;
  return (
    <div style={{display:changeShow?'block':'none'}} className="dialog">
    <div className="mask-change">
       <h2>编辑内容</h2>
       <div className="mask-change-inp"> 
         <label>理论:</label><input type="text" placeholder="0-100之间数字"/>
       </div>
       <div className="mask-change-inp">
         <label>技能:</label><input type="text" placeholder="0-100之间数字"/>
       </div>
       <div className="mask-change-choose">
         <div><input type="checkbox"/>日考</div>
         <div><input type="checkbox"/>周考</div>
       </div>
       <div className="mask-change-inp">
         <label>分析解决方案:</label>
         <textarea name="" id="" cols="30" rows="4"></textarea>
       </div>
       <div className="mask-change-btns"> 
         <button onClick={()=>handHide(false)}>取消</button>
         <button style={{backgroundColor:'#1890FF'}}>确定</button>
       </div> 
    </div>       
 </div> 
  )
}

export default ChangeDialog