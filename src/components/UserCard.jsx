import '../../styling/UserCard.css'

export default function UserCard({allUsers}){
    return (
        <div>
            {allUsers.users.map((user, index)=>{
                return (
                    <div className="userCardContainer" key={index}>
                        <img className="profile-image" src={user.avatar_url} alt="user avatar image"></img>
                        <h2 className='user'>{user.username}</h2>
                        <p>Name: {user.name}</p>
                        <button className='login-button'>Login as me!</button>
                    </div>
                )
            })}
        </div>
    )
}