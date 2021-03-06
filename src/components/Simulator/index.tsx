import React, { useReducer, Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import {
  Paper,
  Box,
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
import { ReactComponent as QuestionMarkLogo } from "../../images/question_mark_sm.svg";
import FileUpload from "../FileUpload";

interface SimulatorRow {
  state: SimulatorState;
  dispatch: any;
}

const TypeRadios: React.FC<SimulatorRow> = ({ state, dispatch }) => (
  <FormControl
    className={
      (state.stage == 1 ? "enter__right" : "exit__left") + " flex__centered"
    }
    style={{
      flexGrow: 1,
      fontFamily: "'Playfair Display', serif",
      display: "block",
      animationDuration: "1s"
    }}
  >
    <RadioGroup
      aria-label="service_type"
      name="service_type"
      color="primary"
      value={state.type.toString()}
      onChange={(e, v) => dispatch({ type: "set_type", payload: parseInt(v) })}
    >
      <FormControlLabel
        value="0"
        control={<Radio color="primary" />}
        label="Pagar Tarjeta"
      />
      <FormControlLabel
        value="1"
        control={<Radio color="primary" />}
        label="Dispensar Efectivo"
      />
      <FormControlLabel
        value="2"
        control={<Radio color="primary" />}
        label="Hacer Transferencia"
      />
      <FormControlLabel
        value="3"
        control={<Radio color="primary" />}
        label="Diferir Compra"
      />
    </RadioGroup>
  </FormControl>
);

const RowOne: React.FC<SimulatorRow> = ({ state, dispatch }) => (
  <Fragment>
    <Grid item sm={7} className="gradient__right">
      <Typography
        className={state.stage == 1 ? "enter__right" : "exit__left"}
        variant="h1"
        style={{
          gridColumn: "1",
          fontFamily: "Playfair Display",
          textAlign: "left"
        }}
      >
        Quiero {NumberFm(state.money)} <br /> a {state.months} meses.
      </Typography>
      <Typography
        className={state.stage == 1 ? "exit__left" : "enter__right"}
        style={{
          fontFamily: "Playfair Display",
          textAlign: "left",
          position: "absolute",
          top: "0",
          color: "white"
        }}
        variant="h1"
      >
        Registro de <br /> documentos
      </Typography>
      <div
        className={(state.stage == 1 ? "inactive" : "") + " expanding-line"}
      ></div>
    </Grid>
    <Grid item sm={5} style={{ display: "flex", justifyContent: "flex-end" }}>
      <QuestionMarkLogo
        className={state.stage == 1 ? "fade__in" : "exit__right"}
      />
    </Grid>
  </Fragment>
);

const RowTwo: React.FC<SimulatorRow> = ({ state, dispatch }) => (
  <Fragment>
    <Grid item sm={3} className="gradient__right">
      <TypeRadios {...{ state, dispatch }} />
    </Grid>
    <Grid item sm={8} className="gradient__right">
      <div
        className={state.stage == 1 ? "enter__right" : "exit__left"}
        style={{
          animationDuration: "1s"
        }}
      >
        <div>
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            {NumberFm(state.money)}
          </Typography>
          <div style={{ flexGrow: 4 }}>
            <Slider
              color="primary"
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
      </div>
      <div className="flex__centered">
        <Grid
          container
          className={state.stage == 1 ? "exit__left" : "enter__right"}
        >
          <Grid item sm={6}>
            <FileUpload
              onChange={e => {
                if (e.target.files.length > 0)
                  dispatch({ type: "set_ife", payload: e.target.files[0] });
              }}
              value={state.ife}
              label={"IFE"}
            />
            <FileUpload
              onChange={e => {
                if (e.target.files.length > 0)
                  dispatch({ type: "set_ine", payload: e.target.files[0] });
              }}
              value={state.ine}
              label={"INE"}
            />
          </Grid>
        </Grid>
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
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between"
      }}
    >
      <Typography
        variant="h6"
        className={state.stage == 1 ? "fade__in" : "exit__right"}
      >
        {(state.money / state.months).toFixed(2)} por Mes
      </Typography>
      <ArrowForwardIcon
        fontSize="large"
        className={state.stage == 1 ? "fade__in" : "exit__right"}
        style={{ cursor: "pointer", animationFillMode: "none" }}
        onClick={() => dispatch({ type: "toggle_stage" })}
      />
    </Grid>
  </Fragment>
);

const Simulator: React.FC = () => {
  const [state, dispatch] = useReducer(SimulatorReducer, SimulatorInitialState);
  return (
    <Box
      className={(state.stage == 1 ? "" : "simulator--alt") + " simulator"}
      boxShadow={3}
    >
      <Grid container spacing={10}>
        <RowOne {...{ state, dispatch }} />
        <RowTwo {...{ state, dispatch }} />
        <RowThree {...{ state, dispatch }} />
      </Grid>
    </Box>
  );
};

export default Simulator;
