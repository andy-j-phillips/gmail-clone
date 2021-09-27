import { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useQuery } from "react-query";
import { folder } from "src/api";
import { EmailTable, EmailViewer, Sidebar } from "src/components/views";
import { format } from "src/utils";
import { Folders } from "src/types/dataTypes";

const Routes: React.FC = () => {
  const history = useHistory();
  const {
    isLoading,
    error,
    data: folders,
  } = useQuery<Folders, Error>("folders", folder.getFolders);

  useEffect(() => {
    if (typeof folders !== "undefined" && folders?.length) {
      history.push(`/${format.slugify(folders[0])}`);
    }
  }, [history, folders]);

  if (isLoading || typeof folders === "undefined") {
    // TODO add loader
    return null;
  }

  if (error) {
    // TODO handle error
    console.error(error);
  }

  return (
    <>
      <Sidebar folders={folders} />
      <Switch>
        {folders?.map((path: string) => {
          let formattedPath = format.slugify(path);
          return (
            <Route key={formattedPath} path={`/${formattedPath}`}>
              <Route path={`/${formattedPath}`} component={EmailTable} exact />
              <Route path={`/${formattedPath}/:id`} component={EmailViewer} />
            </Route>
          );
        })}
      </Switch>
    </>
  );
};

export default Routes;
