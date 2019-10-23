import { getEligibility, getNRAEstimates } from './calculations';

describe('getEligibility', () => {
  test('Returns accurate results for a qualifying property/investment', () => {
    const eligibilityResult = getEligibility(10000, 10172.5, 'new', 'sfdetached', 'Area 1');
    expect(eligibilityResult.propertyEligible).toBe(true);
    expect(eligibilityResult.investmentEligible).toBe(true);
    expect(eligibilityResult.isEligible).toBe(true);
    expect(eligibilityResult.errors.length).toBe(0);
  });

  test('Returns accurate results for a qualifying property and NON-qualifying investment', () => {
    const eligibilityResult = getEligibility(10000, 10100, 'new', 'sfdetached', 'Area 1');
    expect(eligibilityResult.propertyEligible).toBe(true);
    expect(eligibilityResult.investmentEligible).toBe(false);
    expect(eligibilityResult.isEligible).toBe(false);
    expect(eligibilityResult.errors.length).toBe(1);
  });

  test('Returns accurate results for a NON-qualifying property and investment', () => {
    const eligibilityResult = getEligibility(10000, 500000, 'new', 'blahzone', 'Area 1');
    expect(eligibilityResult.propertyEligible).toBe(false);
    expect(eligibilityResult.investmentEligible).toBe(false);
    expect(eligibilityResult.isEligible).toBe(false);
    expect(eligibilityResult.errors.length).toBe(1);
  });
});

describe('getNRAEstimates', () => {
  test('Returns null for estimates, along with eligibility information when not eligible', () => {
    const estimates = getNRAEstimates(10000, 10100, 'new', 'sfdetached', 'Area 1');
    expect(estimates.estLow).toBe(null);
    expect(estimates.estHigh).toBe(null);
    expect(estimates.estAverage).toBe(null);
    expect(estimates.eligibility.isEligible).toBe(false);
  });

  test('Returns estimates and eligibility information when eligible', () => {
    const estimates = getNRAEstimates(10000, 100000, 'new', 'sfdetached', 'Area 1');
    expect(estimates).toEqual({
      estHigh:{
        incentiveYears:10,
        currentTaxes:168.61538904999998,
        newTaxes:264.2923141225,
        incrementalTaxSavings:2030.4769654275,
        payPerYear:264.2923141225,
        savePerYear:2030.4769654275,
        savings:20304.769654275
      },
      estLow:{
        incentiveYears:10,
        currentTaxes:147.7046412,
        newTaxes:233.97172974,
        incrementalTaxSavings:1830.7793234600001,
        payPerYear:233.97172974,
        savePerYear:1830.7793234600001,
        savings:18307.7932346
      },
      estAverage:{
        incentiveYears:10,
        currentTaxes:149.257839135,
        newTaxes:236.22386674575,
        incrementalTaxSavings:1845.6123637392502,
        payPerYear:236.22386674575,
        savePerYear:1845.6123637392502,
        savings:18456.123637392502
      },
      eligibility:{
        isEligible:true,
        propertyEligible:true,
        investmentEligible:true,
        errors:[]
      }
    });
    expect(estimates.estLow).not.toBe(null);
    expect(estimates.estHigh).not.toBe(null);
    expect(estimates.estAverage).not.toBe(null);
    expect(estimates.eligibility.isEligible).toBe(true);
  });
});
