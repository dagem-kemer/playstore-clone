import React, { useState, useRef, useEffect } from "react";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import ChevronRightIcon from "../icons/ChevronRightIcon";

export default function ListWrapper(props) {
  const [showNextButtons, setShowNextButtons] = useState(false);
  const [scrollStatus, setScrollStatus] = useState("start");
  const divRef = useRef();

  const scrollRight = () => {
    divRef.current.scrollLeft += divRef.current.clientWidth;
  };

  const scrollLeft = () => {
    divRef.current.scrollLeft -= divRef.current.clientWidth;
  };

  const handleScroll = () => {
    const scrollWidget = divRef.current;
    if (scrollWidget.scrollLeft == 0) {
      setScrollStatus("start");
    } else if (
      scrollWidget.scrollWidth - scrollWidget.clientWidth ==
      scrollWidget.scrollLeft
    ) {
      setScrollStatus("end");
    } else {
      setScrollStatus("middle");
    }
  };

  return (
    <div className="relative">
      <div
        className="flex scroll-smooth overflow-x-auto snap-x snap-mandatory no-scrollbar w-full"
        onMouseEnter={() => setShowNextButtons(true)}
        onMouseLeave={() => setShowNextButtons(false)}
        ref={divRef}
        onScroll={handleScroll}
      >
        {showNextButtons && scrollStatus !== "start" && (
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

        {showNextButtons && scrollStatus !== 'end' && (
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
