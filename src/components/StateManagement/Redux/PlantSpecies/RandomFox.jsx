import { useState, useEffect } from "react";

export default function RandomFox() {
  const [foxData, setFoxData] = useState([]);

  useEffect(() => {
    fetch("https://randomfox.ca/floof/")
      .then((res) => res.json())
      .then((data) => {
        setFoxData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      <p>RandomFox</p>
      <img src={foxData.image} />
    </>
  );
}
