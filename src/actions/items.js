// import request from 'superagent';
import {ItemsTypes as types} from '../action-types';

const updateItemsObject = ( items, type ) => {
  return {
    type,
    items,
  };
};

export function fetchItems() {
  return dispatch => {
    const items = [
      {
        name: "Test Box",
        description: "Test box",
        items: [{name: "test1"}, {name: "test2"}, {name: "test3"}],
        weight: 10,
        fragile: 0,
        status: 'created',
      },
      {
        name: "Test Box 2",
        description: "Test box",
        items: [{name: "test1"}, {name: "test2"}, {name: "test3"}, {name: "test3"}, {name: "test3"}, {name: "test3"}],
        weight: 10,
        fragile: 0,
        status: 'created',
      }
    ];
    dispatch(updateItemsObject(items, types.FETCH_ITEMS));
  };
}

// export function fetchItems() {
//   return async dispatch => {
//     const paragraphs = await request.get(
//       `${process.env.SERVER_ADDRESS}/contacts`
//     );
//     dispatch(updateParagraphObjects(paragraphs.body));
//   };
// }

// export function editParagraphs(paragraphs) {
//   return async dispatch => {
//     const ideaJWT = window.localStorage.ideaJWT;
//     const response = await request
//       .put(`${process.env.SERVER_ADDRESS}/contacts`)
//       .send({contact: paragraphs})
//       .set('ideaJWT', ideaJWT);
//     dispatch(updateParagraphObjects(response.body.contact));
//   };
// }