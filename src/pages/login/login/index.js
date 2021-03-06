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
      console.log(' %c π±βπ props: ', 'font-size:20px;background-color: #42b983;color:#fff;', props)
      console.log(' %c π±βπ res: ', 'font-size:20px;background-color: #42b983;color:#fff;', res)
      if (res.data.code === 200) {
        setCaptchaSvg(res.data.data)
      } else {
        setCaptchaSvg('ιͺθ―η ε θ½½ε€±θ΄₯,δΊ²ιθ―')
      }
    })
  }
  const submitForm = () => {
    console.log(' %c π±βπ username: ', 'font-size:20px;background-color: #42b983;color:#fff;', username, password, code)
    sendLogin({
      username,
      password,
      code,
      sid: props.userState.sid,
    })
      .then((res) => {
        console.log(' %c π±βπ res: ', 'font-size:20px;background-color: #42b983;color:#fff;', res)
        if (res.data.code === 200) {
          Toast.show({
            icon: 'success',
            content: 'η»ιζε',
            afterClose: () => {
              history.go(-1)
            },
          })
        } else if (res.data.code === 401) {
          Toast.show({
            icon: 'success',
            content: 'ι©θ­η’Όι―θͺ€',
          })
        } else {
          Toast.show({
            icon: 'success',
            content: 'η¨ζ·εζθε―η ιθ――',
          })
        }
      })
      .catch((err) => {
        console.log(' %c π±βπ err: ', 'font-size:20px;background-color: #42b983;color:#fff;', err)
        Toast.show({
          content: 'ζε‘ε¨ιθ――οΌθ―·ιθ―',
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
                ζδΊ€
              </Button>
            }
          >
            <Form.Header>θ―·η»ε½η¨ζ·</Form.Header>
            <Form.Item label="θ΄¦ε·" name="username" rules={formRules.username}>
              <Input value={username} onChange={(val) => setUsername(val)} placeholder="θ―·θΎε₯ε§ε" />
            </Form.Item>
            <Form.Item label="ε―η " name="password" rules={formRules.password}>
              <Input value={password} type={'password'} onChange={(val) => setPassword(val)} placeholder="θ―·θΎε₯ε―η " />
            </Form.Item>
            <Form.Item label="ιͺθ―η " name="code" rules={formRules.code}>
              <Input value={code} onChange={(val) => setCode(val)} placeholder="θ―·θΎε₯ιͺθ―η " />
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
  username: [{ required: true, message: 'θ΄¦ε·δΈθ½δΈΊη©Ί' }],
  password: [{ required: true, message: 'ε―η δΈθ½δΈΊη©Ί' }],
  code: [{ required: true, message: 'ιͺθ―η δΈθ½δΈΊη©Ί' }],
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
