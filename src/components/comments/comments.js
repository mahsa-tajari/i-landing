import './comments.css'
import Title from '../title/title'
import Comment from './comment/comments'
export default function Comments(){
    const titleData = [{title:'نظرات مشتریان'}];
    const commentData = [
        {userName:'فلان فلانیان', userPosition:'توسعه دهنده وب', userProfileImg:'./images/comments/user1.svg', userCm:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. .' },
        {userName:'فلان فلانیان', userPosition:'بنیان گذار استارتاپ', userProfileImg:'./images/comments/user2.svg', userCm:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'},
        {userName:'فلان فلانیان',userPosition:'طراح گرافیک',userProfileImg:'./images/comments/user3.svg',userCm:'ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'},
        {userName:'فلان فلانیان',userPosition:'طراح گرافیک',userProfileImg:'./images/comments/user4.svg',userCm:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'},
        {userName:'فلان فلانیان',userPosition:'هم بنیان گذار',userProfileImg:'./images/comments/user5.svg',userCm:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.'},
        {userName:'شما', userPosition:'عنوان شغلی شما',userProfileImg:'./images/comments/user6.svg'}
    ]
    return(
        <section className='comments-wrapper'>
            <Title {...titleData[0]}></Title>
            <div className='cm-container'>
                <Comment {...commentData[0]}></Comment>
                <Comment {...commentData[1]}></Comment>
                <Comment {...commentData[2]}></Comment>
                <Comment {...commentData[3]}></Comment>
                <Comment {...commentData[4]}></Comment>
                <Comment {...commentData[5]}>
                    <a href='#'>نظر شما در مورد ما چیست؟</a>
                </Comment>
            </div>
        </section>
    )
}