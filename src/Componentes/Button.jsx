import "./Button.css";
const Button = ({ children, ...props }) => {
  return (
    <div className="contenedor">
      <button className="styles" {...props}>
        {children}
      </button>
    </div>
  );
};
export default Button;
