import "./button.css";
const Button = ({ children, loading }) => {
    return <button className="button">{!loading ? children : "Please, wait..."}</button>;
};

export default Button;
