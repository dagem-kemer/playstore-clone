import React from "react";

export default function ListWrapper(props) {
  return (
    <>
      <div className="mt-[88px] flex">
        {props.children}
      </div>
    </>
  );
}
