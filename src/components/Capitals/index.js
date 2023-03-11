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

// Write your code here

class Capitals extends Component {
  state = {
    activeCapital: countryAndCapitalsList[0].id,
  }

  onOptionChange = event => {
    this.setState({activeCapital: event.target.value})
  }

  getFilteredCountryCapital = () => {
    const {activeCapital} = this.state

    const filteredCountryCapital = countryAndCapitalsList.filter(
      each => each.id === activeCapital,
    )

    return filteredCountryCapital
  }

  render() {
    const filteredData = this.getFilteredCountryCapital()
    const {country} = filteredData[0]
    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select onChange={this.onOptionChange} className="capital-select">
              {countryAndCapitalsList.map(eachCapital => (
                <option
                  value={eachCapital.id}
                  key={eachCapital.id}
                  className="option"
                >
                  {eachCapital.capitalDisplayText}
                </option>
              ))}
            </select>

            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
