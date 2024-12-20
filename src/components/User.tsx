import { userProps } from "../types/user"

import { MdLocationOn } from "react-icons/md";

import { Link } from 'react-router-dom' 

import classes from './User.module.css'

const User = ({ login, avatar_url, followers, following, location }: userProps) => {
  return (
    <div className={classes.user}>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
      { location && (
        <p className={classes.location}>
        <MdLocationOn />
        <span>{location}</span>
        </p>
      )}
      <div className={classes.stats}>
        <div>
          <p>seguidores:</p>
          <p className={classes.number}>{followers}</p>
        </div>
        <div>
          <p>seguindo:</p>
          <p className={classes.number}>{following}</p>
        </div>
      </div>
      <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
    </div>
  )
}

export default User