// State-wide constant value
const assessmentPercentage = 0.115;

export const calculateTaxes = (amount, millRate) => {
    return ((amount / 1000) * millRate) - 44;
}

/************************ START NEW STUFF ************************/

export const getEligibility = (startingValue, valueAfterInvestment, investmentType, propertyType, zone) => {

    let propertyEligible = true;
    let investmentEligible = true;
    const errors = [];

    const zonePropertyTypes = zoneData.get(zone).propertyTypes;
    const assessedValue = startingValue * assessmentPercentage;

    // eslint-disable-next-line no-prototype-builtins
    if (!zonePropertyTypes.hasOwnProperty(propertyType)) {
        propertyEligible = false;
        errors.push({
            category: 'propertyType',
            message: `This property type doesn't fall under the guidelines for zone ${zone}`
        });
    } else if (!zonePropertyTypes[propertyType][investmentType]) {
        propertyEligible = false;
        errors.push({
            category: 'investmentType',
            message: `This investment type doesn't fall under the guidelines for zone ${zone}`
        });
    }

    if (zonePropertyTypes[propertyType]) {
        const rawMinInvestment = zonePropertyTypes[propertyType]['minInvestment'];
        const minInvestment = rawMinInvestment <= 1 ? rawMinInvestment * assessedValue : rawMinInvestment;
        investmentEligible = (valueAfterInvestment - startingValue) >= minInvestment;
        if (!investmentEligible) errors.push({
            category: 'propertyType',
            message: `Investment doesn't meet the minimum of ${minInvestment} for this property type and zone.`
        });
    } else {
        investmentEligible = false;
    }

    return {
        isEligible: propertyEligible && investmentEligible,
        propertyEligible,
        investmentEligible,
        errors
    }
}

/************************ END NEW STUFF ************************/


export const getNRAEstimates = (startingValue, estValueAfterInvestment, zone) => {

    const { millRateHigh, millRateLow, millRateAvg, incentiveYears } = zoneData.get(zone);

    // Calculate based on high, low, and average mill rate within given zone
    // Eventually we hope to create a more granular estimate based on address,
    // but as a first pass, this removes a lot of complexity
    const estHigh = calculateRebate(startingValue, estValueAfterInvestment, millRateHigh, incentiveYears);
    const estLow = calculateRebate(startingValue, estValueAfterInvestment, millRateLow, incentiveYears);
    const estAverage = calculateRebate(startingValue, estValueAfterInvestment, millRateAvg, incentiveYears);

    return {
        estHigh,
        estLow,
        estAverage,
    };

}

// Calculate NRA tax incentive
export const calculateRebate = (startingValue, estValueAfterInvestment, millRate, incentiveYears) => {

    // Calculate current taxes
    const currentAssessedValue = startingValue * assessmentPercentage;
    const currentTaxes = calculateTaxes(currentAssessedValue, millRate);

    // Calculate new taxes
    const fivePercentInvestment = (estValueAfterInvestment - startingValue) * 0.05;
    const newTaxableAmount = startingValue + fivePercentInvestment;
    const newTaxableAmountAssessed = newTaxableAmount * assessmentPercentage;
    const newTaxes = calculateTaxes(newTaxableAmountAssessed, millRate);

    // Calculate incremental tax values
    const incrementalAppraisedValue = estValueAfterInvestment - fivePercentInvestment;
    const incrementalAssessedValue = incrementalAppraisedValue * assessmentPercentage;
    const incrementalTaxSavings = (incrementalAssessedValue / 1000) * millRate;

    // Calculate payments/savings per year
    const payPerYear = newTaxes;
    const savePerYear = incrementalTaxSavings;

    // Total savings
    const savings = savePerYear * incentiveYears;
    
    // Several values that might be useful to display
    return {
        incentiveYears,
        currentTaxes,
        newTaxes,
        incrementalTaxSavings,
        payPerYear,
        savePerYear,
        savings
    }

}

const zoneData = new Map([
    ['Area 1', {
        millRateLow: 166.699688,
        millRateHigh: 184.882947,
        millRateAvg: 168.0502949,
        incentiveYears: 10,
        propertyTypes: {
            sfdetached: {
                new: true,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            }
        }
    }],
    ['Area 2 East', {
        millRateLow: 151.970885,
        millRateHigh: 187.634256,
        millRateAvg: 168.6046749,
        incentiveYears: 5
    }],
    ['Area 2 East - State Avenue Corridor', {
        millRateLow: 166.699688,
        millRateHigh: 172.831745,
        millRateAvg: 171.7744938,
        incentiveYears: 5 // Don't know for sure yet
    }],
    ['Area 2 West', {
        millRateLow: 166.699688,
        millRateHigh: 176.91593,
        millRateAvg: 166.7490233,
        incentiveYears: 5
    }],
    ['Area 3', {
        millRateLow: 172.760032,
        millRateHigh: 180.7673,
        millRateAvg: 172.8878387,
        incentiveYears: 5
    }],
    ['Area 4', {
        millRateLow: 166.699688,
        millRateHigh: 176.931593,
        millRateAvg: 174.3241988,
        incentiveYears: 5
    }],
    ['Bonner Springs Zone 3', {
        millRateLow: 166.87731,
        millRateHigh: 166.87731,
        millRateAvg: 166.87731,
        incentiveYears: 5 // Don't know for sure yet
    }],
    ['Bonner Springs Zone 4', {
        millRateLow: 166.87731,
        millRateHigh: 180.76073,
        millRateAvg: 166.8845297,
        incentiveYears: 5 // Don't know for sure yet
    }],
    ['Edwardsville', {
        millRateLow: 166.87731,
        millRateHigh: 180.76073,
        millRateAvg: 180.6365491,
        incentiveYears: 5 // Don't know for sure yet
    }]
]);
