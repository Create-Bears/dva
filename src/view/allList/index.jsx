import React, { useState, useEffect } from 'react'
import { connect } from 'dva'
import ChangeDialog from '@/components/ChangeDialog'
import DeleteDialog from '@/components/deleteDialog'
import './index.css'

const AllList = props => {
  console.log(props)
  let [thList, setThList] = useState(['序号', '日期', '理论', '技能', '分析和解决', '是否周考', '操作'])
  let [tbList,setTbList]=useState([])
  //删除的数据的num值
  let [deleteNum,setDeleteNum]=useState()
  //删除弹框的显示
  let [deleteShow,setDeleteShow]=useState(false)
  //编辑弹框的显示
  let [changeShow,setChangeShow]=useState(false)
  //编辑的数据的num值
  let [changeNum,setChangeNum]=useState()

  useEffect(() => {
    setTbList(props.tableList)
  }, []);

  let handClick =(type,num)=>{
    if(type==='delete'){
      setDeleteShow(true)
      setDeleteNum(num)
    }else{
      setChangeShow(true)
      setChangeNum(num)
    }
  }

  let handDelete=()=>{
    props.deleteTabList(deleteNum)
    setDeleteShow(false)
  }
  //设置回调函数用来控制弹出框的显示隐藏
  let handHide =(flag)=>{
    setChangeShow(flag)
  }
  let handDeleteHide =(flag)=>{
    setDeleteShow(flag)
  }
  return (
    <div className="container">
      <header className="header">
        <div>XX学生日周考试成绩统计表</div>
      </header>
      <main className="main">
        <div className="all-content">
          <div className="con-top">
            <div className="con-top-left">
              <span>讲师:XXX</span>
              <span>学生:XXX</span>
            </div>
            <div className="con-top-right">
              <select name="" id="">
                <option value="">学生一</option>
                <option value="">学生一</option>
                <option value="">学生一</option>
                <option value="">学生一</option>
              </select>
            </div>
          </div>
          <div className="con-bottom">
            <table>
              <thead>
                <tr>
                  {thList.map((item, index) => {
                    return <th key={index}>{item}</th>
                  })}
                </tr>
              </thead>
              <tbody>
                {
                  tbList.map((item,index)=>{
                    return <tr key={index}>
                      <td>{item.num}</td>
                      <td>{item.time}</td>
                      <td>{item.theory}</td>
                      <td>{item.skill}</td>
                      <td className="td-desc">{item.desc}</td>
                      <td>{item.flag}</td>
                      <td>
                        {item.btns.map((key,i)=>{
                          return <span key={i} onClick={()=>handClick(key.type,item.num)}>{key.title}</span>
                        })}
                      </td>
                    </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <DeleteDialog deleteShow={deleteShow} handDeleteHide={handDeleteHide} handDelete={handDelete}/>
      <ChangeDialog changeShow={changeShow} handHide={handHide}/>
    </div>
  )
}

const map2StateProps = (store) => {
  return {
    tableList: store.allList.tableList
  }
}

const map2DiapatchProps=(dispatch)=>{
  return {
    deleteTabList(num){
      dispatch({type:'allList/deleteList',num})
    }
  }
}

export default connect(map2StateProps,map2DiapatchProps)(AllList)
