const Colors = ({ item }) => {
  const { type, weight, rgb, hex } = item;

  let textColor = "";

  if (type.trim() === "tint") {
    textColor = "#333";
  }

  console.log(type.trim() === "tint");

  return (
    <div
      className="color"
      style={{
        backgroundColor: `#${hex}`,
        color: `${textColor}`,
      }}
      onClick={() => {
        navigator.clipboard.writeText(`#${hex}`).then(() => {});
      }}
    >
      <h3>{weight}%</h3>
      <h4>#{hex}</h4>
      <p>{}</p>
    </div>
  );
};

export default Colors;
