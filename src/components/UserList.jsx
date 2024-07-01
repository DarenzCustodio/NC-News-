import UserCard from "./UserCard"

export default function UserList({allUsers}){
    return (
        <div>
            <h1>User List:</h1>
            <UserCard allUsers={allUsers} />
        </div>
    )
}