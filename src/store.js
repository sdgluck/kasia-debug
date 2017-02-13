import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import kasia from 'kasia'
import wpapi from 'wpapi'

const WP = new wpapi({ endpoint: 'https://api.chickenorpasta.com.br/wp-json' })

const { kasiaReducer, kasiaSagas } = kasia({ wpapi: WP })

const rootSaga = function * () {
  yield [...kasiaSagas]
}

const rootReducer = combineReducers({
  ...kasiaReducer
})

const sagaMiddleware = createSagaMiddleware()

export default function configureStore (initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga)

  return store
}
