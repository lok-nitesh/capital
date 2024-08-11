import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    selectedCapitalId: countryAndCapitalsList[0].id,
  }

  handleCapitalChange = event => {
    this.setState({selectedCapitalId: event.target.value})
  }

  render() {
    const {selectedCapitalId} = this.state
    const selectedCountry = countryAndCapitalsList.find(
      each => each.id === selectedCapitalId,
    ).country

    return (
      <div className="app-container">
        <div className="content-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="dropdown-container">
            <select
              className="dropdown"
              value={selectedCapitalId}
              onChange={this.handleCapitalChange}
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question-text">is capital of which country</p>
          </div>
          <p className="country-name">{selectedCountry}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
