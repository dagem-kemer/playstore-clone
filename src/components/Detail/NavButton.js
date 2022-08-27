const NavButton = ({ children, onClick }) => {
  return (
    <button
      className="p-3 rounded-full hover:bg-black hover:bg-opacity-5"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NavButton;
