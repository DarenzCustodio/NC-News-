import { useParams } from 'react-router-dom';

export default function ArticleInfo({articles}){

    const {article_id} = useParams()

    let article;

    articles.article.forEach((element)=>{
        if(element.article_id === Number(article_id)){
            article = element;
        }
    })

    return (
        <>
        <p>article_id: {article_id}</p>
        <img src={article.article_img_url}></img>
        <p>author: {article.author}</p>
        <p>comment count: {article.comment_count}</p>
        <p>created_at: {article.created_at}</p>
        <p>title: {article.title}</p>
        <p>topic: {article.topic}</p>
        <p>votes: {article.votes}</p>
        </>
    )
}