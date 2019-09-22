import React, { useState, useEffect } from 'react'
import { connect } from 'dva'
import ChangeDialog from '@/components/ChangeDialog'
import DeleteDialog from '@/components/deleteDialog'
import Table from '@/components/Table'
import './index.css'

const AllList = props => {
  console.log(props)
  let [thList, setThList] = useState([
    {
      title: '序号',
      dataIndex: 'num'
    },
    {
      title: '日期',
      dataIndex: 'time'
    },
    {
      title: '理论',
      dataIndex: 'theory'
    },
    {
      title: '技能',
      dataIndex: 'skill'
    },
    {
      title: '分析和解决',
      dataIndex: 'desc'
    },
    {
      title: '是否周考',
      dataIndex: 'flag'
    },
    {
      title: '操作',
      render: (text) => (
        <span>
          <a onClick={()=>{setChangeShow(true)}}>编辑</a>
          <a onClick={()=>{setDeleteShow(true)}}>删除</a>
        </span>
      )
    }])

  // let [thList, setThList] = useState(['序号', '日期', '理论', '技能', '分析和解决', '是否周考', '操作'])
  let [tbList, setTbList] = useState([])
  //删除的数据的num值
  let [deleteNum, setDeleteNum] = useState()
  //删除弹框的显示
  let [deleteShow, setDeleteShow] = useState(false)
  //编辑弹框的显示
  let [changeShow, setChangeShow] = useState(false)
  //编辑的数据的num值
  let [changeNum, setChangeNum] = useState()

  useEffect(() => {
    setTbList(props.tableList)
  }, []);

  let handClick = (type, num) => {
    if (type === 'delete') {
      setDeleteShow(true)
      setDeleteNum(num)
    } else {
      setChangeShow(true)
      setChangeNum(num)
    }
  }

  let handDelete = () => {
    props.deleteTabList(deleteNum)
    setDeleteShow(false)
  }
  //设置回调函数用来控制弹出框的显示隐藏
  let handHide = (flag) => {
    setChangeShow(flag)
  }
  let handDeleteHide = (flag) => {
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
            <Table colums={thList} data={tbList} />
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

const map2DiapatchProps = (dispatch) => {
  return {
    deleteTabList(num) {
      dispatch({ type: 'allList/deleteList', num })
    }
  }
}

export default connect(map2StateProps, map2DiapatchProps)(AllList)
