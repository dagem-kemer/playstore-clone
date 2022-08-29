import React, { useState, useRef } from "react";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import ChevronRightIcon from "../icons/ChevronRightIcon";

export default function ListWrapper(props) {
  const [showNextButtons, setShowNextButtons] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const divRef = useRef();

  const scrollRight = () => {
    divRef.current.scrollLeft += divRef.current.clientWidth;
  };

  const scrollLeft = () => {
    divRef.current.scrollLeft -= divRef.current.clientWidth;
  };

  return (
    <div className="relative">
      <div
        className="flex scroll-smooth overflow-x-auto snap-x snap-mandatory no-scrollbar w-full"
        onMouseEnter={() => setShowNextButtons(true)}
        onMouseLeave={() => setShowNextButtons(false)}
        ref={divRef}
        onScroll={() => {
          setScrollPos(divRef?.current.scrollLeft);
          console.log(divRef.current.scrollLeft);
        }}
      >
        {showNextButtons && !!scrollPos && (
          <div className="absolute top-[calc(50%-56px)] -left-3">
            <button
              className="bg-slate-50  rounded-full w-[56px] h-[56px] flex items-center justify-center shadow-lg"
              onClick={scrollLeft}
            >
              <ChevronLeftIcon />
            </button>
          </div>
        )}

        {props.children}

        {showNextButtons && (
          <div className="absolute top-[calc(50%-56px)] -right-3">
            <button
              className="bg-slate-50  rounded-full w-[56px] h-[56px] flex items-center justify-center shadow-lg"
              onClick={scrollRight}
            >
              <ChevronRightIcon />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
