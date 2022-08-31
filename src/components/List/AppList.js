import ListItem from "./ListItem";
import ListWrapper from "./ListWrapper";

const AppList = ({ apps }) => {
  let listCols = [];
  let col = [];

  for (let app of apps) {
    col.push(app);
    if (col.length === 3) {
      listCols.push(col);
      col = [];
    }
  }
  console.log(listCols);
  return (
    <ListWrapper>
      {listCols.map((col, index) => (
        <div className="basis-[33.333%] shrink-0 snap-start">
          {col.map((row, index) => (
            <ListItem
              index={index}
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
