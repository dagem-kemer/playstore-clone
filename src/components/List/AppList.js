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

  return (
    <ListWrapper>
      {listCols.map((col) => (
        <div key={col} className="basis-[33.333%] shrink-0 snap-start">
          {col.map((row) => (
            <ListItem
              index={row}
              key={row}
              image="https://yt3.ggpht.com/ytc/AMLnZu-CbOUpKWnChEpvLaIwfJu9PvYGb1RE2h46c-7qng=s900-c-k-c0x00ffffff-no-rj"
              rating="3.9"
              name="Super fun game"
            />
          ))}
        </div>
      ))}
    </ListWrapper>
  );
};

export default AppList;
