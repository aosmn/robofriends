import { CHANGE_SEARCH_FIELD,
         REQUEST_ROBOTS_PENDING,
         REQUEST_ROBOTS_SUCCESS,
         REQUEST_ROBOTS_FAILED
} from './constants';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestRobots = () => (dispatch) => {
  dispatch({type: REQUEST_ROBOTS_PENDING});
  
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((result) => result.json())
  .then(users => { 
    dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: users});
  })
  .catch((err) => {
    // this.setState({loading: false})
    dispatch({type: REQUEST_ROBOTS_FAILED, payload: err});
    // throw new Error('Noooooooooooo!');
  });
}