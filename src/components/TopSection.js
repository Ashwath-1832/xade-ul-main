import React from "react";
import "../styles/style.css";
// import video from "../assets/Video.mp4";

export default function TopSection() {
  return (
    <>
      <div
        style={{
          // marginTop: "7%",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundImage: 'url("/Media/BGleft.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            backgroundPosition: "left center",
            position: "absolute", // Position the pseudo-element
            top: 0, // Adjust as needed
            left: 0, // Adjust as needed
            width: "100%", // Adjust as needed
            height: "100%",
          }}
        ></div>

        <div
          style={{
            backgroundImage: 'url("/Media/newbg.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto",
            backgroundPosition: "right center",
            position: "absolute", // Position the pseudo-element
            top: 0, // Adjust as needed
            left: 0, // Adjust as needed
            width: "100%", // Adjust as needed
            height: "100%",
          }}
        ></div>
        {/* <video autoPlay={true} muted={true} loop={true}> */}
        {/* <source src={video} type="video/mp4" /> */}
        {/* </video> */}
        <div style={{ position: "relative" }}>
          <div
            role="heading"
            aria-level="1"
            style={{
              fontFamily: "Euclid Circular A-Light",
              textAlign: "center",
              fontStyle: "normal",
              width: "45rem",
            }}
          >
            <h1
              style={{
                lineHeight: "normal",
                marginBottom: "7%",
                fontWeight: "lighter",
                fontSize: "5rem",
              }}
            >
              Reshaping the future of
              <span
                style={{
                  fontFamily: "PPEditorialNew-Italic",
                  // fontStyle: "italic",
                  fontWeight: "lighter",
                }}
              >
                {" "}
                Finance.
              </span>
            </h1>
          </div>

          <div
            style={{
              color: "#B3C5BB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                width: "50rem",
                textAlign: "center",
                fontSize: "1.5rem",
              }}
            >
              Meet the world’s first financial app powered by DeFi protocols
              that provides banking services on-chain
            </span>
          </div>
          <br />
          {/* <br />
          <br /> */}
          <br />
        </div>
      </div>
      <br />
    </>
  );
}
