import { render, fireEvent } from '@testing-library/react';
import LaunchFilters from './index';

test('renders filter type with  props', () => {
  const comp =  <LaunchFilters year ={2019} isLaunchSuccess={true} isLandSuccess={false}></LaunchFilters>
  const { container, getByText } = render(comp);

  expect(container.firstChild).toHaveClass('launch-filters');
  expect(getByText(/Launch year/i)).toBeInTheDocument();
  expect(getByText(/Successful Launch/i)).toBeInTheDocument();
  expect(getByText(/Successful Landing/i)).toBeInTheDocument();
});

test('should fire on filter change on filter click', async () => {
  const onFilterChangeSpy = jest.fn();
  const comp =  <LaunchFilters year ={2019} isLaunchSuccess={true} isLandSuccess={false} onChange={onFilterChangeSpy}></LaunchFilters>
  const { container, getByText } = render(comp);

  expect(container.firstChild).toHaveClass('launch-filters');
  const button = getByText('2007');
  await fireEvent.click(button);
  expect(onFilterChangeSpy).toHaveBeenCalled();
});

