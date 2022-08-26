const ProgressIndicator = () => {
  return (
    <div className="bg-whiteGrey w-full absolute left-0 top-0">
      <div className="w-full animate-marquee">
        <div className="w-3/5 h-1 rounded-full   bg-skyBlue"></div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
