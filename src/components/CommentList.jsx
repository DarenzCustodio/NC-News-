import CommentCard from './CommentCard';
import PostComment from './PostComment';

export default function CommentList({comments, setComments}) {

    return (
        <div>
            <PostComment setComments={setComments} comments= {comments}/>
            <CommentCard setComments={setComments} comments={comments}/>
        </div>
    )
}