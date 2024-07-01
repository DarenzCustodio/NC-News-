import { patchVotes, patchVotesDecrement } from "../../api";
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import '../../styling/Vote.css'

export default function UpdateVotes({setVotesCount, votesCount}){
    const {article_id} = useParams()
    const [err, setErr] = useState(null)

     const handleVotesClick = () =>{
        setVotesCount(votesCount + 1)
        patchVotes(article_id).then(()=>{
            setErr(null)
        }).catch((err)=>{
            setErr(err)
        })
     }

     const handleDeleteVotesClick = () => {
        setVotesCount(votesCount - 1)
        patchVotesDecrement(article_id).then(()=>{
            setErr(null)
        })
        .catch((err)=>{
            setErr(err)

        })
     }

     if(err){return <p>Vote unsuccessful... Please try again!</p>}
     return (
        <>
            <h3>Votes: {votesCount}</h3>
        <div className="voteButtonContainer">
            <button className="voteButton" role="button" onClick={handleVotesClick}>vote 👍</button>
        </div>
        <div className="deleteButtonContainer">
            <button className="deleteButton" role="button" onClick={handleDeleteVotesClick}>vote 👎</button>
        </div>
        </>
     )
}