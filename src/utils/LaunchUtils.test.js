import { getAllYears, getUrlWithParams } from './LaunchUtils';

test('Launch utils should return all years', () => {
  const allYears = getAllYears(2006);

  expect(allYears.length).toBe(15);
  expect(allYears[0].isActive).toBe(true);
});

test('Launch utils should url parmas for all given filters', () => {
  const url = getUrlWithParams({
    year: '2010',
    isLandingSuccess: true,
    isLaunchSuccess: true
  });
 expect(url).toEqual('launch_year=2010&amp;land_success=true&amp;launch_success=true');
});
