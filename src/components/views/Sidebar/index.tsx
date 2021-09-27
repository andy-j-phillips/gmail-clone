import { Link } from "react-router-dom";
import { Menu } from "antd";
import { Folders } from "src/types/dataTypes";
import { format } from "src/utils";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  folders: Folders;
}

const Sidebar: React.FC<SidebarProps> = ({ folders }) => {
  return (
    <Menu mode="inline" className={styles.sidebar}>
      {folders.map((name: string) => {
        let formattedPath = format.slugify(name);
        return (
          <Menu.Item key={formattedPath}>
            <Link to={`/${formattedPath}`}>{name}</Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};
export default Sidebar;
