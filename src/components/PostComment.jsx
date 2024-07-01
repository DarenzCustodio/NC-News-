import { useState} from "react"
import '../../styling/PostComment.css'
import { postComment } from "../../api"
import{ useParams }from "react-router-dom"



export default function PostComment({comments, setComments}){

    const {article_id} = useParams()
    const [userComment, setUserComment] = useState("") 
    const [isSuccessful, setIsScucessful] = useState(false)

    const handleSubmit = () =>{
        
        const date = new Date()
        const comment = {author: 'tickle122', body: userComment, 
        votes:0, created_at: date.toISOString()}
        
        postComment(article_id, comment).then((response)=>{
            setIsScucessful(true)
            setComments((currentComments)=>{
                return {comments: [...currentComments.comments, response.data.comment]} 
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    if(isSuccessful) return <p>Comment successfully posted!</p>
    else{
    return (
        <>
        <div className="postButtonContainer">
        <form className="form">
            <label htmlFor="userComment"></label>
            <textarea 
            name="comments" 
            placeholder='Add comment:' 
            value={userComment}
            onChange={(event)=>{
                setUserComment(event.target.value);
            }}></textarea>
        </form>
        <div className="comment-button">
            <button  onClick={handleSubmit} className="postButton" role="button">comment</button>
        </div>
        </div>
        </>
    )
    }
}