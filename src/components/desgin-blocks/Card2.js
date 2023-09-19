import React from "react";

function Card2({image,text,text2}) {
  return (
    <div className="px-md-2 px-0 col-md-11 col-12 mt-md-4 mt-2 hover">
      <div class="card mb-3 border-0 shadow-sm rounded-4">
        <div class="row g-0">
          <div class="col-md-3">
            <img
              src={image}
              class="img-fluid rounded-start h-100"
              alt="..."
            />
          </div>
          <div class="col-md-8 px-md-3 border-start">
            <div class="card-body">
              <h5 class="card-title text-black fw-bold">Evovlving Ai</h5>
              <p class="card-text">
              {text}
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                {text2}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card2;
