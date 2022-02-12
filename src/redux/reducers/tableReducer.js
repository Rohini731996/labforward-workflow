import { SET_CALCULATION_DATA, SET_MATERIAL_DATA, SET_USER, SET_USER_LOCATION, SET_WATER_WEIGHT } from '../actions/actionTypes';

const initialState = {
    materialUsed: null,
    weight: null,
    calculation: null,
};

export default function (state = initialState, action) {
    const { type, materialPayload, calculationPayload, weightPayload } = action;

    switch (type) {
        case SET_MATERIAL_DATA:
            return {
                ...state,
                materialUsed: materialPayload,
            };

        case SET_WATER_WEIGHT:
            return {
                ...state,
                weight: weightPayload,
            }
        case SET_CALCULATION_DATA:
            return {
                ...state,
                calculation: calculationPayload,
            }


        default:
            return state;
    }
}