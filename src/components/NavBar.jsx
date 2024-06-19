import { useContext } from 'react'
import '../../styling/NavBar.css'
import { Link } from 'react-router-dom'
import { UserContext } from './UserProvider'

export default function NavBar() {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext)

    return (
        <nav className='navBarContainer'>
            <ul className='navUnorderedList'>
                <li className='navList'>
                    <Link to="/">Home</Link>
                </li>
                <li className='navList'>
                    <Link to="/articles">articles</Link>
                </li>
                <li className='navList'>
                    <Link to="/users">users</Link>
                </li>
                <li className='loggedInUser'>logged in: {loggedInUser.username}</li>
            </ul>
        </nav>
    )
}