import '../../styling/CommentCard.css'

export default function CommentCard({comments}){

    return (

        <div>
        {comments.comments.map((comments, index)=>{
        const actualDate = new Date(`${comments.created_at}`)
            return (
                <div key={index}>
                    <div className="commentCard">
                        <h2>comments {index + 1}</h2>
                        <p>{comments.body}</p>
                        <p> author: {comments.author}</p>
                        <p>created at: {String(actualDate)}</p>
                        <p>votes: {comments.votes}</p>
                    </div>
                    <div>                          
                        
                    </div>
                </div>
            )
        })}
    </div>
        )
    }
