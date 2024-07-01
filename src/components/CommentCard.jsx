import '../../styling/CommentCard.css'

export default function CommentCard({comments, setComments}){
    return (
        <div>
        {comments.comments.map((comments, index)=>{
        const actualDate = new Date(`${comments.created_at}`)
        return (
            <div key={index}>
                    <div className="commentCard">
                        <h3>{comments.author}</h3>
                        <p>{comments.body}</p>
                        <p>Created at: {String(actualDate)}</p>
                        <p>Votes: {comments.votes}</p>
                    </div>
                </div>
            )
        })}
        </div>
    )
}
