import React, { Component } from 'react'
import './index.css'
import { Switch } from 'antd'
import Eachart from '../../components/Echart'
import Eachartes from '../../components/Echarts'

class VisualDisplay extends Component {
  render() {
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
              <button>1703E</button>
            </div>
            <label className="open">
              <Switch></Switch>
              <span>柱形图/线图</span>
            </label>
          </div>
          <div className="addStudent">
            <div>添加学生+:</div>
            <div>
              <input type="text" placeholder="输入姓名" />
            </div>
            <div>
              <input type="text" placeholder="末位次数" />
            </div>
            <div>
              <input type="text" placeholder="结对子，帮扶对象" />
            </div>
            <div>
              <button>添加</button>
            </div>
          </div>
          <div className="tablelist">
            <Eachart></Eachart>
          </div>
          <div className="tablelists">
            <Eachartes></Eachartes>
          </div>
        </main>
      </div>
    )
  }
}

export default VisualDisplay
