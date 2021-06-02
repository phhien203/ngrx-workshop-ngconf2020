import { createReducer, on, Action, createSelector } from '@ngrx/store';
import { BookModel, calculateBooksGrossEarnings } from 'src/app/shared/models';
import { BooksPageActions, BooksApiActions } from 'src/app/books/actions';

const createBook = (books: BookModel[], book: BookModel) => [...books, book];

const updateBook = (books: BookModel[], changes: BookModel) =>
  books.map(b => (b.id === changes.id ? Object.assign({}, b, changes) : b));

const deleteBook = (books: BookModel[], bookId: string) =>
  books.filter(b => b.id !== bookId);

export interface State {
  collection: BookModel[];
  activeBookId: string | null;
}

export const initialState: State = {
  collection: [],
  activeBookId: null,
};

export const booksReducer = createReducer(
  initialState,
  on(BooksPageActions.enter, BooksPageActions.clearSelectedBook, (state, _) => {
    return {
      ...state,
      activeBookId: null,
    };
  }),
  on(BooksPageActions.selectBook, (state, action) => {
    return {
      ...state,
      activeBookId: action.bookId,
    };
  }),
  on(BooksApiActions.booksLoadedSuccess, (state: State, action) => {
    return {
      ...state,
      collection: action.books,
    };
  }),
  on(BooksApiActions.bookDeletedSuccess, (state: State, action) => {
    return {
      ...state,
      collection: deleteBook(state.collection, action.bookId),
    };
  }),
  on(BooksApiActions.bookCreatedSuccess, (state: State, action) => {
    return {
      ...state,
      collection: createBook(state.collection, action.book),
    };
  }),
  on(BooksApiActions.bookUpdatedSuccess, (state: State, action) => {
    return {
      ...state,
      collection: updateBook(state.collection, action.book),
    };
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return booksReducer(state, action);
}
