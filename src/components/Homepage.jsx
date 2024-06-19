import { Link } from 'react-router-dom'
import '../../styling/List.css'
import '../../styling/Homepage.css'

export default function Homepage(){
    return (
        <body>
            <div>
                <p>Welcome to Northcoders News, your go-to source for the latest updates, insightful articles, and in-depth analysis on a wide range of topics. Whether you are a tech enthusiast, a coding newbie, or just someone looking to stay informed, Northcoders News has something for everyone.
                </p>
                <p>  To start exploring, click the button below to visit our articles page. Happy reading!</p>
                <Link className="HomepageLink" to="/articles">View all articles</Link>
            </div>
        </body>
    )
}