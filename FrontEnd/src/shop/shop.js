import React from "react";
import Shirts from "../images/cutPink.png";
import "./shop.css";
import Hoodie from "../images/examples/hoodie.jpg";
import Classic from "../images/examples/classicT.jpg";
import Sweatshirt from "../images/examples/sweatshirt.jpg";
import TwoShirts from "../images/examples/twoShirts.jpg";
import { useState } from "react";

const Shop = () => {
  //if a person press "submit" button
  //because the user's input gets not transfered into the db until they press the button
  // if ($post["submit"]) {

  //   /*collecting the data*/
  //   // $size = $post["size"];
  // }

  //wrap it into an if-statement to check that the value isn't 0
  // function StyleForm({ onSubmitData }) {
  //   function SubmitButt(event) {
  //     event.preventDefault();
  //     onSubmitData(event);
  //   }
  // }

  const [size, setSize] = useState();
  const [color, setColor] = useState();

  const sizeChange = (event) => {
    setSize(event.target.value);
  };

  const colorChange = (event) => {
    setColor(event.target.value);
  };

  //wrap it into an if-statement to check that the value isn't 0
  const handleSubmit = () => {
    const postURL = "http://localhost:7967/shirts";
    fetch(postURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        size: size,
        color: color,
      }),
    }).then(() => {
      alert("Your item has been added to the cart!");
    });
  };

  return (
    <div id="shop">
      <img id="bigImg" src={Shirts} alt="" width="100%" height="380" />
      <div id="text1">
        <h1>
          WisdlShirt is the website you never asked for, but always wanted.
        </h1>
        <p id="intro">
          You want it, you get it! Prints EST. 2022
          <br />
          WisdlShirt is a print project, in which you can decide what message
          you want to bring out to the world. Our shirts are available in all
          colors, sizes (so far limited to average sizes, but as soon as this
          goes big I will expand the size spectrum) and they are printed
          on-demand. Our Stockholm factory delivers the best shirt quality with
          high class prints on top. What you have to do? Just choose your
          favourite shirt style and the quote that gets you through yet another
          day in this goddamn dark world.
        </p>
      </div>
      <div id="step1">
        <h2>STEP 1</h2>
        <p id="chose">Choose Your Style</p>
        <div id="photowrapper">
          <div className="styleAlter">
            <p className="styleText">Hoodie</p>
            <img src={Hoodie} alt="" width="80%" />

            <form onSubmit={handleSubmit}>
              <select className="sizeButt" onChange={sizeChange}>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <select className="colorButt" onChange={colorChange}>
                <option value="Blue">Blue</option>
                <option value="Purple">Purple</option>
                <option value="Beige">Beige</option>
                <option value="Green">Green</option>
                <option value="Pink">Pink</option>
              </select>
              <button type="submit" name="submit" value="Add to Cart">
                Add to Cart
              </button>
            </form>
          </div>
          <div className="styleAlter">
            <p className="styleText">Classic T-Shirt</p>
            <img src={Classic} alt="" width="80%" />
            <form onSubmit={handleSubmit}>
              <select className="sizeButt" onChange={sizeChange}>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <select className="colorButt" onChange={colorChange}>
                <option value="Blue">Blue</option>
                <option value="Purple">Purple</option>
                <option value="Beige">Beige</option>
                <option value="Green">Green</option>
                <option value="Pink">Pink</option>
              </select>
              <button type="submit" name="submit" value="Add to Cart">
                Add to Cart
              </button>
            </form>
          </div>
          <div className="styleAlter">
            <p className="styleText">Sweatshirt</p>
            <img src={Sweatshirt} alt="" width="80%" />
            <form onSubmit={handleSubmit}>
              <select className="sizeButt" onChange={sizeChange}>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <select className="colorButt" onChange={colorChange}>
                <option value="Blue">Blue</option>
                <option value="Purple">Purple</option>
                <option value="Beige">Beige</option>
                <option value="Green">Green</option>
                <option value="Pink">Pink</option>
              </select>
              <button type="submit" name="submit" value="Add to Cart">
                Add to Cart
              </button>
            </form>
          </div>
          <div className="styleAlter">
            <p className="styleText">Couple's Deal</p>
            <img src={TwoShirts} alt="" width="80%" />
            <form onSubmit={handleSubmit}>
              <select className="sizeButt" onChange={sizeChange}>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <select className="colorButt" onChange={colorChange}>
                <option value="Blue">Blue</option>
                <option value="Purple">Purple</option>
                <option value="Beige">Beige</option>
                <option value="Green">Green</option>
                <option value="Pink">Pink</option>
              </select>
              <button type="submit" name="submit" value="Add to Cart">
                Add to Cart
              </button>
            </form>
          </div>
        </div>
      </div>
      <div id="step1">
        <h2>STEP 2</h2>
        <p id="wisdl">Choose Your Wisdom</p>
        <div id="wisdomwrapper"></div>
      </div>
    </div>
  );
};
export default Shop;
