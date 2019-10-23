import { getEligibility } from './calculations';

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

