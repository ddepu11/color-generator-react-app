import { useState } from "react";

const Colors = ({ item }) => {
  const [copied, setCopied] = useState(false);
  const { type, weight, rgb, hex } = item;

  let textColor = "";

  if (type.trim() === "tint") {
    textColor = "#333";
  }

  return (
    <div
      className="color"
      style={{
        backgroundColor: `#${hex}`,
        color: `${textColor}`,
      }}
      onClick={() => {
        navigator.clipboard.writeText(`#${hex}`).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 3000);
        });
      }}
    >
      <h3>{weight}%</h3>

      <h4>#{hex}</h4>
      {copied ? <p>Copied to the clipboard</p> : ""}
    </div>
  );
};

export default Colors;
