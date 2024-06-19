import {Link} from 'react-router-dom'
import '../../styling/ArticleCard.css'

export default function ArticleCard({articles}){

    return (
         <div>
            {articles.article.map((article, index)=>{
                return (
                    <div className="articleContainer" 
                    key={article.article_id}>
                        <div className='articleTitle'>
                            <h2>article {index + 1}</h2>
                            <img className="articleImage"src={article.article_img_url} alt="image of article"></img> 
                            <p>title: {article.title}</p>
                            <p>{article.comment_count} comments</p>
                        <div>              
                            <Link className="viewComponent" to={`/articles/${article.article_id}`}>View</Link>
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}