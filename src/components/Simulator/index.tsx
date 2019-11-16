import React, { useReducer, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import {
  Paper,
  FormControl,
  RadioGroup,
  Radio,
  Grid,
  Slider,
  FormControlLabel
} from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import HelpOutlineSharpIcon from "@material-ui/icons/HelpOutline";
import {
  SimulatorReducer,
  SimulatorInitialState,
  SimulatorState,
  MIN_MONEY,
  MAX_MONEY,
  AVAILABLE_MONTHS
} from "./SimulatorReducer";
import { NumberFm } from "../../lib/helpers";
import { Theme } from "../../App";
import { ReactComponent as QuestionMarkLogo } from "../../images/question_mark_sm.svg";

interface SimulatorRow {
  state: SimulatorState;
  dispatch: any;
}

const Styles = {
  Simulator: {
    padding: "10rem 3rem 3rem 10rem",
    overflow: "hidden",
    width: "90%",
    height: "80%",
    position: "absolute",
    top: "20%",
    left: "10%"
  },
  Debug: {
    // border: '1px solid black'
  }
};

const RowOne: React.FC<SimulatorRow> = ({ state, dispatch }) => (
  <Fragment>
    <Grid item sm={7}>
      <Typography
        variant="h1"
        style={{
          ...Styles.Debug,
          gridColumn: "1",
          fontFamily: "Playfair Display",
          textAlign: "left"
        }}
      >
        Quiero {NumberFm(state.money)} <br /> a {state.months} meses.
      </Typography>
    </Grid>
    <Grid item sm={5} style={{ display: "flex", justifyContent: "flex-end" }}>
      <QuestionMarkLogo />
    </Grid>
  </Fragment>
);

const RowTwo: React.FC<SimulatorRow> = ({ state, dispatch }) => (
  <Fragment>
    <Grid item sm={3}>
      <FormControl
        className="flex-centered"
        style={{
          ...Styles.Debug,
          flexGrow: 1,
          fontFamily: Theme.fontFamilies.serif,
          display: "block"
        }}
      >
        <RadioGroup
          aria-label="service_type"
          name="service_type"
          value={state.type.toString()}
          onChange={(e, v) =>
            dispatch({ type: "set_type", payload: parseInt(v) })
          }
        >
          <FormControlLabel
            value="0"
            control={<Radio />}
            label="Pagar Tarjeta"
          />
          <FormControlLabel
            value="1"
            control={<Radio />}
            label="Dispensar Efectivo"
          />
          <FormControlLabel
            value="2"
            control={<Radio />}
            label="Hacer Transferencia"
          />
          <FormControlLabel
            value="3"
            control={<Radio />}
            label="Diferir Compra"
          />
        </RadioGroup>
      </FormControl>
    </Grid>
    <Grid item sm={8}>
      <div>
        <Typography variant="h5" style={{ flexGrow: 1 }}>
          {NumberFm(state.money)}
        </Typography>
        <div style={{ flexGrow: 4 }}>
          <Slider
            onChange={(e, payload) => {
              dispatch({ type: "set_money", payload: payload as number });
            }}
            value={state.money}
            min={MIN_MONEY}
            max={MAX_MONEY}
          />
        </div>
      </div>
      <div>
        <Typography variant="h5">{state.months} Meses</Typography>
        <Slider
          onChange={(e, payload) => {
            dispatch({ type: "set_months", payload: payload as number });
          }}
          value={state.months}
          marks={AVAILABLE_MONTHS.map(e => ({ value: e }))}
          step={null}
          min={AVAILABLE_MONTHS[0]}
          max={AVAILABLE_MONTHS[AVAILABLE_MONTHS.length - 1]}
        />
      </div>
    </Grid>
  </Fragment>
);

const RowThree: React.FC<SimulatorRow> = ({ state, dispatch }) => (
  <Fragment>
    <Grid
      item
      xs={12}
      style={{
        ...Styles.Debug,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between"
      }}
    >
      <Typography variant="h6">
        {(state.money / state.months).toFixed(2)} por Mes
      </Typography>
      <ArrowForwardIcon fontSize="large" />
    </Grid>
  </Fragment>
);

const Simulator: React.FC = () => {
  const [state, dispatch] = useReducer(SimulatorReducer, SimulatorInitialState);

  return (
    <Paper style={Styles.Simulator as React.CSSProperties}>
      <Grid container spacing={10} style={Styles.Debug as React.CSSProperties}>
        <RowOne {...{ state, dispatch }} />
        <RowTwo {...{ state, dispatch }} />
        <RowThree {...{ state, dispatch }} />
      </Grid>
    </Paper>
  );
};

export default Simulator;
