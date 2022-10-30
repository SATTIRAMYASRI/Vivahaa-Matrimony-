import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Login from '../Login'
import Register from '../Register'
import './index.css'

const initialLoginDetails = [
  {
    id: uuidv4(),
    email: 'ramya@gmail.com',
    password: 'ramya',
  },
  {
    id: uuidv4(),
    email: 'varshi@gmail.com',
    password: 'varshi',
  },
]

class LoginRegister extends Component {
  state = {
    currentForm: 'Login',
    loginDetails: [...initialLoginDetails],
  }

  onToggleCurrentForm = formName => {
    this.setState({currentForm: formName})
  }

  isPasswordCorrect = (eachLogin, email, password) => {
    if (eachLogin.email === email && eachLogin.password === password) {
      return true
    }
    return false
  }

  isUserExists = (eachLogin, email, password) => {
    if (eachLogin.email !== email && eachLogin.password !== password) {
      return false
    }
    return true
  }

  addNewLoginDetails = newRegisterData => {
    const {loginDetails} = this.state
    const newUpdatedLoginDetails = [...loginDetails, newRegisterData]
    this.setState({
      loginDetails: newUpdatedLoginDetails,
    })
  }

  render() {
    const {currentForm} = this.state
    const {onCrossBtnClicked, onSuccessfulLogin} = this.props

    const onLoginCheckValidation = (email, password) => {
      const {loginDetails} = this.state
      const res = loginDetails.filter(eachLogin =>
        this.isPasswordCorrect(eachLogin, email, password),
      )
      if (res.length === 1) {
        onCrossBtnClicked()
        console.log('login sucess')
        onSuccessfulLogin()
      } else {
        console.log('enter valid info')
      }
    }

    const onRegisterCheckValidation = (email, password) => {
      const {loginDetails} = this.state
      const res = loginDetails.filter(eachLogin =>
        this.isUserExists(eachLogin, email, password),
      )
      console.log(res)
      if (res.length === 0) {
        onCrossBtnClicked()
        console.log('Register sucess')
        // this.addNewLoginDetails(newRegisterData)
        onSuccessfulLogin()
      } else {
        console.log('enter valid info')
      }
    }

    return currentForm === 'Login' ? (
      <Login
        onFormSwitch={this.onToggleCurrentForm}
        // currentForm={currentForm}
        onCrossBtnClicked={onCrossBtnClicked}
        onCheckValidation={onLoginCheckValidation}
      />
    ) : (
      <Register
        onFormSwitch={this.onToggleCurrentForm}
        onCrossBtnClicked={onCrossBtnClicked}
        addNewLoginDetails={this.addNewLoginDetails}
        onCheckValidation={onRegisterCheckValidation}
      />
    )
  }
}
export default LoginRegister
