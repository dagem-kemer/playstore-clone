import AppItem from "./AppItem";

const ListItem = ({ image, index, name, rating, numbered }) => {
  return (
    <div className="flex hover:bg-black hover:bg-opacity-5 rounded-lg ml-4 pl-2">
      {!numbered && (
        <section className="self-center text-darkGrey mr-2 basis-8 flex justify-center">
          <div>{index}</div>
        </section>
      )}
      <AppItem image={image} name={name} rating={rating} />
    </div>
  );
};

export default ListItem;
