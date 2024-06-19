import { useContext } from 'react'
import '../../styling/NavBar.css'
import { Link } from 'react-router-dom'
import { UserContext } from './UserProvider'

export default function NavBar() {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)

    return (
        <nav className='topNav'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/articles">articles</Link>
                </li>
                <li>
                    <Link to="/users">users</Link>
                </li>
                <li className='loggedInUser'>logged in: {loggedInUser.username}</li>
            </ul>
        </nav>
    )
}