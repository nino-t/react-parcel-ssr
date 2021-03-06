import _get from 'lodash/get';
import types from '~/store/types';
import Api from '~/api';

import { getCache, setCache, getKeys } from '~/lib/cache';

export const getHeaderMenu = ({ isSSR = false }) => async dispatch => {
  const key = 'headerMenu';

  let result = getCache(key);
  if (!result) {
    result = await Api.getHeaderMenu({ isSSR });
    setCache(key, result);
  }

  if (result.meta.status === 'error') {
    dispatch({
      type: types.GET_HEADER_MENU_ERROR,
      payload: result
    });
  } else {
    dispatch({
      type:
        result.meta.status === 'success'
          ? types.GET_HEADER_MENU_SUCCESS
          : types.GET_HEADER_MENU_EMPTY,
      payload: result
    });
  }

  return result;
};
