import { useContext, useState, useEffect} from 'react';
import UserList from './UserList';
import { getUsers } from '../../api';


export default function UserManager(){
  const [loading, setLoading] = useState(true)
  const [allUsers, setAllUsers] = useState()

  useEffect(()=>{
    getUsers()
    .then((response)=>{
        setAllUsers(response.data)
        setLoading(false)
    })
    .catch((err)=>{
        console.log(err);
    })
}, [])

  if(loading) return <p>page loading...</p>  
  else{
      return (
    <>
    <div>
        <UserList allUsers={allUsers} />
     </div>
    </>
    )
}
}