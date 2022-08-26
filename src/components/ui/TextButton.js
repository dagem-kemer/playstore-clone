import { Link } from "react-router-dom";

const TextButton = ({label, dest}) => {
  return (
    <Link to={dest} className="text-skyBlue font-bold hover:bg-skyBlue hover:bg-opacity-5 py-2 px-3 rounded">
      {label}
    </Link>
  );
};

export default TextButton;
