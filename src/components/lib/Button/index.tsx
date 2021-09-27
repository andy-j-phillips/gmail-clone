import { Button as AntButton, ButtonProps as AntButtonProps } from "antd";

interface ButtonProps extends AntButtonProps {}

const Button: React.FC<ButtonProps> = (props) => <AntButton {...props} />;

export default Button;
