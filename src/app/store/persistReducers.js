import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: '2id-data',
      storage,
      whitelist: ['stores'],
    },
    reducers
  )

  return persistedReducer
}
