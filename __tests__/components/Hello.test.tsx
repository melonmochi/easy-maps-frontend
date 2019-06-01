import * as React from 'react';
import { shallow } from 'enzyme';
import { Hello } from 'components';

const props = {
  compiler: 'Typescript',
  framework: 'React',
}

test('Hello matches the snapshot', () => {
  const hello = shallow(<Hello {...props} />);
  // Snapshot demo
  expect(hello).toMatchSnapshot();
});
