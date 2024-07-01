import CommentCard from './CommentCard';
import PostComment from './PostComment';
import '../../styling/CommentList.css';

export default function CommentList({comments, setComments}) {

    return (
        <div>
            <PostComment setComments={setComments} comments= {comments}/>
        <div className='comment-container'>
            <h2>Comments 💬 :</h2>
            <CommentCard setComments={setComments} comments={comments}/>
        </div>
        </div>
    )
}