const Header = ({ setColor, color, handleSubmit }) => {
  return (
    <header className="header flex">
      <h1>Get Different Shades And Tints Of Color</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="#7868e6"
          value={color}
          onChange={setColor}
          name="color"
        />
        <button type="submit">Submit</button>
      </form>
    </header>
  );
};

export default Header;
