import {Component} from 'react'
import UserProfile from '../UserProfile'
import DetailProfile from '../DetailProfile'
import './index.css'

const intialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    age: 27,
    name: 'Esther Raj',
    firstname: 'Esther',
    middlename: 'Raj',
    lastname: 'T',
    gender: 'Male',
    dateofbirth: '20-01-1989',
    caste: 'Reddy',
    currentresidence: 'Vizag',
    occupation: 'Software Developer',
    workingcompanyororganisation: 'NxtWave',
    netsalary: '50Lpa',
    ctc: '50',
    totalexperience: '5',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    age: 30,
    firstname: 'Floyd',
    middlename: 'Miles',
    lastname: 'Y',
    gender: 'Female',
    dateofbirth: '20-12-1985',
    caste: 'Kamma',
    currentresidence: 'Hyderabad',
    occupation: 'Doctor',
    workingcompanyororganisation: 'Sarada Hospital',
    netsalary: '10Lpa',
    ctc: '10',
    totalexperience: '2',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    age: 23,
    firstname: 'Jacob',
    middlename: 'Jones',
    lastname: 'Pammi',
    gender: 'Female',
    dateofbirth: '1-01-1998',
    caste: 'Bhramin',
    currentresidence: 'TamilNadu',
    occupation: 'Teacher',
    workingcompanyororganisation: 'Delhi Public School',
    netsalary: '5Lpa',
    ctc: '5',
    totalexperience: '1',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    age: 40,
    firstname: 'Devon',
    middlename: 'Lane',
    lastname: 'P',
    gender: 'Male',
    dateofbirth: '18-01-1978',
    caste: 'Kapu',
    currentresidence: 'Vizayawada',
    occupation: 'Business',
    workingcompanyororganisation: 'SwipeWire',
    netsalary: '1cpa',
    ctc: '1000',
    totalexperience: '15',
  },
]

class profileDetails extends Component {
  state = {
    age: 0,
    caste: '',
    city: '',
    role: '',
    openDetailPage: false,
    userDetailsList: intialUserDetailsList,
    fullDetails: {},
  }

  onAgeChange = event => {
    this.setState({age: event.target.value})
  }

  onCasteChange = event => {
    this.setState({caste: event.target.value})
  }

  onCurrentResidenceChange = event => {
    this.setState({city: event.target.value})
  }

  onOccupationChange = event => {
    this.setState({role: event.target.value})
  }

  getFilteredData = () => {
    this.preventDefault()
  }

  onProfileDetailBtnClicked = userDetails => {
    const fullUserDetails = intialUserDetailsList.filter(
      eachUser => eachUser.uniqueNo === userDetails.uniqueNo,
    )
    this.setState({fullDetails: fullUserDetails, openDetailPage: true})
  }

  onDetailClose = () => {
    this.setState({openDetailPage: false})
  }

  render() {
    const {
      age,
      caste,
      city,
      role,
      userDetailsList,
      openDetailPage,
      fullDetails,
    } = this.state
    console.log(openDetailPage)
    const userFilteredList = userDetailsList.filter(
      eachUser =>
        eachUser.age > age &&
        String(eachUser.city).includes(city) &&
        String(eachUser.caste).includes(caste) &&
        String(eachUser.role).includes(role),
    )

    return (
      <div className="app-container">
        <h1 className="title">Select Your Filters</h1>
        <form onSubmit={this.getFilteredData} className="formEl">
          <select id="Age" name="Age" onChange={this.onAgeChange}>
            <option value="20">above 20</option>
            <option value="25">above 25</option>
            <option value="30">above 30</option>
            <option value="35">above 35</option>
          </select>
          <select id="Caste" name="Caste" onChange={this.onCasteChange}>
            <option value="Reddy">Reddy</option>
            <option value="Kamma">Kamma</option>
            <option value="Kapu">Kapu</option>
            <option value="Bhramin">Bhramin</option>
          </select>
          <select
            id="Currentresidence"
            name="Currentresidence"
            onChange={this.onCurrentResidenceChange}
          >
            <option value="Vizayawada">Vizayawada</option>
            <option value="TamilNadu">TamilNadu</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Vizag">Vizag</option>
          </select>
          <select
            id="Occupation"
            name="Occupation"
            onChange={this.onOccupationChange}
          >
            <option value="Software Developer">Software Developer</option>
            <option value="Doctor">Doctor</option>
            <option value="Teacher">Teacher</option>
            <option value="Business">Business</option>
          </select>
          <button type="submit">Add Filters</button>
        </form>

        <h1 className="title">Profiles</h1>
        <ul className="list-container">
          {!openDetailPage &&
            userFilteredList.map(eachUser => (
              <UserProfile
                userDetails={eachUser}
                key={eachUser.uniqueNo}
                onProfileDetailBtnClicked={this.onProfileDetailBtnClicked}
              />
            ))}
        </ul>
        {openDetailPage && (
          <DetailProfile
            fullDetails={fullDetails}
            onDetailClose={this.onDetailClose}
          />
        )}
      </div>
    )
  }
}

export default profileDetails
