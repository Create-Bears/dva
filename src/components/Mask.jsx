import React from 'react'
import { message, DatePicker } from 'antd'
// import { addExam } from '../services/visual'
const Mask = props => {
  //添加成绩
  //   const addExamScore = async () => {
  //     let result = await addExam({})
  //     if (result.data.code === 1) {
  //       message.success('添加成功')
  //     } else {
  //       message.error('添加失败')
  //     }
  //   }
  //隐藏弹框
  const disvisible = props => {
    props.displays({ flag: !props.flag })
  }
  return (
    <div className="smallMask">
      <h3>新添成绩--XX同学</h3>
      <div>
        <DatePicker
          dateRender={current => {
            const style = {}
            if (current.date() === 1) {
              style.border = '1px solid #1890ff'
              style.borderRadius = '50%'
            }
            return (
              <div className="ant-calendar-date" style={style}>
                {current.date()}
              </div>
            )
          }}
        />
        <button className="yesterday">昨天</button>
      </div>
      <div>
        技能:
        <input type="text" placeholder="数字" />
      </div>
      <div>
        理论:
        <input type="text" placeholder="0-100之间的数字" />
      </div>
      <div>
        <button className="cancel" onClick={() => disvisible(props)}>
          取消
        </button>
        <button className="comfirm" onClick={() => disvisible(props)}>
          确定
        </button>
      </div>
    </div>
  )
}

export default Mask
