import { createAction, props } from "@ngrx/store";

export enum ListCountryActionType {
// eslint-disable-next-line @typescript-eslint/naming-convention
GET_COUNTRY = '[Home] Get country',
// eslint-disable-next-line @typescript-eslint/naming-convention
GET_COUNTRY_SUCCESS = '[Home] Get country success',
// eslint-disable-next-line @typescript-eslint/naming-convention
GET_COUNTRY_FAILED = '[Home] Get country failed',
}

export const getCountry = createAction(
    ListCountryActionType.GET_COUNTRY,
    props<{keyword: string}>()
);

export const getCountrySuccess = createAction(
    ListCountryActionType.GET_COUNTRY_SUCCESS,
    props<{country: any}>()
);

export const getCountryFailed = createAction(
    ListCountryActionType.GET_COUNTRY_FAILED
);

export const homeAction = {
    getCountry,
    getCountrySuccess,
    getCountryFailed
};

