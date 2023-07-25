import { selector } from "recoil";
import { courseState } from './../atoms/course';

export const isCourseLoading = selector({
    key: "isCourseLoading",
    get: ({get}) => {
        const state = get(courseState);
        return state.isLoading;
    }
})


export const courseDetails = selector({
    key: "courseDetails",
    get: ({get}) => {
        const state = get(courseState);
        return state.course;
    }
})


export const courseTitle = selector({
    key: "courseTitle",
    get: ({get}) => {
        const state = get(courseState);
        if(state.course) {
            return state.course.title;
        }
        
    }
})

export const coursePrice = selector({
    key: "coursePrice",
    get: ({get}) => {
        const state = get(courseState);
        if(state.course) {
            return state.course.price;
        }
        
    }
})

export const courseImage = selector({
    key: "courseImage",
    get: ({get}) => {
        const state = get(courseState);
        if(state.course) {
            return state.course.imageLink;
        }
        
    }
})


