import { useState, useEffect } from "react";
import "./App.css";
import Values from "values.js";
import Header from "./components/Header";
import Color from "./components/Colors";

function App() {
  const [colors, setColors] = useState([]);
  const [color, setColor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function handleChange(e) {
    const newColor = e.target.value.trim();
    setColor(newColor);
  }
  const getShadesAndTints = () => {
    let c = color === null || color === "" ? "#7868e6" : color;
    try {
      const shadesAndTints = new Values(c);
      setColors(shadesAndTints.all());
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }

    setLoading(false);
  };

  function handleSubmit(e) {
    e.preventDefault();
    getShadesAndTints();
  }
  useEffect(() => {
    getShadesAndTints();
  }, []);

  // console.log(colors);
  return (
    <div className="container">
      <Header
        error={error}
        setColor={handleChange}
        handleSubmit={handleSubmit}
        color={color}
      />
      <main>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          colors.map((item, index) => <Color key={index} item={item} />)
        )}
      </main>
    </div>
  );
}

export default App;
