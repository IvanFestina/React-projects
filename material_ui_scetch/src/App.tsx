import React from "react";
import Typography from "@material-ui/core/Typography";
import {AppBar, Button, Container, CssBaseline, Grid, Toolbar} from "@material-ui/core";
import {PhotoCamera} from "@material-ui/icons";
import useStyles from "./styles";


export const App = () => {
    const classes = useStyles()
    return <>
        <CssBaseline/>
        <AppBar position={"relative"}>
            <Toolbar>
                <PhotoCamera/>
                <Typography variant={'h6'}>
                    Photo Album
                </Typography>
            </Toolbar>
        </AppBar>
        <main>
            <div>
                <Container className={classes.container} maxWidth={"sm"}>
                    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                        Photo Album
                    </Typography>
                    <Typography variant='h5' align='center' color='textSecondary' paragraph>
                        Hello everyone! This is a photo album and I'm tying to make this sentence as long as possible.
                    </Typography>
                    <div>
                        <Grid container spacing={2} justify={'center'}>
                            <Grid item>
                                <Button variant={'contained'} color={"primary"}>
                                    See my photos
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant={'outlined'} color={"secondary"}>
                                    Secondary Action
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>

        </main>

    </>
}