import { createStyles, Drawer, makeStyles, Theme } from "@material-ui/core";
import { useState } from "react";
import FileTree from "./file-tree/FileTree";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => {
    createStyles({
        sidebar: {
            display: 'flex',
            width: drawerWidth,
        },
        drawer: {
            width: drawerWidth,
        },
    });
})

function Sidebar(props: any) {
    const classes = useStyles();
    const [open] = useState(true);

    return (
        <div className={ classes.sidebar }>
            <Drawer
                className={ classes.drawer }
                variant="persistent"
                anchor="left"
                open={open}
            >
                <FileTree />
            </Drawer>
        </div>
    );
}

export default Sidebar;