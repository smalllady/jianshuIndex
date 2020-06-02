import React, { PureComponent } from 'react';
import {Redirect} from 'react-router-dom'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreators } from './store'
import { connect } from 'react-redux'
class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const { login, loginStatus } = this.props
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' ref={(input) => { this.account = input }} />
            <Input placeholder='密码' type='password' ref={(input) => { this.password = input }} />
            <Button onClick={() => login(this.account, this.password)}>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      );
    }else{
      return <Redirect to="/"/>
    }

  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    login: (accountEle, passwordEle) => {
      dispatch(actionCreators.login(accountEle.value, passwordEle.value))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);