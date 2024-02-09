import UserCard from "./UserCard"

export default function UserList({allUsers}){
    return (
        <div>
            <UserCard allUsers={allUsers} />
        </div>
    )
}