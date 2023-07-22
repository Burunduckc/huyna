import {Link} from 'react-router-dom'


export const NotFound = () => {
    return (
        <>
        <h1>Здесь нихуя нету</h1>
        <Link to='/'>Вернутся на главную</Link>
        </>
    )
}