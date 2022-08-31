import React from "react";
import ListItem from "./ListItem";
import ListWrapper from "./ListWrapper";

const AppList = ({ apps }) => {
  let listCols = [];
  let col = [];

  for (let app of apps) {
    // col.push(app);
    col.push({ ...app, index: apps.indexOf(app) + 1 });
    // console.log();
    if (col.length === 3) {
      listCols.push(col);
      col = [];
    }
  }

  return (
    <ListWrapper>
      {listCols.map((col) => (
        <div className="basis-[33.333%] shrink-0 snap-start">
          {col.map((row) => (
            <ListItem
              index={row.index}
              key={row.Id}
              image={row.ImageSrc}
              rating={row.Rating}
              name={row.Name}
            />
          ))}
        </div>
      ))}
    </ListWrapper>
  );
};

export default AppList;
