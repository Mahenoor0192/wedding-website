import React from "react";
import HTMLFlipBook from "react-pageflip";

const FlipbookAnimation = () => {
  const images = [
    "DSC03295.JPG",
    "DSC03660.JPG",
    "DSC03892.JPG",
    "DSC04130.JPG",
    "DSC04536.JPG",
    "DSC04764.JPG",
  ];

  return (
    <div style={{ width: "80%", margin: "0 auto", height: "100vh" }}>
      <h1 style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px", fontSize: "50px" }}>
       Heyyy! Turn Over the Page & Explore Our Album 
      </h1>
      <HTMLFlipBook
        width={300}
        height={400}
        flipDuration={1500}
        style={{
          margin: "20px auto",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2), 0 0 20px #ff7eb3, 0 0 40px #ff758c, 0 0 60px #ff6b7a",
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="page">
            <img
              src={require(`../../assets/images/${image}`)}
              alt={`Page ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default FlipbookAnimation;
