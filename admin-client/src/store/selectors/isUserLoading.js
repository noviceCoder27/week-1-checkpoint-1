import { userState } from '../atoms/user'
import {selector} from 'atom'

export const isUserLoading = selector({
    key: "isUserLoading",
    get: ({get}) => {
        const state = get(userState);
        return state.isUserLoading;
    }
})

