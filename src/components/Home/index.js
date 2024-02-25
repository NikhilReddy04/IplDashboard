import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard/index'

import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount = () => {
    this.fetchTeamDetails()
  }

  fetchTeamDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const jsonData = await response.json()
    const {teams} = jsonData
    const teamsList = teams.map(eachItem => ({
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
      id: eachItem.id,
    }))
    this.setState({teamsList, isLoading: false})
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="home-page-bg-container">
        <div className="home-page-main-container">
          <div className="home-page-heading-container">
            <img
              alt="ipl logo"
              className="ipl-logo"
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            />
            <h1>IPL DASHBOARD</h1>
          </div>
          {!isLoading ? (
            <ul className="home-page-team-list-container">
              {teamsList.map(eachItem => (
                <TeamCard
                  key={eachItem.id}
                  id={eachItem.id}
                  teamDetails={eachItem}
                />
              ))}
            </ul>
          ) : (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
ccbp publish RJSCP9EFN6 domain_name.ccbp.tech