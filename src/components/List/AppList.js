import React from "react";
import ListItem from "./ListItem";
import ListWrapper from "./ListWrapper";
import { Link } from "react-router-dom";
const AppList = ({ apps }) => {
  let listCols = [];
  let col = [];

  for (let app of apps) {
    col.push({ ...app, index: apps.indexOf(app) + 1 });
    if (col.length === 3) {
      listCols.push(col);
      col = [];
    }
  }

  return (
    <ListWrapper>
      {listCols.map((col, index) => (
        <div key={index} className="basis-[33.333%] shrink-0 snap-start">
          {col.map((row) => (
            <Link to={row.id}>
              <ListItem
                index={row.index}
                key={row.Id}
                image={row.ImageSrc}
                rating={row.Rating}
                name={row.Name}
                type={row.Type}
              />
            </Link>
          ))}
        </div>
      ))}
    </ListWrapper>
  );
};

export default AppList;
