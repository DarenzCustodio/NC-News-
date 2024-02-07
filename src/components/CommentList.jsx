import {Link} from 'react-router-dom'
import CommentCard from './CommentCard';

export default function CommentList({comments}) {
    console.log("comments--> ", comments);
    return (
        <div>
            <CommentCard comments={comments}/>
        </div>
    )
}