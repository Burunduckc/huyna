import React from 'react'
import {Link} from 'react-router-dom'
import '../index.scss'
type MyUrl = {
    url: string,
    prevUrl: string
}

export const About: React.FC<MyUrl> = ({prevUrl ,url}) => {
    const [state, setState] = React.useState(false)
    return (
    <>
    <div >
    <img src={state ? prevUrl : url} className='cats' alt="" onClick={() => setState(!state)}/>
    </div>
        {
        state && <Link to='/'> Ха, я с ирака, я с сюрпризом!</Link>
    }
    </>)

}