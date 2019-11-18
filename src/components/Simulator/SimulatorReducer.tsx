export interface SimulatorState {
  money: number;
  months: number;
  type: number;
  stage: number;
}

export interface SimulatorReducerAction {
  type: string;
  payload: number;
}

export const AVAILABLE_MONTHS = [3, 6, 9, 12, 18];
export const MAX_MONEY = 50000;
export const MIN_MONEY = 5000;

export const SimulatorReducer = (
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
    case "set_type":
      return { ...state, type: action.payload };
    case "toggle_stage":
      return { ...state, stage: 1 ? 2 : 1 };
    default:
      throw new Error();
  }
};

export const SimulatorInitialState: SimulatorState = {
  money: MIN_MONEY,
  months: AVAILABLE_MONTHS[0],
  type: 0,
  stage: 1
};
