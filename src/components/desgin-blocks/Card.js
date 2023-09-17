import React from "react";

function Card({ image, text1, text2 }) {
  return (
    <div className="dib px-2">
      <div class="card text-bg-dark border-0">
        <img src={image} class="card-img" alt="..." />
        <div class="card-img-overlay over text-center h-100">
          <h5 class=" display-6 mt-5 pt-5 align-self-center">{text1}</h5>
          <p class="card-text">{text2}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
