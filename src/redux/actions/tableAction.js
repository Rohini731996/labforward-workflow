import { SET_MATERIAL_DATA, SET_WATER_WEIGHT,SET_CALCULATION_DATA } from './actionTypes';

export const setMaterialUsedDataAction = (item) => (
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
    

