import React from "react";

function Middlecover({children}) {
  return (
    <div className="col-12  p-0 ">
      <div className="row m-0 justify-content-between p-0">
        {children}
      </div>
    </div>
  );
}

export default Middlecover;
