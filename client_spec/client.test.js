import Enzyme, {shallow, mount, render} from 'enzyme';
import 'regenerator-runtime/runtime';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import App from '../client/src/App.jsx';
import Listing from '../client/src/components/Listing.jsx';
import {Main, ListDiv, Overlay, ModalDiv} from '../client/src/styles/styled_components.js';
import axios from 'axios';
import {act} from 'react-dom/test-utils';
import {listings, user} from './mock_data';
import Favorites from '../client/src/components/Favorites.jsx';
import FavList from '../client/src/components/FavList.jsx';


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
      await axios.get.mockImplementationOnce(() => Promise.resolve(listings));
      await axios.get.mockImplementationOnce(() => Promise.resolve(user))
      app = mount(<App />);

    })
    app.update();
    await expect(app.find(Listing)).toHaveLength(12);
  });


});

describe('Favorites pop-up modal', () => {
  let app;
  const modalroot = global.document.createElement('div');
  modalroot.setAttribute('id', 'portal')
  const body = global.document.querySelector('body');
  body.appendChild(modalroot);

  it('should not show the modal upon render', async () => {
    await act(async () => {
      await axios.get.mockImplementationOnce(() => Promise.resolve(listings));
      await axios.get.mockImplementationOnce(() => Promise.resolve(user))
      app = mount(<App />);
    })
    expect(app.find(Favorites).props().showing).toBe(false);
    })

    it('should render an overlay if showing is true', () => {
      var favorites = shallow(<Favorites favorites={[]} showing={true} />)
      expect(favorites.find(Overlay)).toHaveLength(1);
    })

    it('should render the modal if showing is true', () => {
      var favorites = shallow(<Favorites favorites={[]} showing={true} />)
      expect(favorites.find(ModalDiv)).toHaveLength(1);
    })
});

describe('Favorites list in modal', () => {
  let favList;

  it('should contain a div that displays lists', () => {
    favList = shallow(<FavList />)
    expect(favList.find(ListDiv)).toHaveLength(1);
  })
})