import { Action, createReducer, on } from '@ngrx/store';
import { homeAction } from './home.actions';

export interface State {
  result: any;
  isLoading: boolean;
}

const initialState: State = {
  result: '',
  isLoading: false,
};

const homeReducer = createReducer(
  initialState,
  on(homeAction.getCountry, (state) => ({ ...state, isLoading: true })),
  on(homeAction.getCountrySuccess, (state: State, action) => ({
    ...state,
    result: action.country,
  })),
  on(homeAction.getCountryFailed, (state: State) => ({ ...state, result: null }))
);

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function reducer(state: State | undefined, action: Action) {
  return homeReducer(state, action);
}

export const selectCountryResult = (state: State) => state.result;
