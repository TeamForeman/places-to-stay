import Enzyme, {shallow, mount} from 'enzyme';
import 'regenerator-runtime/runtime';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import App from '../client/src/App.jsx';
import Listing from '../client/src/components/Listing.jsx';
import {Main} from '../client/src/styles/styled_components.js';
import axios from 'axios';
import {act} from 'react-dom/test-utils';
import results from './mock_data';

Enzyme.configure({adapter: new Adapter()});


jest.mock('axios');

describe('App component', () => {

  let app;


  it('should render app a stateless functional component', () => {
    app = shallow(<App />);
    const instance = app.instance();

    expect(instance).toEqual(null);
  });

  it('should render a main div', () => {
    app = shallow(<App />);
    expect(app.find(Main)).toHaveLength(1);
  });

  it('should render 12 listings', async () => {
    await act(async () => {
      await axios.get.mockImplementationOnce(() => Promise.resolve(results));
      await axios.get.mockImplementationOnce(() => Promise.resolve({data: {uId: 1, favorites: []}}))
      app = mount(<App />);

    })
    app.update();
    await expect(app.find(Listing)).toHaveLength(12);
  });
});