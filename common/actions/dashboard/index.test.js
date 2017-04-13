import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from 'actions'
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Dashboard actions', () => {

    it('creates GET_STATISTICS_SUCCESS when GET_STATISTICS was successful', () => {
        let result = {
            data: {
                token: 'string'
            }
        }

        const expectedActions = [
            {
                type: actions.LOGIN_AUTH_SUCCESS,
                ...result.data
            }
        ]

        const store = mockStore({})
        return store.dispatch(actions.LOGIN_AUTH({})).then(() => {
            let dispatched = store.getActions()
            expect(dispatched).toEqual(expectedActions)
        })
    })

    it('creates GET_STATISTICS_FAIL when GET_STATISTICS was failed', () => {
        let result = {
            data: {
                errors: ['array']
            }
        }
        const expectedActions = [
            {
                type: actions.LOGIN_AUTH_FAIL,
                ...result.data
            }
        ]
        const store = mockStore({})
        return store.dispatch(actions.LOGIN_AUTH({})).then((res) => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})
