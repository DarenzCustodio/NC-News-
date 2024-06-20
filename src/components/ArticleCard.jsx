import {Link} from 'react-router-dom'
import '../../styling/ArticleCard.css'
import UpdateVotes from './UpdateVotes'

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
                            <p>
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="24"  viewBox="0 0 24 20"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-thumb-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                            </svg>
                            {article.votes}
                            </p>
                            <p>
                            <svg  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-message-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9h8" /><path d="M8 13h6" /><path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z" />
                                </svg>
                                <p className='comment-count'>
                                {article.comment_count}
                                    </p>
                                </p>      
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