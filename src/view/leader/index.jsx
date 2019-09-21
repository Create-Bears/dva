import React from 'react'
import '../visualDisplay/index.css'
import { Switch } from 'antd'
import Eachart from '../../components/Echart'

const Leader = props => {
  return (
    <div className="container">
      <header className="widget header">
        <div className="text">
          <p>重点关注学生考试成绩统计图</p>
        </div>
      </header>
      <main className="main">
        <div className="kindClass">
          <div>选择班级：</div>
          <div>
            <button>1703E</button>
          </div>
          <label className="open">
            <Switch></Switch>
            <span>柱形图/线图</span>
          </label>
        </div>
        <div className="addStudent">
          <div>名单:</div>
          <div>张三</div>
          <div>李四</div>
        </div>
        <div className="tablelist">
          <Eachart></Eachart>
        </div>
      </main>
    </div>
  )
}

export default Leader
