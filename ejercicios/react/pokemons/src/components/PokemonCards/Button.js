import './styles.css'

export default function Button({ id, onClick, disabled, text }) {
    return (
        <button
            id={id}
            onClick={onClick}
            disabled={disabled}
            >
            
            {text}
        </button>
    )
}
