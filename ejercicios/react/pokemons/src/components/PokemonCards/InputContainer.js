import './styles.css'

import Button from './Button'

export default function InputContainer({
    className,
    value,
    onChange,
    type,
    placeholder,
    onClick,
    disabled, 
    
}) {
    return (
        <div className={className}>
            <input
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}></input>
            <Button id='searchbtn' onClick={onClick} disabled = {disabled} text='Search Pokemon' />
        </div>
    )
}
