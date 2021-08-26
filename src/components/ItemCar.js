import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  Typography,
  Avatar,
  IconButton,
  makeStyles,
  Grid,
  TextField,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  cardContent: {
    textAlign: "left",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {},
}));
export default function ItemCar({ prod, index, setResult, remove }) {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    setResult({ ...prod, total: quantity * parseFloat(prod.price.substr(1)) });
  }, [quantity]);
  return (
    <Grid style={{ margin: "1em 0" }} container>
      <Grid xs={12} item>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                {index + 1}
              </Avatar>
            }
            action={
              <Grid
                alignItems="center"
                spacing={3}
                style={{ padding: "0 1em" }}
                container
              >
                <Grid style={{ display: "flex", alignItems: "center" }} item>
                  <IconButton
                    onClick={() => setQuantity((q) => (q ? q - 1 : 0))}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#303030"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M19 13H5v-2h14v2z" />
                    </svg>
                  </IconButton>
                  <Typography style={{ padding: "0 1em" }} variant="subtitle1">
                    {quantity}
                  </Typography>
                  <IconButton onClick={() => setQuantity(quantity + 1)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#303030"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                  </IconButton>
                </Grid>
                <Grid item>
                  <Avatar style={{ backgroundColor: red["A100"] }}>
                    <IconButton onClick={() => remove()}>X</IconButton>
                  </Avatar>
                </Grid>
              </Grid>
            }
            title={
              <Typography className={classes.cardContent} variant="h5">
                {prod.name}
              </Typography>
            }
            subheader={
              <Typography
                className={classes.cardContent}
                variant="subtitle2"
                color="textSecondary"
              >
                {prod.price}
              </Typography>
            }
          />
        </Card>
      </Grid>
    </Grid>
  );
}
