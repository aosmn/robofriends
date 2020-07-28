import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk';
import * as actions from './actions';
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

const mockStore = configureStore([thunk]);

it('should create an action to search robots', () => {
  const text = 'ooo';
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };

  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it('should handle robots api request', () => {
  const body = [{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
  },{
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
  }];
  fetchMock.getOnce('https://jsonplaceholder.typicode.com/users', {
    body,
    headers: { 'content-type': 'application/json' }
  })

  const store = mockStore();
  store.dispatch(actions.requestRobots()).then(() => {
    const action = store.getActions();
    const expectedActions = [
      { type: REQUEST_ROBOTS_PENDING },
      { type: REQUEST_ROBOTS_SUCCESS, payload: body }
    ]
    expect(action).toEqual(expectedActions);
  })
  fetchMock.restore()
});

it('should handle robots api request fail', () => {
  fetchMock.getOnce('https://jsonplaceholder.typicode.com/users', {
    throws: 'Some error',
    headers: { 'content-type': 'application/json' }
  })

  const store = mockStore();
  store.dispatch(actions.requestRobots()).then(() => {
    const action = store.getActions();
    const expectedActions = [
      { type: REQUEST_ROBOTS_PENDING },
      { type: REQUEST_ROBOTS_FAILED, payload: 'Some error' }
    ]
    expect(action).toEqual(expectedActions);
  })
});