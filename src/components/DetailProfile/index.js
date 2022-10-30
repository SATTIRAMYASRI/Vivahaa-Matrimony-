import {Component} from 'react'
import './index.css'

class DetailProfile extends Component {
  render() {
    const {fullDetails, onDetailClose} = this.props
    const {
      imageUrl,
      name,
      age,
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
      totalexperience,
    } = fullDetails[0]

    const onDetailCloseBtnClicked = () => {
      onDetailClose()
    }

    return (
      <div className="detail-profile-bg-container">
        <div className="cross-btn-container">
          <button
            type="button"
            onClick={onDetailCloseBtnClicked}
            className="cross-btn"
          >
            X
          </button>
        </div>
        <img src={imageUrl} className="detail-profile-img-container" />
        <div className="detail-profile-data-container">
          <p className="detail-profile-title">
            Name: <span className="detail-profile-value">{name}</span>
          </p>
          <p className="detail-profile-title">
            Age: <span className="detail-profile-value">{age}</span>
          </p>
          <p className="detail-profile-title">
            First Name:{' '}
            <span className="detail-profile-value">{firstname}</span>
          </p>
          <p className="detail-profile-title">
            Middle Name:{' '}
            <span className="detail-profile-value">{middlename}</span>
          </p>
          <p className="detail-profile-title">
            Last Name: <span className="detail-profile-value">{lastname}</span>
          </p>
          <p className="detail-profile-title">
            Gender: <span className="detail-profile-value">{gender}</span>
          </p>
          <p className="detail-profile-title">
            Date Of Birth:{' '}
            <span className="detail-profile-value">{dateofbirth}</span>
          </p>
          <p className="detail-profile-title">
            Caste: <span className="detail-profile-value">{caste}</span>
          </p>
          <p className="detail-profile-title">
            Current Residence:{' '}
            <span className="detail-profile-value">{currentresidence}</span>
          </p>
          <p className="detail-profile-title">
            Occupation:{' '}
            <span className="detail-profile-value">{occupation}</span>
          </p>
          <p className="detail-profile-title">
            Working Company:{' '}
            <span className="detail-profile-value">
              {workingcompanyororganisation}
            </span>
          </p>
          <p className="detail-profile-title">
            Net Salary:{' '}
            <span className="detail-profile-value">{netsalary}</span>
          </p>
          <p className="detail-profile-title">
            Total Experience:{' '}
            <span className="detail-profile-value">{totalexperience}</span>
          </p>
        </div>
      </div>
    )
  }
}
export default DetailProfile
