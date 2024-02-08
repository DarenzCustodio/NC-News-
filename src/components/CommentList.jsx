import CommentCard from './CommentCard';

export default function CommentList({comments}) {
    return (
        <div>
            <CommentCard comments={comments}/>
        </div>
    )
}