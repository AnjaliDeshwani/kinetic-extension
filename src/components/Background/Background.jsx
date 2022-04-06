import { useEffect, useState } from "react";
import "./Backgound.css";

export const Background = () => {
  const [imgSource, setImgSource] = useState();

  useEffect(() => {
    fetch(`https://source.unsplash.com/1600x900/?wallpaper`).then(
      (response) => {
        setImgSource(response.url);
      }
    );
  }, []);

  return (
    <div className="background">
      <div
        className="background-image p-abs top-btm-lft-rgt"
        style={{ backgroundImage: `url("${imgSource}")` }}
      ></div>
      <div className="background-overlay p-fix top-btm-lft-rgt"></div>
    </div>
  );
};
