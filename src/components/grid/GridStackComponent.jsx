import React, { useEffect, useRef } from "react";
import { GridStack } from "gridstack";
import { options } from "./GridItem";

const GridStackComponent = () => {
  const gridsData = useRef(false);

  useEffect(() => {
    GridStack.setupDragIn({
        cellHeight: "150px",
        minRow: 1,
        subGrid: true,
        float:true,
        subGridDynamic: true,
        resizable: {
          handles: 'e,se,s,sw,w'
        }
        })
        gridsData.current = true;
    GridStack.addGrid(document.querySelector(".first"), options);
    if (gridsData.current) return;
    
    //GridStack.addGrid(document.querySelector(".first"), options);
  });

  return (
    <div className="grid">
      <div className="grid-stack">
        <div
          className="first"
          ref={gridsData}
          style={{ backgroundColor: "white" }}
        ></div>{" "}
      </div>
    </div>
  );
};

export default GridStackComponent;
