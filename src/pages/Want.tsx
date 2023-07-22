import { Link } from "react-router-dom";
import React from 'react'

export const Want = () => {
    const [myState, setMyState]=React.useState(false)
    const [stateBtn, setStateBtn] = React.useState(true)
    const [inpChange, setInpChange] = React.useState('')
    const [inpChange1, setInpChange1] = React.useState('')
    return(
        <>
        <p>Да здравсвтует счетчик</p>
        {
            stateBtn ? <button onClick={() => {setStateBtn(false)
                window.confirm('Вы действительно хотите считать?') ? setMyState(true) : setMyState(false)}}>Вы точно хотите счетик увидеть?</button> : <p>Активирован счетчик</p>
        }
        
        {myState && (
            <>
            <input placeholder="Первое число" value={inpChange} onChange={(e) => setInpChange(e.target.value)}></input>
            <input placeholder="Второе число" value={inpChange1} onChange={(e) => setInpChange1(e.target.value)}></input>
            <p>{+inpChange} + {+inpChange1} = {+inpChange + +inpChange1}</p>
            </>
        )}
        <hr></hr>
        <Link to='/'>назад</Link>
        </>
    )
}