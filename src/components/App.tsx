import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Terminal from "./terminal/Terminal";
import { makeStyles } from "@material-ui/styles";

const sidebarWidth = 240;

const useStyles = makeStyles(theme => ({
  app: {
    display: 'flex',
  },
  sidebar: {
    width: sidebarWidth,
  },
  terminal: {
    display: 'flex',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div id="app" className={classes.app}>
      <Sidebar className={classes.sidebar} />
      <Terminal className={classes.terminal}/>
    </div>
  );
}

export default App;
