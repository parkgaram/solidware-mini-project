/* @flow */
import React from 'react'

type Props = {
  waiting  : boolean,
  received : boolean,
  success  : boolean
}

class Register extends React.Component {

  constructor(props: Props){
    super(props);
  }

  render(){

    const { waiting, received, success } = this.props
    if(waiting){
      return (<div>기다리시오</div>)
    }else if (received) {
      if(success){
        return (
          <div>
            가입 성공<br/>
            <div>
              Register
              <form>
                Email :
                <input type="text" ref="email" name="email"></input>
                <br/>
                Name :
                <input type="text" ref="name" name="name"></input>
                <br/>
                password:
                <input type="text" ref="password" name="passowrd"></input>
                <br/>
              </form>
              <button onClick={(e) => this.doRegister(e)}>register</button>
            </div>
          </div>)
      }else {
        return (<div>
          가입 실패<br/>
          <div>
            Register
            <form>
              Email :
              <input type="text" ref="email" name="email"></input>
              <br/>
              Name :
              <input type="text" ref="name" name="name"></input>
              <br/>
              password:
              <input type="text" ref="password" name="passowrd"></input>
              <br/>
            </form>
            <button onClick={(e) => this.doRegister(e)}>register</button>
          </div>
          </div>)
      }

    }else{
      return (
        <div>
          Register
          <form>
            Email :
            <input type="text" ref="email" name="email"></input>
            <br/>
            Name :
            <input type="text" ref="name" name="name"></input>
            <br/>
            password:
            <input type="text" ref="password" name="passowrd"></input>
            <br/>
          </form>
          <button onClick={(e) => this.doRegister(e)}>register</button>
        </div>
      )
    }
  }

  doRegister(e) {
    const email    = this.refs.email.value.trim();
    const password = this.refs.password.value.trim();
    const name = this.refs.name.value.trim();
    this.props.requestReg({
      email,
      password,
      name
    });
  }
}

export default Register
