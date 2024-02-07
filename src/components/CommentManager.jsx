import { useState, useEffect } from "react";
import { getArticleComments } from "../../api";
import CommentList from "./CommentList";
import { useParams } from 'react-router-dom';

export default function CommentManager(){
    const [comments, setComments] = useState()
    const [loading, setLoading] = useState(true)
    const {article_id} = useParams()


    useEffect(()=>{
        getArticleComments({article_id})
        .then((response)=>{
            setComments(response.data)
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    if(loading) return <p>page loading...</p>
    else{
        return(
            <>
                <div>
                    <CommentList comments={comments}/>
                </div>
            </>
        )
    }
}
