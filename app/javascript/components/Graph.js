import React from 'react'
import {XYPlot, LineSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis} from 'react-vis';
import {useSelector, useDispatch, Field} from 'react-redux'
import choicesReducer from './reducers/choicesReducer';
import optionsReducer from './reducers/optionsReducer';

const data = [



];
const stateToLine = () =>
{
    const optionsData = useSelector(state => state.optionsReducer.optionsList);
    const activeOptions = optionsData.filter(option => option.activeOption === true);
    const timeLine = useSelector(state => state.configurationReducer.timeLine);//duration of the plot in months
    const dataForLine = Array(timeLine);
    const initialChanges = Array(timeLine).fill(0);
    const monthlyChanges = Array(timeLine).fill(0);
    const currentCashAssets = useSelector(state => state.configurationReducer.cashAssets);
    const rateOfReturn = useSelector(state => state.configurationReducer.rateOfReturn);

    activeOptions.forEach(option =>
    {
        const currentOptionStartDate = option.startDate;
        const currentOptionDuration = option.duration;
        const currentOptionInitialGain = option.initialGain;
        const currentOptionMontlyGain = option.monthlyGain;

        initialChanges[currentOptionStartDate] = currentOptionInitialGain;
        monthlyChanges[currentOptionStartDate] = currentOptionMontlyGain;
        if(currentOptionStartDate+currentOptionDuration<timeLine)
        {
            monthlyChanges[currentOptionStartDate] = -1*currentOptionMontlyGain;
        }
    })

    
    for(var i = 1; i<timeLine; i++)
    {
        monthlyChanges[i] = monthlyChanges[i-1] + monthlyChanges[i];
    }

    for(var i = 1; i<timeLine; i++)
    {
        monthlyChanges[i] = monthlyChanges[i-1] + monthlyChanges[i];
    }

    

}
const Graph = () =>
{
    

    return (
        <XYPlot
        xType="time"
        width={1000}
        height={300}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="X Axis" />
        <YAxis title="Y Axis" />
        <LineSeries
          data={data}
        />
    </XYPlot>
        )
};
export default Graph;