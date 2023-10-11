export default function Comment({userName,userPosition,userProfileImg,userCm,children}){
    return(
        <div className="comment">
            <div className="user-info">
                <div className="user-profile"><img src={userProfileImg} alt="profile" /></div>
                <div className="user">
                    <h4>{userName}</h4>
                    <span>{userPosition}</span>
                </div>
            </div>
            <p>{userCm}</p>
            {children}
        </div>
    )
}