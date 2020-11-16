//Utility Function are for modifying input data only, they do not dispatch to the store or pull from the store
import {MAX_TIMELINE} from './Constants'

export const optionToData = (option) =>
{
    const currentOptionStartDate = parseInt(option.startDate);
    const currentOptionDuration = parseInt(option.duration);
    const currentOptionInitialGain = parseInt(option.initialGain);
    const currentOptionMontlyGain = parseInt(option.monthlyGain);

    var initialChanges = Array(MAX_TIMELINE).fill(0);
    var monthlyChanges = Array(MAX_TIMELINE).fill(0);

    initialChanges[currentOptionStartDate] = currentOptionInitialGain;
    monthlyChanges[currentOptionStartDate] = currentOptionMontlyGain;
    if(currentOptionStartDate+currentOptionDuration<MAX_TIMELINE)
    {
        monthlyChanges[currentOptionStartDate] = -1*currentOptionMontlyGain;
    }

    for(var i = 1; i<MAX_TIMELINE; i++)
    {
        monthlyChanges[i] = monthlyChanges[i-1] + monthlyChanges[i];
    }

    return {
        monthlyChanges: monthlyChanges,
        initialChanges: initialChanges
    }

}

export const generateGraphData = (lineData, currentConfiguration) =>
{
    const currentCashAssets = parseFloat(currentConfiguration.cashAssets);
    const rateOfReturn = parseFloat(currentConfiguration.rateOfReturn);
    const spending = parseFloat(currentConfiguration.spending);
    const dataForLine = Array(MAX_TIMELINE).fill({x:0, y:0});
    var newCashAssets = currentCashAssets;

    for(var i=0; i<MAX_TIMELINE; i++)
    {
        newCashAssets  = newCashAssets*(1+((rateOfReturn/100)/12))+lineData.monthlyChanges[i]+lineData.initialChanges[i]-spending;
        dataForLine[i] = 
        {
            x:i,
            y: newCashAssets
        }
    }
    const outLineData =
    {
        initialChanges: lineData.initialChanges,
        monthlyChanges: lineData.monthlyChanges,
        graphData: dataForLine
    }
    return outLineData;
}

export const removeOptionFromLineData = (option, currentLineData, currentConfiguration) =>
{
    const optionLineData = optionToData(option);
    const newMonthlyChanges = Array(MAX_TIMELINE);
    const newInitialChanges = Array(MAX_TIMELINE);
    for(var i=0; i<MAX_TIMELINE; i++)
    {
        newMonthlyChanges[i] = currentLineData.monthlyChanges[i] - optionLineData.monthlyChanges[i];
        newInitialChanges[i] = currentLineData.initialChanges[i] - optionLineData.initialChanges[i];
    }
    const modifiedLineData = 
    {
        initialChanges: newInitialChanges,
        monthlyChanges: newMonthlyChanges
    }
    const outLineData = generateGraphData(modifiedLineData, currentConfiguration);
    return outLineData;

}
export const addOptionToLineData = (option, currentLineData, currentConfiguration) =>
{
    const optionLineData = optionToData(option);
    const newMonthlyChanges = Array(MAX_TIMELINE);
    const newInitialChanges = Array(MAX_TIMELINE);
    for(var i=0; i<MAX_TIMELINE; i++)
    {
        newMonthlyChanges[i] = currentLineData.monthlyChanges[i] + optionLineData.monthlyChanges[i];
        newInitialChanges[i] = currentLineData.initialChanges[i] + optionLineData.initialChanges[i];
    }
    const modifiedLineData = 
    {
        initialChanges: newInitialChanges,
        monthlyChanges: newMonthlyChanges
    }
    const outLineData = generateGraphData(modifiedLineData, currentConfiguration);
    return outLineData;

}

