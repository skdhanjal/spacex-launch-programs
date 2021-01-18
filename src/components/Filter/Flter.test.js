import { render, fireEvent } from '@testing-library/react';
import Filter from './index';

test('renders filter type with  props', () => {
  const { container, getByText } = render(<Filter type="year" value="2010"></Filter>);
  expect(container.firstChild).toHaveClass('launch-filter');
  expect(getByText(/2010/i)).toBeInTheDocument();
});

test('fire on click event', async () => {
  const onClickSpy = jest.fn();
  const { container, getByText } = render(<Filter type="year" value="2010" onChange={onClickSpy}></Filter>);
  const button = getByText('2010');
  await fireEvent.click(button);
  expect(onClickSpy).toHaveBeenCalled();
});

