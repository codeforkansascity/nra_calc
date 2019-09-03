// State-wide constant value
const assessmentPercentage = 0.115;

export const calculateTaxes = (amount, millRate) => {
    return ((amount / 1000) * millRate) - 44;
}

export const getNRAEstimates = (startingValue, estValueAfterImprovements, zone) => {

    const { millRateHigh, millRateLow, millRateAvg, incentiveYears } = getZoneData(zone);

    // Calculate based on high, low, and average mill rate within given zone
    // Eventually we hope to create a more granular estimate based on address,
    // but as a first pass, this removes a lot of complexity
    const estHigh = calculateRebate(startingValue, estValueAfterImprovements, millRateHigh, incentiveYears);
    const estLow = calculateRebate(startingValue, estValueAfterImprovements, millRateLow, incentiveYears);
    const estAverage = calculateRebate(startingValue, estValueAfterImprovements, millRateAvg, incentiveYears);

    return {
        estHigh,
        estLow,
        estAverage,
    };

}

export const getZoneData = (zone) => {
    // TODO: Get real zone/mill rate data
    return {
        millRateHigh: 100,
        millRateLow: 80,
        millRateAvg: 90,
        incentiveYears: 10
    }
};

// Calculate NRA tax incentive
export const calculateRebate = (startingValue, estValueAfterImprovements, millRate, incentiveYears) => {

    // Calculate current taxes
    const currentAssessedValue = startingValue * assessmentPercentage;
    const currentTaxes = calculateTaxes(currentAssessedValue, millRate);

    // Calculate new taxes
    const fivePercentImprovements = (estValueAfterImprovements - startingValue) * 0.05;
    const newTaxableAmount = startingValue + fivePercentImprovements;
    const newTaxableAmountAssessed = newTaxableAmount * assessmentPercentage;
    const newTaxes = calculateTaxes(newTaxableAmountAssessed, millRate);

    // Calculate incremental tax values
    const incrementalAppraisedValue = estValueAfterImprovements - fivePercentImprovements;
    const incrementalAssessedValue = incrementalAppraisedValue * assessmentPercentage;
    const incrementalTaxSavings = (incrementalAssessedValue / 1000) * millRate;

    // Calculate payments/savings per year
    const payPerYear = newTaxes;
    const savePerYear = incrementalTaxSavings;

    // Total savings
    const savings = savePerYear * incentiveYears;
    
    // Several values that might be useful to display
    return {
        currentTaxes,
        newTaxes,
        incrementalTaxSavings,
        payPerYear,
        savePerYear,
        savings
    }

}
