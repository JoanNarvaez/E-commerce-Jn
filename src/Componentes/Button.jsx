import "./Button.css";
const Button = ({ children, ...props }) => {
  return (
    <button className="styles" {...props}>
      {children}
    </button>
  );
};
export default Button;
