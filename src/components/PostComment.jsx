import { useState} from "react"
import '../../styling/PostComment.css'
import { postComment } from "../../api"
import{ useParams }from "react-router-dom"



export default function PostComment({comments, setComments}){

    const {article_id} = useParams()
    const [userComment, setUserComment] = useState("") 

    const handleSubmit = () =>{
        setComments({author:"tickle122", body:userComment})

        const date = new Date()
        const comment = {author: 'tickle122', body: userComment, 
        votes:0, created_at: date.toISOString()}
        postComment(article_id, comment).then((response)=>{
            setComments((currentComments)=>{
            return {comments: [...currentComments.comments, response.data.comment]} 
            })
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <>
        <div>
        <form>
            <label htmlFor="userComment"></label>
            <textarea 
            name="comments" 
            placeholder='new comment here:' 
            value={userComment}
            onChange={(event)=>{
                setUserComment(event.target.value);
            }}></textarea>
        </form>
        </div>
        <div className="postButtonContainer">
            <button  onClick={handleSubmit} className="postButton" role="button">post</button>
        </div>
        </>
    )
}