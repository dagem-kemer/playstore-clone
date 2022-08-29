import classNames from "classnames";

const Chip = ({ label, active }) => {
  const ChipStyle = classNames({
    "rounded-full  px-4 py-1 text-sm box-border cursor-pointer": true,
    "border text-darkGrey border-darkGrey hover:bg-black hover:bg-opacity-5": !active,
    "text-darkerGreen bg-darkerGreen bg-opacity-10 hover:bg-opacity-20": active
  });
  return <a className={ChipStyle}>{label}</a>;
};

export default Chip;
