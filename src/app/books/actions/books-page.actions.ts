import { createAction, props } from '@ngrx/store';
import { BookRequiredProps } from 'src/app/shared/models';

export const enter = createAction('[Books Page] Enter');

export const createBook = createAction(
  '[Books Page] Create Book',
  props<{ book: BookRequiredProps }>(),
);

export const selectBook = createAction(
  '[Book Page] Select Book',
  props<{ bookId: string }>(),
);

export const editBook = createAction(
  '[Book Page] Edit Book',
  props<{ book: BookRequiredProps }>(),
);

export const deleteBook = createAction(
  '[Book Page] Delete Book',
  props<{ bookId: string }>(),
);

export const clearSelectedBook = createAction(
  '[Book Page] Clear Selected Book',
);
