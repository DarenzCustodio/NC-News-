import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../../api';
import UpdateVotes from './UpdateVotes';

export default function ArticleManager(){
    
    const {article_id} = useParams()
    const [article, setArticle]= useState()
    const [loading, setLoading]= useState(true)

    useEffect(() => {
        getArticleById({article_id})
        .then((response)=>{
            setArticle(response.data)
            setLoading(false)
        }).catch((err)=>{
            console.log(err)
        })
     } ,[])
    
    if(loading) return <p>page loading...</p>
    else{
        const actualDate = new Date(`${article.article.created_at}`)
    return (
        <>
        <p>article_id: {article.article.article_id}</p>
        <img src={article.article.article_img_url}></img>
        <p>author: {article.article.author}</p>
        <p>comment count: {article.article.comment_count}</p>
        <p>created_at: {String(actualDate)}</p>
        <p>title: {article.article.title}</p>
        <p>topic: {article.article.topic}</p>
        <UpdateVotes/>
        </>
        )
    }
}
