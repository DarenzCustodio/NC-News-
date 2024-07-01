import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../../api';
import UpdateVotes from './UpdateVotes';
import '../../styling/ArticleManager.css'

export default function ArticleManager(){
    
    const {article_id} = useParams()
    const [article, setArticle]= useState()
    const [loading, setLoading]= useState(true)
    const [votesCount, setVotesCount]= useState()
    
    useEffect(() => {
        getArticleById({article_id})
        .then((response)=>{
            setArticle(response.data)
            setVotesCount(response.data.article.votes)
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
        <div className='articleContainer'>
        <img src={article.article.article_img_url} alt="image of article"></img>
        <h3>Title: {article.article.title}</h3>
        <p>Author: {article.article.author}</p>
        <p>Topic: {article.article.topic}</p>
        <p>Comment count: {article.article.comment_count}</p>
        <p>Created at: {String(actualDate)}</p>
        </div>
        <div className='votesContainer'>
        <UpdateVotes votesCount= {votesCount} setVotesCount={setVotesCount}/>
        </div>
        </>
        )
    }
}