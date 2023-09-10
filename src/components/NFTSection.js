import "../styles/better.css";

import React, { useState, useEffect, useRef } from "react";
const App = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const imageRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsExpanded(true);
          observer.unobserve(imageRef.current);
        }
      },
      { threshold: 0.5 } // Trigger the observer when the image is 50% in view
    );
    observer.observe(imageRef.current);
  }, []);
  return (
    <div
      className="lol nftParent"
      style={{
        backgroundColor: "#0F0F10",
        minHeight: "62rem",
      }}
    >
      <div
        className={`image-container1`}
        ref={imageRef}
        style={{ paddingTop: "120px" }}
      >
        <div className="exploreBg1"></div>
        <div>
          <img
            className="ellipseExplore nftParent"
            src="/Media/Ellipse.png"
            alt="image"
          />
        </div>
        <div className="exploreBg2"></div>
        <img
          className={`image ${isExpanded ? "expanded" : ""}`}
          src={process.env.PUBLIC_URL + "/Media/NFT3image.png"}
          draggable="false"
          alt="Image"
        />
      </div>
      <div
        className="header"
        style={{ paddingTop: "77px", paddingBottom: "57px" }}
      >
        <img src="/Media/EXPLORERS.svg" />
      </div>
      <br />
      <div
        className="topText"
        style={{ fontSize: "1.4rem", marginBottom: "2rem" }}
      >
        <span>
          Offering you our unique NFT-based subscriptions that give their owners
          reduced fees, Xade Tokens, exclusive collectibles, a free card and
          much more{" "}
        </span>
      </div>
      <br></br>
      <div className="NFTbuttonDiv">
        <button
          className="NFTbutton"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NGtibGlvZ2hhaGw4c2xvN2xhODliMm5ybGcga2lyYW5hbGV4Y0Bt&tmsrc=kiranalexc%40gmail.com ",
              "_blank"
            );
          }}
        >
          Learn More
        </button>
      </div>
      <br />
    </div>
  );
};

export default App;
