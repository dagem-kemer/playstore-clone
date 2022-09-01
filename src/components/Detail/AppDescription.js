const AppDescription = ({ name, image }) => {
  return (
    <>
      <h1 className="text-black text-6xl font-bold">{name}</h1>
      <div className="mt-4">
        {/* producer */}
        <h2 className="text-darkerGreen font-bold">Kitika Games</h2>
        {/* features */}
        <div className="text-sm">
          <span>Contains Ad</span>
          <span className="ml-2">In app purchases</span>
        </div>
      </div>

      {/* app icon */}
      <div className="absolute right-0 top-[48px]">
        <div className="w-[240px] h-[240px] bg-red-500 rounded-[20%] shadow-xl overflow-hidden">
          <img src={image} className="w-full h-full object-cover" />
        </div>
      </div>
    </>
  );
};

export default AppDescription;
