import {Component} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

class Login extends Component {
  state = {email: '', password: ''}

  onEmailChange = event => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {email, password} = this.state
    const {onFormSwitch, onCrossBtnClicked, onCheckValidation} = this.props

    const onRegisterTextClicked = () => {
      onFormSwitch('Register')
    }

    const CrossBtnClicked = () => {
      onCrossBtnClicked()
    }

    const handleSubmit = event => {
      event.preventDefault()
      onCheckValidation(email, password)
      this.setState({email: '', password: ''})
    }

    return (
      <div className="login-container">
        <div className="cross-btn-container">
          <button type="button" onClick={CrossBtnClicked} className="cross-btn">
            X
          </button>
        </div>
        <h1 className="login-heading">Welcome back! Please Login</h1>
        <form onSubmit={handleSubmit} className="login-form-container">
          <label htmlFor="email" className="login-form-label">
            Email
          </label>
          <br />
          <input
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
            value={email}
            onChange={this.onEmailChange}
            className="login-form-input"
          />
          <br />
          <label htmlFor="password" className="login-form-label">
            Password
          </label>
          <br />
          <input
            type="password"
            placeholder="*******"
            id="password"
            value={password}
            name="password"
            onChange={this.onPasswordChange}
            className="login-form-input"
          />
          <br />

          <button type="submit" className="form-login-btn">
            Log In
          </button>
        </form>
        <div className="form-navigate-btn-container">
          <button
            type="button"
            onClick={onRegisterTextClicked}
            className="form-navigate-btn"
          >
            Don't have an account?{' '}
            <span className="form-navigate-btn-text">Register</span>
          </button>
        </div>
      </div>
    )
  }
}
export default Login
