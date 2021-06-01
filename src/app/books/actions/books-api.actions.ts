import { createAction, props } from '@ngrx/store';
import { BookModel } from 'src/app/shared/models';

export const booksLoadedSuccess = createAction(
  '[Books API] Books Loaded Success',
  props<{ books: BookModel[] }>(),
);

export const bookCreatedSuccess = createAction(
  '[Books API] Books Created Success',
  props<{ book: BookModel }>(),
);

export const bookUpdatedSuccess = createAction(
  '[Books API] Books Updated Success',
  props<{ book: BookModel }>(),
);

export const bookDeletedSuccess = createAction(
  '[Books API] Book Deleted Success',
  props<{ bookId: string }>(),
);
