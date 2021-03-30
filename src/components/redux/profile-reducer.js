const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'hi how are you?', likesCount: 11},
        {id: 2, message: 'hi its my post', likesCount: 12},
        {id: 3, message: 'blabla', likesCount: 10}
    ],
    newPostText: 'Samurai',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]

            };


        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.NewText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }


default:
    return state;
}
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, NewText: text})

export default profileReducer;