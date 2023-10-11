export default function AchievementItem({number,title}){
    return(
        <div className="achieve-item">
            <span>{number}</span>
            <p>{title}</p>
        </div>
    )
}