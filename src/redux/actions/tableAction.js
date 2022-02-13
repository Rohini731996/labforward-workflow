import { SET_MATERIAL_DATA, SET_WATER_WEIGHT, SET_CALCULATION_DATA } from './actionTypes';

const setMaterialUsedDataAction = (item) => (
    {
        type: SET_MATERIAL_DATA,
        materialPayload: item

    });

export const setWaterWeightDetailsAction = (item) => (
    {
        type: SET_WATER_WEIGHT,
        weightPayload: item

    });

export const setCalculationDetailsAction = (item) => (
    {
        type: SET_CALCULATION_DATA,
        calculationPayload: item

    });


const appendMaterialData = (obj) => {
    return (dispatch) => {
        dispatch(setMaterialUsedDataAction(obj));
    }
}
const appendCalibrationData = (obj) => {
    return (dispatch) => {
        dispatch(setWaterWeightDetailsAction(obj));
    }
}

const appendCalculationData = (obj) => {
    return (dispatch) => {
        dispatch(setCalculationDetailsAction(obj));
    }
}


export {
    appendMaterialData,
    appendCalibrationData,
    appendCalculationData
}

