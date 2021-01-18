import { render, fireEvent } from '@testing-library/react';
import Button from './index';

test('renders button without any props', () => {
  const { container } = render(<Button />);
  expect(container.firstChild.childNodes[0]).toHaveClass('spx-button');
});

test('renders button with  props', () => {
  const { container } = render(<Button active={true} text="test_btn"/>);
  expect(container.firstChild.childNodes[0]).toHaveClass('spx-button');
  expect(container.firstChild.childNodes[0]).toHaveClass('spx-button--active');
});

test('fire on click event', async () => {
  const onClickSpy = jest.fn();
  const { container, getByText } = render(<Button active={true} text="test_btn" onClick={onClickSpy}/>);
  const button = getByText('test_btn');

  await fireEvent.click(button);
  expect(onClickSpy).toHaveBeenCalled();
});

