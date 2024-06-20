import {Link} from 'react-router-dom'
import '../../styling/ArticleCard.css'

export default function ArticleCard({articles}){

    return (
         <div className="flex-Container">
            {articles.article.map((article, index)=>{
                return (
                    <div >
                        <div className='card'>
                        <img className="articleImage" src={article.article_img_url} alt="image of article"></img> 
                        <div className='card-content'>
                            <p className='topic'>{article.topic}</p>
                            <p className='heading'> {article.title}</p>
                            <p className='author'>by {article.author}</p>
                            <p>{article.comment_count} comments</p>           
                            <Link className="btn" to={`/articles/${article.article_id}`}>View</Link>
                        </div>
                    <div>
                        </div>
                        <div>
                        </div>
                        </div>
                        </div>
                        
                )
            })}
        </div>
    )
}