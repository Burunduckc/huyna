import { Link } from "react-router-dom"

const arrayOfNames = [{
    name: 'Хочу посчитать свои зубы',
    link: '/increment'
},
{
    name: 'Хочу увидеть котиков!',
    link: '/cats'
},
{
    name: 'Хочу увидеть ассортимент',
    link: '/assorts'
},
{
    name: 'Хочу просто хочу',
    link: '/want'
}]
 
export const Home = ( ) => {
    return(
        <>
        <p>Здарова педики</p>
        <p>Выбирай, куда хочешь отправится:</p>
        <ul>
        {
            arrayOfNames.map((obj, index) => <li key={index} className="homeLi"><Link to={obj.link}>{obj.name}</Link></li>)
        }
        </ul>
        </>
    )
}