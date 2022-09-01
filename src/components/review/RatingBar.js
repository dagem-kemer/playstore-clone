const RatingBar = ({value, amount}) => {
  return (
    <div className="flex items-center">
      <div className="pr-4 text-xs block">{value}</div>
      <div className="bg-secondaryGrey rounded-full grow h-[10px]">
        <div className="bg-darkGreen rounded-full h-full" style={{width: `${amount}%`}}></div>
      </div>
    </div>
  );
};

export default RatingBar;
