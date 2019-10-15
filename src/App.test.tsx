import React from 'react';
import App from './App';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
  // const edit = <p>Edit <code>src/App.tsx</code> and save to reload.</p>;
  // expect(wrapper.contains(edit)).toEqual(true);
});
