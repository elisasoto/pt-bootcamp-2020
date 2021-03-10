export default function Button({ onClick, text, disabled, id }) {
    
    return (
      <button
        disabled={disabled}
        onClick={() => onClick(id)}
      >
        {text}
      </button>
    );
  }