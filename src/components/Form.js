import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  Button,
  MenuItem,
  Select,
} from "@material-ui/core";
import { useStyles } from "../App";
const products = [
  {
    name: "Jugo de naranja",
    price: "$1.50",
  },
  {
    name: "Galletas",
    price: "$1.00",
  },
  {
    name: "Libra Frijol",
    price: "$1.25",
  },
  {
    name: "Leche",
    price: "$4.75",
  },
  {
    name: "4onz Queso",
    price: "$0.75",
  },
  {
    name: "Libra de Carne",
    price: "$2.00",
  },
  {
    name: "5lbs Azúcar",
    price: "$2.40",
  },
  {
    name: "4lbs Arroz Corriente",
    price: "$2.47",
  },
  {
    name: "2Lbs Pechugas de Pollo",
    price: "$3.80",
  },
  {
    name: "750ML Aceite",
    price: "$1.84",
  },
];
export default function Form({ addProduct }) {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [val, setVal] = useState("");
  return (
    <form noValidate style={{ width: "100%" }}>
      <Grid container className={classes.paddingY}>
        <Grid item xs={12} sm={6}>
          <FormControl
            className={classes.formControl}
            variant="filled"
            {...{ error }}
          >
            <InputLabel>Producto</InputLabel>
            <Select
              id="element"
              value={val}
              onChange={(e) => setVal(e.target.value)}
            >
              <MenuItem value="0">Ninguno</MenuItem>
              {products.map((prod, i) => (
                <MenuItem key={i} value={i + 1}>
                  {prod.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              {error
                ? "Seleccione un producto válido"
                : "Seleccione el producto a añadir"}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0 8px 20px",
          }}
        >
          <Button
            variant="outlined"
            size="large"
            color="primary"
            style={{ width: "100%", padding: "14px 12px" }}
            onClick={() => {
              if (!val || val === "0") return setError(true);
              setError(false);
              setVal("");
              addProduct(products[parseInt(val) - 1]);
            }}
          >
            Agregar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
