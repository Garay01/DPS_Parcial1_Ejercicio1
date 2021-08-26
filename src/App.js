import "./App.css";
import Form from "./components/Form";
import ItemCar from "./components/ItemCar";
import { Container, Grid, Typography } from "@material-ui/core";
import {
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useState } from "react";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#BB86FC",
    },
    secondary: {
      main: "#02DAC5",
    },
  },
});
export const useStyles = makeStyles((styles) => ({
  header: {
    paddingTop: styles.spacing(5),
    textAlign: "left",
  },
  paddingY: {
    paddingTop: styles.spacing(2),
    paddingBottom: styles.spacing(2),
  },
  formControl: {
    margin: styles.spacing(1),
    color: "white",
    width: `calc(100% - ${styles.spacing(1)}px)`,
  },
}));

function App() {
  const classes = useStyles();
  const [listProducts, setListProducts] = useState([]);
  return (
    <ThemeProvider theme={theme}>
      <div className="App App-header">
        <Container maxWidth="md">
          <header className={classes.header}>
            <Typography variant="h2" gutterBottom>
              Lista de compras
            </Typography>
          </header>
          <Form
            addProduct={(product) => setListProducts((pl) => [...pl, product])}
          />
          {listProducts.map((prod, index) => (
            <ItemCar
              key={index}
              {...{
                prod,
                index,
                setResult: (prod) =>
                  setListProducts((prods) => {
                    prods.splice(index, 1, prod);
                    return [...prods];
                  }),
                remove: () =>
                  setListProducts((prods) => {
                    prods.splice(index, 1);
                    return [...prods];
                  }),
              }}
            />
          ))}
          {
            <Grid container>
              <Grid
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  paddingBottom: "2em",
                }}
                item
              >
                <Typography style={{ padding: "0 .5em" }} variant="subtitle1">
                  Total:{" "}
                </Typography>
                <Typography variant="subtitle2">
                  $
                  {Math.round(
                    Object.values(listProducts).reduce(
                      (prev, curr) => prev + (curr?.total ?? 0),
                      0
                    ) * 100
                  ) / 100}
                </Typography>
              </Grid>
            </Grid>
          }
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
