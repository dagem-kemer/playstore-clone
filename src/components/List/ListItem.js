import AppItem from "./AppItem";

const ListItem = ({ image, index, name, rating, type, numbered }) => {
  return (
    <div className="flex hover:bg-black hover:bg-opacity-5 rounded-lg ml-4">
      {!numbered && <section className="self-center text-darkGrey mr-2 basis-8 flex justify-center">
        <div>{index}</div>
      </section>}
      <AppItem image={image} name={name} rating={rating} type={type} />
    </div>
  );
};

export default ListItem;
