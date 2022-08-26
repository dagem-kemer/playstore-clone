const ActionButton = ({label}) => {
  return (
    <button className="bg-skyBlue text-white px-5 py-2 rounded hover:bg-darkBlue hover:shadow">
      {label}
    </button>
  );
};

export default ActionButton;
