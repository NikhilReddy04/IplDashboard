import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {umpires, result, venue, date, id} = latestMatchDetails
  const manOfTheMatch = latestMatchDetails.man_of_the_match
  const competingTeam = latestMatchDetails.competing_team
  const competingTeamLogo = latestMatchDetails.competing_team_logo
  const firstInnings = latestMatchDetails.first_innings
  const secondInnings = latestMatchDetails.second_innings
  const matchStatus = latestMatchDetails.match_status

  return (
    <div className="latest-match-main-container">
      <div className="latest-match-container-1">
        <p className="competing-team-heading">{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <div className="latest-match-container-2">
        <img
          alt={`latest match ${competingTeam}`}
          className="competing-team-logo"
          src={competingTeamLogo}
        />
      </div>
      <div className="latest-match-container-3">
        <p className="latest-container-3-para">First Innings</p>
        <p className="latest-container-3-text">{firstInnings}</p>
        <p className="latest-container-3-para">Second Innings</p>
        <p className="latest-container-3-text">{secondInnings}</p>
        <p className="latest-container-3-para">Man of the match</p>
        <p className="latest-container-3-text">{manOfTheMatch}</p>
        <p className="latest-container-3-para">Umpires</p>
        <p className="latest-container-3-text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
