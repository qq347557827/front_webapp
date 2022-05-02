import './index.scss'
import { connect } from 'react-redux'
import { Card, NavBar, Form, Button, Input, Toast } from 'antd-mobile'
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { getCaptcha, login } from '@/api/user'

function Login(props) {
  const { sendLogin } = props
  const history = useHistory()
  const [captchaSvg, setCaptchaSvg] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [code, setCode] = useState()
  const back = () => {
    history.go(-1)
  }

  const captcha = () => {
    getCaptcha(props.userState.sid).then((res) => {
      console.log(' %c 🐱‍🏍 props: ', 'font-size:20px;background-color: #42b983;color:#fff;', props)
      console.log(' %c 🐱‍🏍 res: ', 'font-size:20px;background-color: #42b983;color:#fff;', res)
      if (res.data.code === 200) {
        setCaptchaSvg(res.data.data)
      } else {
        setCaptchaSvg('验证码加载失败,亲重试')
      }
    })
  }
  const submitForm = () => {
    console.log(' %c 🐱‍🏍 username: ', 'font-size:20px;background-color: #42b983;color:#fff;', username, password, code)
    sendLogin({
      username,
      password,
      code,
      sid: props.userState.sid,
    })
      .then((res) => {
        console.log(' %c 🐱‍🏍 res: ', 'font-size:20px;background-color: #42b983;color:#fff;', res)
        if (res.data.code === 200) {
          Toast.show({
            icon: 'success',
            content: '登錄成功',
            afterClose: () => {
              history.go(-1)
            },
          })
        } else if (res.data.code === 401) {
          Toast.show({
            icon: 'success',
            content: '驗證碼錯誤',
          })
        } else {
          Toast.show({
            icon: 'success',
            content: '用户名或者密码错误',
          })
        }
      })
      .catch((err) => {
        console.log(' %c 🐱‍🏍 err: ', 'font-size:20px;background-color: #42b983;color:#fff;', err)
        Toast.show({
          content: '服务器错误，请重试',
        })
      })
  }

  useEffect(() => {
    captcha()
  }, [])
  return (
    <div className={'login'}>
      <NavBar onBack={back} style={{ '--border-bottom': '1px solid #eeeeee' }} />
      <Card>
        <div>
          <Form
            name="form"
            layout="horizontal"
            onFinish={submitForm}
            footer={
              <Button block type="submit" color="primary" size="large">
                提交
              </Button>
            }
          >
            <Form.Header>请登录用户</Form.Header>
            <Form.Item label="账号" name="username" rules={formRules.username}>
              <Input value={username} onChange={(val) => setUsername(val)} placeholder="请输入姓名" />
            </Form.Item>
            <Form.Item label="密码" name="password" rules={formRules.password}>
              <Input value={password} type={'password'} onChange={(val) => setPassword(val)} placeholder="请输入密码" />
            </Form.Item>
            <Form.Item label="验证码" name="code" rules={formRules.code}>
              <Input value={code} onChange={(val) => setCode(val)} placeholder="请输入验证码" />
            </Form.Item>
            <div
              style={{ height: '38px', marginLeft: '114px' }}
              dangerouslySetInnerHTML={{ __html: captchaSvg }}
              onClick={captcha}
            />
          </Form>
        </div>
      </Card>
    </div>
  )
}
const formRules = {
  username: [{ required: true, message: '账号不能为空' }],
  password: [{ required: true, message: '密码不能为空' }],
  code: [{ required: true, message: '验证码不能为空' }],
}
const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch) => {
  return {
    sendLogin: (data) => {
      return new Promise((resolve, reject) => {
        dispatch({
          type: 'submit_login',
          payload: {
            data,
            resolve,
            reject,
          },
        })
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
