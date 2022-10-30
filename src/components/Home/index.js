import {Component} from 'react'
import LoginRegister from '../LoginRegister'
import ProfileDetails from '../ProfileDetails'
import './index.css'

class Home extends Component {
  state = {isCardOpend: false, isLoginSuccess: false}

  onLoginBtnClicked = () => {
    const {isCardOpend} = this.state
    this.setState({
      isCardOpend: !isCardOpend,
    })
  }

  onSuccessfulLogin = () => {
    this.setState({isLoginSuccess: true})
  }

  onCrossBtnClicked = () => {
    this.setState({isCardOpend: false})
  }

  render() {
    const {isCardOpend, isLoginSuccess} = this.state
    const LoginLogoutBtn = isLoginSuccess ? 'Logout' : ' Login / Signup'

    return (
      <div className="background-container">
        <div className="home-page-bg-container">
          <nav className="nav-bg-container">
            <h1 className="nav-website-name">Vivahaa Matrimoney</h1>
            <button
              type="button"
              className="Login-btn"
              onClick={this.onLoginBtnClicked}
            >
              {LoginLogoutBtn}
            </button>
          </nav>
          <div className="nav-login-card-container">
            {isCardOpend === true && (
              <LoginRegister
                onCrossBtnClicked={this.onCrossBtnClicked}
                onSuccessfulLogin={this.onSuccessfulLogin}
              />
            )}
          </div>
          <p className="home-page-heading">
            Trusted Matrimony & Matchmaking Services
          </p>
        </div>
        <div className="profile-bg-container">
          <ProfileDetails />
        </div>
      </div>
    )
  }
}

export default Home
