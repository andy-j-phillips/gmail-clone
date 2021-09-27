import { Space as AntSpace, SpaceProps as AntSpaceProps } from "antd";

interface SpaceProps extends AntSpaceProps {}

const Space: React.FC<SpaceProps> = (props) => <AntSpace {...props} />;

export default Space;
