import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSagas from '@/store/sagas'
import rootReducer from '@/store/reducer'

const sagaMiddleware = createSagaMiddleware()

// 配置浏览器redux插件
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
)

const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSagas)

export default store
