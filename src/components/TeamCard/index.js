import './index.css'

import {Link} from 'react-router-dom'

const teamCard = props => {
  const {teamDetails, id} = props
  const {name, teamImageUrl} = teamDetails
  return (
    <li className="team-card-container">
      <Link className="match-link" to={`/team-matches/${id}`}>
        <div className="team-logo-container">
          <img src={teamImageUrl} alt={name} className="team-logo" />
        </div>
        <div className="team-name-container">
          <p className="team-card-name-para">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default teamCard
