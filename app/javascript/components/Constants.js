export const MAX_TIMELINE = 480;
export const INITIAL_TIMELINE = 480;

//input Tag ID's

export const RATE_OF_RETURN_ID = (configurationId) => {return `currentRateOfReturn${configurationId}`};
export const SPENDING_ID = (configurationId) => {return `currentSpending${configurationId}`};
export const CASH_ASSETS_ID = (configurationId) => {return `currentCashAssets${configurationId}`};

export const NAME_TEXT_ID = (optionId) => {return `nameTextId${optionId}`};
export const INITIAL_GAIN_TEXT_ID = (optionId) => {return `initialGain${optionId}`};
export const MONTHLY_GAIN_TEXT_ID = (optionId) => {return `monthyGain${optionId}`};
export const START_DATE_TEXT_ID = (optionId) => {return `startDate${optionId}`};
export const DURATION_TEXT_ID = (optionId) => {return `duration${optionId}`};

export const GRAPH_HEIGHT = 300;
const GRAPH_WIDTH_PERCENT = 80;
export const GRAPH_WIDTH = `${(GRAPH_WIDTH_PERCENT)}%`;
export const CONFIG_LIST_WIDTH = `${(100-GRAPH_WIDTH_PERCENT)}%`;
console.log(CONFIG_LIST_WIDTH);
export const CONFIGURATION_LIST_ENTRY_WIDTH = "200px";
