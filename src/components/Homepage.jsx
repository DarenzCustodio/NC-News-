import { Link } from 'react-router-dom'
import Header from './Header'

export default function Homepage(){
    return (
        <>
            <div>
                <Header />
                <ul>
                    <li>
                        <Link to="/articles">View all articles</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
