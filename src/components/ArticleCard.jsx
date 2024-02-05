export default function ArticleCard({articles}){

    return (
         <div>
            {articles.article && articles.article.map((article, index)=>{
                return (
                    <div key={index}>
                        <h2>article {index + 1}</h2>
                        <p>author: {article.author}</p>
                        <p>title: {article.title}</p>
                        <p>article_id: {article.article_id}</p>
                        <p>topic: {article.topic}</p>
                        <p>created_at: {article.created_at}</p>
                        <p>votes: {article.votes}</p>
                        <img src={article.article_img_url}></img>
                    </div>
                )
            })}
        </div>
    )
}