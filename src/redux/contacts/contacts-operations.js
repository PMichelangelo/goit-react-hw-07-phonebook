import * as contactsApi from '../../api/contacts-api'

import { fetchContactsLoading,fetchContactsSuccess,fetchContactsError } from './contacts-slice'

export const fetchContacts = () => {
  const func = async (dispatch) => {
    try {
      dispatch(fetchContactsLoading())
      const data = await contactsApi.requestContacts()
      dispatch(fetchContactsSuccess(data))
    }
    catch (error) {
      dispatch(fetchContactsError(error.message))
    }

  }
  return func
}

