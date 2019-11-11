export interface InputParams {
  onChange: (state: any) => void;
  value: any;
}

export interface SliderParams {
  value: number;
  onChange: (e: any, v: any) => void;
  min: number;
  max: number;
}
