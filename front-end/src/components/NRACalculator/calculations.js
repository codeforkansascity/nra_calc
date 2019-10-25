import PropertyTypes from './PropertyTypes';

// State-wide constant value
const assessmentPercentage = 0.115;

export const calculateTaxes = (amount, millRate) => {
    return ((amount / 1000) * millRate) - 44;
}

export const getEligibility = (startingValue, valueAfterInvestment, investmentType, propertyType, zone) => {

    let propertyEligible = true;
    let investmentEligible = true;
    const errors = [];
    let errorID = 0;

    const zonePropertyTypes = zoneData.get(zone).propertyTypes;
    const assessedValue = startingValue * assessmentPercentage;

    if (!zonePropertyTypes) {
        propertyEligible = false;
        investmentEligible = false;
        errors.push({
            message: `${zone} not yet implemented.`
        });
        return {
            isEligible: propertyEligible && investmentEligible,
            propertyEligible,
            investmentEligible,
            errors
        }
    }

    // eslint-disable-next-line no-prototype-builtins
    if (!zonePropertyTypes || !zonePropertyTypes.hasOwnProperty(propertyType)) {
        propertyEligible = false;
        errors.push({
            id: errorID += 1,
            category: 'propertyType',
            message: `This property type doesn't fall under the guidelines for ${zone}.`
        });
    } else if (!zonePropertyTypes[propertyType][investmentType]) {
        propertyEligible = false;
        errors.push({
            id: errorID += 1,
            category: 'investmentType',
            message: `The provided investment type doesn't fit the guidelines for this property type in ${zone}.`
        });
    }

    if (zonePropertyTypes && zonePropertyTypes[propertyType] && propertyEligible) {
        const rawMinInvestment = zonePropertyTypes[propertyType]['minInvestment'];
        const minInvestment = rawMinInvestment <= 1 ? rawMinInvestment * assessedValue : rawMinInvestment;
        const totalInvestment = valueAfterInvestment - startingValue;
        investmentEligible = totalInvestment >= minInvestment;
        if (!investmentEligible) errors.push({
            id: errorID += 1,
            category: 'minimumInvestment',
            message: `Investment of $${totalInvestment} doesn't meet the minimum of $${minInvestment} for this property's type, value, and zone.`
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

export const getNRAEstimates = (startingValue, valueAfterInvestment, investmentType, propertyType, zone) => {

    const eligibility = getEligibility(startingValue, valueAfterInvestment, investmentType, propertyType, zone);
    const { isEligible } = eligibility;

    const { millRateHigh, millRateLow, millRateAvg, incentiveYears } = zoneData.get(zone);

    // Calculate based on high, low, and average mill rate within given zone
    // Eventually we hope to create a more granular estimate based on address,
    // but as a first pass, this removes a lot of complexity
    const estHigh = calculateRebate(startingValue, valueAfterInvestment, millRateHigh, incentiveYears, propertyType);
    const estLow = calculateRebate(startingValue, valueAfterInvestment, millRateLow, incentiveYears, propertyType);
    const estAverage = calculateRebate(startingValue, valueAfterInvestment, millRateAvg, incentiveYears, propertyType);

    return {
        estHigh: isEligible ? estHigh : undefined,
        estLow: isEligible ? estLow : undefined,
        estAverage: isEligible ? estAverage : undefined,
        eligibility
    };

}

// Calculate NRA tax incentive
export const calculateRebate = (startingValue, valueAfterInvestment, millRate, incentiveYears, propertyType) => {

    // Calculate current taxes
    const currentAssessedValue = startingValue * assessmentPercentage;
    const currentTaxes = calculateTaxes(currentAssessedValue, millRate);

    // Calculate new taxes
    const taxedInvestment = (valueAfterInvestment - startingValue) * (propertyType === PropertyTypes.historic ? 0 : 0.05);
    const newTaxableAmount = startingValue + taxedInvestment;
    const newTaxableAmountAssessed = newTaxableAmount * assessmentPercentage;
    const newTaxes = calculateTaxes(newTaxableAmountAssessed, millRate);

    // Calculate incremental tax values
    const incrementalAppraisedValue = valueAfterInvestment - taxedInvestment;
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
            [PropertyTypes.singleFamilyDetached]: {
                new: true,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.duplexSingleFamilyAttached]: {
                new: true,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.townhomeSingleFamilyAttached]: {
                new: true,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.singleDuplex]: {
                new: true,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.multiFamily]: {
                new: false,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.historic]: {
                new: false,
                rehab: true,
                minInvestment: 0.05,
                rebate: 1.00
            }
        }
    }],
    ['Area 2 East', {
        millRateLow: 151.970885,
        millRateHigh: 187.634256,
        millRateAvg: 168.6046749,
        incentiveYears: 5,
        propertyTypes: {
            [PropertyTypes.singleFamilyDetached]: {
                new: true,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.duplexSingleFamilyAttached]: {
                new: true,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.townhomeSingleFamilyAttached]: {
                new: true,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.singleDuplex]: {
                new: true,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.multiFamily]: {
                new: false,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.historic]: {
                new: false,
                rehab: true,
                minInvestment: 0.10,
                rebate: 1.00
            }
        }
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
        incentiveYears: 5,
        propertyTypes: {
            [PropertyTypes.singleFamilyDetached]: {
                new: true,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.duplexSingleFamilyAttached]: {
                new: true,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.townhomeSingleFamilyAttached]: {
                new: true,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.singleDuplex]: {
                new: true,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.multiFamily]: {
                new: false,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.historic]: {
                new: false,
                rehab: true,
                minInvestment: 0.10,
                rebate: 1.00
            }
        }
    }],
    ['Area 3', {
        millRateLow: 172.760032,
        millRateHigh: 180.7673,
        millRateAvg: 172.8878387,
        incentiveYears: 5,
        propertyTypes: {
            [PropertyTypes.singleFamilyDetached]: {
                new: true,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.duplexSingleFamilyAttached]: {
                new: true,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.townhomeSingleFamilyAttached]: {
                new: true,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.singleDuplex]: {
                new: true,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.multiFamily]: {
                new: false,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.historic]: {
                new: false,
                rehab: true,
                minInvestment: 0.15,
                rebate: 1.00
            }
        }
    }],
    ['Area 4', {
        millRateLow: 166.699688,
        millRateHigh: 176.931593,
        millRateAvg: 174.3241988,
        incentiveYears: 5,
        propertyTypes: {
            [PropertyTypes.singleFamilyDetached]: {
                new: false,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.duplexSingleFamilyAttached]: {
                new: false,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.townhomeSingleFamilyAttached]: {
                new: false,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            },
            [PropertyTypes.singleDuplex]: {
                new: false,
                rehab: true,
                minInvestment: 0.15,
                rebate: 0.95
            }
        }
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
