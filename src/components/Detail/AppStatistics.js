import StarIcon from "../icons/StarIcon";

const AppStatistics = ({ downloads, reviews }) => {
  return (
    <div className="flex text-sm mt-4 mb-6 py-3">
      {/* rating */}
      <div className="mr-4">
        <div className="flex justify-center items-center text-lightBlack">
          <span>4.3</span>
          <StarIcon />
        </div>
        <div className="text-center text-xs">{reviews} reviews</div>
      </div>
      {/* download numbers */}
      <div className="mx-6 flex flex-col items-center">
        <span className="block text-lightBlack">{downloads}</span>
        <span className="block text-xs">Downloads</span>
      </div>
      {/* users */}
      <div>
        <div className="flex justify-center h-[20px]">
          <img
            src="https://play-lh.googleusercontent.com/IciOnDFecb5Xt50Q2jlcNC0LPI7LEGxNojroo-s3AozcyS-vDCwtq4fn7u3wZmRna8OewG9PBrWC-i7i=w48-h16-rw"
            className="block h-4"
            alt="Content rating"
          />
        </div>
        <div className="text-center text-xs">Everyone</div>
      </div>
    </div>
  );
};

export default AppStatistics;
