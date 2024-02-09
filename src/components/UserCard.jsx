import '../../styling/UserCard.css'

export default function UserCard({allUsers}){
    return (
        <div>
            {allUsers.users.map((user, index)=>{
                return (
                    <div className="userCardContainer" key={index}>
                        <h2>User {index + 1}</h2>
                        <p>username: {user.username}</p>
                        <p>name: {user.name}</p>
                        <img src={user.avatar_url} alt="user avatar image"></img>
                    </div>
                )
            })}
        </div>
    )
}