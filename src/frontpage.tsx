import React, { useState, useReducer } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

interface SimulatorState {
  money: number;
  months: number;
}

interface SimulatorReducerAction {
  type: string;
  payload: number;
}

const AVAILABLE_MONTHS = [3, 6, 9, 12, 18];
const MAX_MONEY = 50000;
const MIN_MONEY = 5000;

const SimulatorReducer = (
  state: SimulatorState,
  action: SimulatorReducerAction
) => {
  switch (action.type) {
    case "set_money":
      if (action.payload <= MIN_MONEY && action.payload >= MAX_MONEY)
        return state;
      return { ...state, money: action.payload };
    case "set_months":
      return { ...state, months: action.payload };
    default:
      throw new Error();
  }
};

const SimulatorInitialState: SimulatorState = {
  money: MIN_MONEY,
  months: AVAILABLE_MONTHS[0]
};

const SimulatorBody = styled.div`
  background: white
  padding: 1rem
  display: flex
  flex-direction: column
  width: 90%
  height: 80%
  position: absolute
  top: 20%
  left: 10%
`;

const Simulator: React.FC = () => {
  const [state, dispatch] = useReducer(SimulatorReducer, SimulatorInitialState);

  return (
    <SimulatorBody>
      <div>
        <Typography variant="h1" style={{ flexGrow: 1 }}>
          {Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
            state.money
          )}
        </Typography>
        <div style={{ flexGrow: 1 }}>
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
        <Typography variant="h1" style={{ flexGrow: 1 }}>
          {state.months} Meses
        </Typography>
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
    </SimulatorBody>
  );
};

const SectionOne = styled.div`
  background: #ac9184
  height: 100vh
`;

const FrontPage: React.SFC = () => {
  return (
    <SectionOne>
      <Simulator />
    </SectionOne>
  );
};

export default FrontPage;
