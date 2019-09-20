import React, { useState } from 'react'
import './index.css'
import { Switch, message } from 'antd'
import Eachart from '../../components/Echart'
import Mask from '../../components/Mask'
import Masks from '../../components/Masks'
import { connect } from 'dva'
import { addStudent } from '../../services/visual'

const VisualDisplay = props => {
  //定义state
  const [name, setName] = useState('')
  const [count, setCount] = useState('')
  const [help, setHelp] = useState('')
  const [flag, setFlag] = useState(false)
  const [vlag, setvlag] = useState(false)
  //获取班级列表的方法
  //   const getClassList = async () => {
  //     let result = await visualClass()
  //     console.log(result.data)
  //   }
  //   console.log(getClassList())
  //name
  const handleName = e => {
    setName(e.target.value)
  }
  //count
  const handleCount = e => {
    setCount(e.target.value)
  }
  //help
  const handleHelp = e => {
    setHelp(e.target.value)
  }

  //添加学生事件
  const addStudentList = async () => {
    let result = await addStudent({
      cid: count,
      stu_name: name,
      repetitions: help
    })
    console.log(result.data)
    if (result.data.code === 1) {
      message.success('添加成功')
    } else {
      message.error('添加失败')
    }
  }

  //弹框出现与隐藏
  const visibles = () => {
    setFlag(true)
  }

  const visible = () => {
    setvlag(true)
  }

  //子父传参事件
  const displays = val => {
    setFlag(val.flag)
  }

  const display = val => {
    setvlag(val.flag)
  }
  return (
    <div className="container">
      <header className="widget header">
        <div className="text">
          <p>重点关注学生考试成绩统计图</p>
        </div>
      </header>
      <main className="main">
        <div className="kindClass">
          <div>切换班级：</div>
          <div>
            <button>创建班级+</button>
          </div>
          <label className="open">
            <Switch></Switch>
            <span>柱形图/线图</span>
          </label>
        </div>
        <div className="addStudent">
          <div>添加学生+:</div>
          <div>
            <input type="text" placeholder="输入姓名" onChange={handleName} />
          </div>
          <div>
            <input type="text" placeholder="末位次数" onChange={handleCount} />
          </div>
          <div>
            <input
              type="text"
              placeholder="结对子，帮扶对象"
              onChange={handleHelp}
            />
          </div>
          <div>
            <button onClick={addStudentList}>添加</button>
          </div>
        </div>
        <div className="tablelist">
          <Eachart></Eachart>
          <div className="addExam">
            <div>
              <button onClick={visibles}>添加成绩+:</button>
            </div>
            <div>
              <button onClick={visible}>添加分析和解决方案+</button>
            </div>
            <div>
              <button
                onClick={() => {
                  props.history.push('/leader')
                }}>
                院长视角
              </button>
            </div>
            <div>
              <button>查看和编辑该学生所有成绩</button>
            </div>
          </div>
        </div>
        {flag ? (
          <div className="tableTimer">
            <Mask flag={flag} displays={displays}></Mask>
          </div>
        ) : (
          ''
        )}
        {vlag ? (
          <div className="tableTimers">
            <Masks vlag={vlag} display={display}></Masks>
          </div>
        ) : (
          ''
        )}
      </main>
    </div>
  )
}

export default connect()(VisualDisplay)
