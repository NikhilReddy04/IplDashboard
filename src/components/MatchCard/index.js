import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {umpires, result, id} = matchDetails
  const manOfTheMatch = matchDetails.man_of_the_match
  const competingTeam = matchDetails.competing_team
  const competingTeamLogo = matchDetails.competing_team_logo
  const matchStatus = matchDetails.match_status
  const wonOrLostStatus = matchStatus === 'Won' ? 'won-status' : 'lost-status'
  return (
    <li className="match-card-container">
      <img
        className="competing-team-card-image"
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
      />
      <p className="match-card-result-heading">{competingTeam}</p>
      <p className="match-card-result-para">{result}</p>
      <p className={wonOrLostStatus}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
