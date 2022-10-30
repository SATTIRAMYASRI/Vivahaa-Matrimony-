import {Component} from 'react'
import './index.css'

class UserProfile extends Component {
  render() {
    const {userDetails, onProfileDetailBtnClicked} = this.props
    const {imageUrl, name, age} = userDetails

    const onDetailBtnClicked = () => {
      onProfileDetailBtnClicked(userDetails)
    }

    return (
      <li className="user-card-container">
        <button
          type="button"
          className="user-card-button"
          onClick={onDetailBtnClicked}
        >
          <img src={imageUrl} className="profile-pic" alt="profile-pic" />
          <div className="user-details-container">
            <h1 className="user-name"> {name} </h1>
            <p className="user-designation"> {age} </p>
          </div>
        </button>
      </li>
    )
  }
}
export default UserProfile
