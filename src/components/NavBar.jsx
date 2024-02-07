import '/Users/darenz/northcoders/Front-end-portfolio-project/NC-News/styling/NavBar.css'
import {Link} from 'react-router-dom'

export default function NavBar(){
    return(
        <nav className='navBarContainer'>
            <ul className='navUnorderedList'>
                <li className='navList'>
                    <Link to="/">Home</Link>
                </li>
                <li className='navList'>
                    <Link to="/articles">articles</Link>
                </li>
            </ul>
        </nav>
    )
}