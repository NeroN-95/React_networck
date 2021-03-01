
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState ={
    posts: [
        {id: 1, message: 'hi how are you?', likesCount: 11},
        {id: 2, message: 'hi its my post', likesCount: 12},
        {id: 3, message: 'blabla', likesCount: 10}
    ],
    newPostText: 'Samurai'

};

 const profileReducer = (state = initialState , action) =>{
        switch (action.type){
            case ADD_POST: {
                let newPost = {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0
                };
                return  {
                    ...state,
                    newPostText : '',
                    posts : [...state.posts,newPost]

                };


            }
            case UPDATE_NEW_POST_TEXT: {
                return  {
                    ...state,
                    newPostText : action.NewText
                };


            }
            default:
                return state;
 }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, NewText: text})

export default profileReducer;