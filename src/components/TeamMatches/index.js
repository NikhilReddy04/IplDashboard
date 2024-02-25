import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import MatchCard from '../MatchCard/index'

import LatestMatch from '../LatestMatch/index'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: [],
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount = () => {
    this.fetchTeamMatchDetails()
  }

  fetchTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const jsonData = await response.json()
    console.log(jsonData.team_banner_url)
    const teamBannerUrl = jsonData.team_banner_url
    const latestMatchDetails = jsonData.latest_match_details
    const recentMatches = jsonData.recent_matches
    this.setState({
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      isLoading: false,
    })
  }

  render() {
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
      isLoading,
    } = this.state
    return (
      <div className="team-matches-bg-container">
        {!isLoading ? (
          <div className="team-matches-main-container">
            <div className="team-banner-container">
              <img
                src={teamBannerUrl}
                alt="team banner"
                className="team-banner-image"
              />
            </div>
            <h1 className="match-card-sub-heading">Latest Match</h1>
            <div className="latest-match-container">
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            </div>
            <h1 className="match-card-sub-heading">Recent Matches</h1>
            <ul className="recent-matches-container">
              {recentMatches.map(eachItem => (
                <MatchCard key={eachItem.id} matchDetails={eachItem} />
              ))}
            </ul>
          </div>
        ) : (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
