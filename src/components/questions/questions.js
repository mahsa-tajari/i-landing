import './questions.css'
import Title from '../title/title'
import QuestionBox from './question-box/question-box'
export default function Questions() {
    const questionText = [
        {text:'چرا باید یک لندینگ پیج داشته باشم؟'},
        {text:'تا چه زمانی بروزرسانی و پشتیبانی دائمی است؟'},
        {text:'قالب آی لندینگ چقدر برای کسب و کار من مفید است؟'}
    ]
    return(
        <section className='questions-wrapper'>
            <Title title ="سوالات متداول"></Title>
            <div className='question-boxes-wrapper'>
                <QuestionBox {...questionText[0]}></QuestionBox>
                <QuestionBox {...questionText[1]}></QuestionBox>
                <QuestionBox {...questionText[2]}></QuestionBox>
            </div>
        </section>
    )
}