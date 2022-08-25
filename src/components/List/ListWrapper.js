import React from "react";

export default function ListWrapper(props) {
  return (
    <React.Fragment>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 ">
        {props.children}
      </div>
    </React.Fragment>
  );
}
