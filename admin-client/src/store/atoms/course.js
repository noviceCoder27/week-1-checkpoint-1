import {atom} from 'atom';

export const courseState = atom({
    key: "courseState",
    default: {
        isLoading: false,
        course: null
    }
})