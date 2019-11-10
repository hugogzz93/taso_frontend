import React, { useState, useReducer } from 'react';
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import BaseSlider from './components/Slider/BaseSlider'

interface SimulatorState {
  money: number;
  month_index: number;
}

interface SimulatorReducerAction {
  type: string;
  payload: number;
}

const AVAILABLE_MONTHS = [3, 6, 9, 12, 18]
const MAX_MONEY = 50000
const MIN_MONEY = 5000

const SimulatorReducer = (state: SimulatorState, action: SimulatorReducerAction) => {
  switch(action.type) {
    case 'increment_month':
      if(state.month_index == AVAILABLE_MONTHS.length - 1) return state
      return {...state, month_index: state.month_index + 1 }
    case 'decrement_month':
      if(state.month_index <= 0) return state
      return {...state, month_index: state.month_index - 1 }
    case 'set_money':
      if(action.payload <= MIN_MONEY && action.payload >= MAX_MONEY) return state
      return {...state, money: action.payload}
    default:
      throw new Error();
  }
}

const SimulatorInitialState: SimulatorState = {
  money: MIN_MONEY,
  month_index: 0
}

const Simulator: React.FC = () => {
  const state = useReducer(SimulatorReducer, SimulatorInitialState)
  const SimulatorBody = styled.div`
    background: white
    padding: 1rem
    display: flex
    width: 90%
    height: 80%
    position: absolute
    top: 20%
    left: 10%
  `

  return (
    <SimulatorBody>
      <Typography variant='h1'>Hello World!</Typography>
      <BaseSlider onChange={() => {}} value={1}/>
    </SimulatorBody>
  )
}

const FrontPage: React.SFC = () => {
  const SectionOne = styled.div`
    background: #ac9184
    height: 100vh
  `

  return (
    <SectionOne>
      <Simulator/>
    </SectionOne>
  )
}

export default FrontPage

