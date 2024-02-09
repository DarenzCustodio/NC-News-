import { Link } from 'react-router-dom'
import '../../styling/List.css'
import '../../styling/Homepage.css'

export default function Homepage(){
    return (
            <div>
                <h2 className="welcome">Welcome to NC-News!</h2>    
                <Link className="HomepageLink" to="/articles">View all articles</Link>
            </div>
    )
}