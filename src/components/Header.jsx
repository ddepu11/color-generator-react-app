const Header = ({ setColor, color, handleSubmit, error }) => {
  return (
    <header className="header flex">
      <h1>Get Different Shades And Tints Of A Color</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={error ? "error" : ""}
          type="text"
          placeholder="#7868e6"
          value={color}
          onChange={setColor}
          name="color"
        />
        <button type="submit">Generate</button>
      </form>
    </header>
  );
};

export default Header;
