import { userProps } from "../types/user"

import Search from "../components/Search"
import User from "../components/User"

import { useState } from "react"
import Error from "../components/Error"

const Home = () => {
  const [user, setUser] = useState<userProps | null>(null)
  const [error, setError] = useState(false)

  const loadUser = async(userName: string) => {
    setUser(null)
    setError(false)

    const res = await fetch(`https://api.github.com/users/${userName}`)

    if (!res.ok) {
      setError(true)
      return
    }

    const data = await res.json()

    const { avatar_url, login, location, followers, following } = data

    const userData: userProps = {
      avatar_url,
      login,
      location,
      followers,
      following
    }

    setUser(userData)

  }

  return (
    <>
      <Search loadUser={loadUser} />
      {user && <User {...user} />}
      {error && <Error />}
    </>
  )
}

export default Home