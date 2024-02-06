import { Link } from 'react-router-dom'
import Header from './Header'
import '/Users/darenz/northcoders/Front-end-portfolio-project/NC-News/styling/List.css'
import Logo from './Logo'
import '/Users/darenz/northcoders/Front-end-portfolio-project/NC-News/styling/Homepage.css'

export default function Homepage(){
    return (
        <>
            <div>
                <Header />
                <h2 className="welcome">Welcome to NC-News!</h2>    
                <Logo />
                <Link className="HomepageLink" to="/articles">View all articles</Link>
            </div>
        </>
    )
}