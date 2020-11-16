import React from 'react'
import {FlexibleWidthXYPlot , LineMarkSeries, VerticalGridLines, HorizontalGridLines, XAxis, YAxis, DiscreteColorLegend, Hint} from 'react-vis';
import {useSelector, useDispatch} from 'react-redux'
import choicesReducer from './reducers/choicesReducer';
import optionsReducer from './reducers/optionsReducer';
import {EDIT_HOVER_TOOLTIP_VALUE} from './ActionCreators'
import {GRAPH_HEIGHT, GRAPH_WIDTH} from './Constants'

const Graph = () =>
{
    const dispatch = useDispatch();
    const currentConfiguration = useSelector(state => state.activeConfigurationReducer);
    const configurations = useSelector(state => state.configurationsReducer).data;
    const configurationsList = Object.values(configurations);
    const hintValue =  useSelector(state => state.graphDataReducer).hoverTooltipValue;
    console.log(hintValue);
    const GraphLines = configurationsList.map(configuration =>
        {
            return <LineMarkSeries 
                key = {configuration.configurationId}
                data={configuration.lineData.graphData}
                size = "0.5"
                onValueMouseOver = {(datapoint, event)=>{
                    dispatch(EDIT_HOVER_TOOLTIP_VALUE(datapoint))                        
                }}
                onValueMouseOut = {(datapoint, event) => {
                    dispatch(EDIT_HOVER_TOOLTIP_VALUE("HINT_OFF"))
                }}
            />

        })
    const legendEntries = Array();
    for(var i=0; i<configurationsList.length; i++ )
    {
        legendEntries.push(configurationsList[i].name)
    }
    return (
        <td>
            <FlexibleWidthXYPlot 
                margin = {{left: 50}}
                height={GRAPH_HEIGHT}>
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis title="Months" />
                <YAxis title="Total Net Worth (USD)" />
                {hintValue !== "HINT_OFF" && 
                    <Hint value={hintValue}
                        style={{
                            text: {
                                display: 'none'
                              },
                            align: {
                                vertical: 'top',
                                horizantal: 'left'
                            }
                        }}
                    />
                }
                {GraphLines}
            </FlexibleWidthXYPlot >
            <DiscreteColorLegend 
                items = {legendEntries}
                orientation = 'horizontal'
                width={750}
            />
        </td>)
};
export default Graph;