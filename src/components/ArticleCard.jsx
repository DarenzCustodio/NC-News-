import {Link} from 'react-router-dom'
import '../App.css'
import '/Users/darenz/northcoders/Front-end-portfolio-project/NC-News/styling/ArticleCard.css'

export default function ArticleCard({articles}){

    return (
         <div>
            {articles.article && articles.article.map((article, index)=>{
                return (
                    <div className="articleContainer" key={article.article_id}>
                        <div className='articleTitle'>
                            <h2>article {index + 1}</h2>
                        </div>
                        <div className="viewLink">                          
                            <Link className="viewComponent" to={`/articles/${article.article_id}`}>View</Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

