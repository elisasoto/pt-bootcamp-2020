function Header() {
  return (
    <header data-testid="header">
      <ul>
        <li data-testid="list">Home</li>
        <li data-testid="list">Courses</li>
        <li data-testid="list">Contact</li>
        <li data-testid="list">About</li>
      </ul>
      <img
        data-testid="image"
        alt="logo"
        width="200"
        height="200"
        src="https://thebridge.tech/blog/wp-content/uploads/2020/10/logo-the-bridge-01.png"
      />
      <button data-testid="button">Toggle dark mode</button>
    </header>
  );
}
export default Header;
