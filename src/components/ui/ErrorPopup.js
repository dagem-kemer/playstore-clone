import CloseIcon from "../icons/CloseIcon";

const ErrorPopup = ({error, handleClose}) => {
  return (
    <div className="bg-white bg-opacity-60 absolute top-0 w-full h-full z-50 flex justify-center items-start">
      <div className="bg-white border border-gray-100 shadow-2xl mt-20 w-1/3 px-4 py-6">
        <section className="flex justify-between">
          <p className="text-xl font-medium text-red-800">{error.title}</p>

          <button onClick={handleClose}>
            <CloseIcon />
          </button>
        </section>
        <p className="mt-4 text-sm text-red-700">{error.description}</p>
      </div>
    </div>
  );
};

export default ErrorPopup;
