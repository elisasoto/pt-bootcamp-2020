import './index.scss'

import { useState, useEffect } from "react";

import Button from './button/Buton'
import Toggle from './toggleButton/Toggle'
import Spinner from './spinner/Spinner'




export default function Cards(){
    
    const [switchOn, setSwitchOn] = useState(false)
    const switchClass =switchOn ? 'switch--on' : 'switch--off'

    const [buttonOn, setButtonOn] = useState(false)
    const buttonClass =buttonOn ? 'switchbtn--on' : 'switchbtn--off'


    useEffect(() => {
        setButtonOn(switchOn);
      }, [switchOn]);

       return (
        <section className='cards-container'>
            <div className='card'>
                <Spinner />
            </div>
            <div className='card'>
                <Toggle switchClass={switchClass} buttonClass={buttonClass} onClick={()=> setSwitchOn(!switchOn)}/>
            </div>
            <div className='card'>
                <Button text='accept' type='accept' />
            </div>
            <div className='card'>
                <Button text='add' type='add' />
            </div>
            <div className='card'>
            </div>
        </section>
    )
}