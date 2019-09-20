import React, {  useState } from 'react'
import { UserLogin, UserRegister } from '@/services/login'
import './index.css'

const Login = props => {
  //定义state的值
  const [activeIndex, setActiveIndex] = useState(0);
  const [btns, setBtns] = useState(['登入', '注册']);
  const [registerShow, setRegisterShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');


  //定义方法
  //获取用户名
  let handleUsername = (e) => {
    setUsername(e.target.value)
  }
  //获取密码
  let handlePassword = (e) => {
    setPassword(e.target.value)
  }
  //获取电话号码
  let handlePhone = (e) => {
    setPhone(e.target.value)
  }
  //点击登录或者注册按钮
  let handleSubmit = async () => {
    if (activeIndex === 0) {
      if (username === '' && password === '') {
        alert("用户名密码不可为空")
      } else {
        let result = await UserLogin({
          "username": username,
          "password": password
        })
        if (result.data.code === 1) {
          alert(result.data.msg)
          console.log(props)
          props.history.push('/visual')
        } else {
          alert(result.data.msg)
        }
      }
    } else {
      if (username === '' && password === '' && phone === '') {
        alert("用户名密码不可为空")
      } else {
        let result = await UserRegister({
          "username": username,
          "password": password,
          "phone":phone
        })
        if (result.data.code === 1) {
          alert(result.data.msg)
        } else {
          alert(result.data.msg)
        }
      }
    }

  }
  return (<div className="container">
    <header className="header">
      <div>重点学生日周考成绩录入管理系统</div>
    </header>
    <main className="main">
      <div className="content">
        <div className="fromContent">
          <div className="from-text">
            <div><h2>网站工程</h2></div>
            <div className="tab-list">
              {
                btns.map((item, index) => {
                  return <span key={index} className={activeIndex === index ? 'tab-list-active' : null} onClick={() => {
                    setActiveIndex(index)
                    setRegisterShow(!registerShow)
                  }}>{item}</span>
                })
              }
            </div>
            <div>
              <input className="inp" value={username} type="text" placeholder="牛牛号/电话" onChange={(e) => { handleUsername(e) }} />
            </div>
            <div>
              <input className="inp" value={password} type="password" placeholder="输入密码" onChange={(e) => { handlePassword(e) }} />
            </div>
            <div className="check">
              {!registerShow ? <p><input type="checkbox" />两周内自动登入</p> :
                <input className="inp" value={phone} type="text" placeholder="请输入手机号" onChange={(e) => { handlePhone(e) }} />}
            </div>
            <div>
              <button onClick={handleSubmit}>{registerShow ? '注册' : '登入'}</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  )
}


export default Login

