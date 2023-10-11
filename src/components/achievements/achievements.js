import './achievements.css'
import Title from '../title/title'
import AchievementItem from './achievement-item/achievement-item';
export default function Achievements(){
    const titleData = [{title:'دستاورد و آمار ما'}];
    const AchievementItemData = [
        {number: '24/7',title: 'پشتیبانی همه روزه'},
        {number:'95%',title:'رضایت مشتری'},
        {number:'+1000',title:'خرید'},
        {number:'+1000',title:'لندینگ پیج فعال'}
    ]
    return (
        <section className='Achieve-wrapper'>
            <Title {...titleData[0]}></Title>
            <div className='Achieve-item-wrapper'>
                <AchievementItem {...AchievementItemData[0]}></AchievementItem>
                <AchievementItem {...AchievementItemData[1]}></AchievementItem>
                <AchievementItem {...AchievementItemData[2]}></AchievementItem>
                <AchievementItem {...AchievementItemData[3]}></AchievementItem>
            </div>
        </section>
    )
}