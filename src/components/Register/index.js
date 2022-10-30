import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CaptureDetails from '../CaptureDetails'
import './index.css'

class Register extends Component {
  state = {
    email: '',
    password: '',
    firstname: '',
    middlename: '',
    lastname: '',
    gender: '',
    dateofbirth: '',
    caste: '',
    currentresidence: '',
    occupation: '',
    workingcompanyororganisation: '',
    netsalary: '',
    ctc: '',
    totalexperience: '',
    castepreference: '',
    agepreference: '',
    partnersalarypreference: '',
    phonenumber: '',
    showCaptureDetails: false,
  }

  onEmailChange = event => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = event => {
    this.setState({password: event.target.value})
  }

  onFirstNameChange = event => {
    this.setState({firstname: event.target.value})
  }

  onMiddleNameChange = event => {
    this.setState({middlename: event.target.value})
  }

  onLastNameChange = event => {
    this.setState({lastname: event.target.value})
  }

  onGenderChange = event => {
    this.setState({gender: event.target.gender})
  }

  render() {
    const {
      email,
      password,
      firstname,
      middlename,
      lastname,
      gender,
      dateofbirth,
      caste,
      currentresidence,
      occupation,
      workingcompanyororganisation,
      netsalary,
      ctc,
      totalexperience,
      castepreference,
      agepreference,
      partnersalarypreference,
      phonenumber,
      showCaptureDetails,
    } = this.state
    console.log(email, password, firstname, middlename, lastname, gender)
    const {
      onFormSwitch,
      onCrossBtnClicked,
      onCheckValidation,
      addNewLoginDetails,
    } = this.props

    const onLoginTextClicked = () => {
      onFormSwitch('Login')
    }

    const handleSubmit = event => {
      console.log('onsubmit')
      event.preventDefault()
      if (email !== '' && password !== '') {
        onCheckValidation(email, password)
        onCrossBtnClicked()
        const newRegisterData = {
          id: uuidv4(),
          email,
          password,
        }
        addNewLoginDetails(newRegisterData)
      }
    }

    const CrossBtnClicked = () => {
      onCrossBtnClicked()
    }

    return (
      <div className="register-container">
        <div className="cross-btn-container">
          <button type="button" onClick={CrossBtnClicked} className="cross-btn">
            X
          </button>
        </div>
        <h1 className="register-heading">
          Let's set up your account, while we find Matches for you!
        </h1>
        <form onSubmit={handleSubmit} className="register-form-container">
          <label htmlFor="email" className="register-form-label">
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
            className="register-form-input"
          />
          <br />
          <label htmlFor="password" className="register-form-label">
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
            className="register-form-input"
          />
          <br />
          <label htmlFor="firstname" className="register-form-label">
            Full Name
          </label>
          <br />
          <div className="wrap-container">
            <div className="col6">
              <input
                value={firstname}
                name="firstname"
                id="firstname"
                placeholder="firstname "
                onChange={this.onFirstNameChange}
                className="register-form-input"
              />
              <br />
            </div>
            <div className="col6">
              <input
                value={middlename}
                name="middlename"
                id="middlename"
                placeholder="middlename"
                onChange={this.onMiddleNameChange}
                className="register-form-input"
              />
              <br />
            </div>
            <div className="col6">
              <input
                value={lastname}
                name="lastname"
                id="lastname"
                placeholder="lastname "
                onChange={this.onLastNameChange}
                className="register-form-input"
              />
              <br />
            </div>
          </div>
          {/* <div>
            <label htmlFor="gender" className="register-form-label">
              Gender
            </label>
            <br />
            <input
              id="male"
              type="radio"
              name="gender"
              value="Male"
              onChange={this.onGenderChange}
              className="register-form-input"
              checked="checked"
            />
            <label htmlFor="male" className="register-form-label">
              Male
            </label>
            <input
              id="female"
              type="radio"
              name="gender"
              value="Female"
              onChange={this.onGenderChange}
              className="register-form-input"
            />
            <label htmlFor="female" className="register-form-label">
              Female
            </label>
          </div> */}
          <button type="submit" className="register-login-btn">
            Next
          </button>
        </form>
        <div className="form-navigate-btn-container">
          <button
            type="button"
            onClick={onLoginTextClicked}
            className="form-navigate-btn"
          >
            Already have an account?{' '}
            <span className="form-navigate-btn-text">Login</span>
          </button>
        </div>
        <br />
      </div>
    )
  }
}
export default Register
