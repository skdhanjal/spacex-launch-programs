import { render } from '@testing-library/react';
import Card from './index';

test('renders button with  props', () => {
  const launch = {
    mission_name: 'test_name',
    flight_number: 'test_flight_number',
    mission_id: [],
    links: {

    }
  }
  const { container } = render(<Card launch={launch}/>);
  expect(container.firstChild).toHaveClass('launch-card');
});

