import React from 'react'
import { message, DatePicker } from 'antd'
// import { addExam } from '../services/visual'
const Masks = props => {
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
  const disvisibles = props => {
    props.display({ vlag: !props.vlag })
  }
  return (
    <div className="smallMasks">
      <h3>新添分析--XX同学</h3>
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
        <span className="fxExam">分析:</span>
        <textarea></textarea>
      </div>
      <div>
        <span className="jExam">解决方案:</span>
        <textarea></textarea>
      </div>
      <div>
        <button className="cancel" onClick={() => disvisibles(props)}>
          取消
        </button>
        <button className="comfirm" onClick={() => disvisibles(props)}>
          确定
        </button>
      </div>
    </div>
  )
}

export default Masks
