export default function Input({ onChange, value }) {
    return (
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder="Add a Todo"
        maxLength="50"
      />
    );
  }

  