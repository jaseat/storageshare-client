// import request from 'superagent';
import {ItemsTypes as types} from '../action-types';
import request from 'superagent';

const updateItemsObject = ( items, type ) => {
  return {
    type,
    items,
  };
};

export function fetchItems(id) {
  return async dispatch => {
    var items = await fetch('/api/boxes/' + id);
    items = await items.json();
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