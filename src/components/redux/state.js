
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {


    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi how are you?', likesCount: 11},
                {id: 2, message: 'hi its my post', likesCount: 12},
                {id: 3, message: 'blabla', likesCount: 10}
            ],
            newPostText: 'Samurai'

        },
        messagesPage: {
            message: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'how are you?'},
                {id: 3, message: 'what are you think about your dream ?'},
                {id: 4, message: 'ok'},
                {id: 5, message: 'stay with...'}
            ],
            dialogs: [
                {id: 1, name: 'Roma'},
                {id: 2, name: 'Vlad'},
                {id: 3, name: 'Kirill'},
                {id: 4, name: 'Viktor'},
                {id: 5, name: 'Alexandra'},
                {id: 6, name: 'Oleh'}
            ]
        },
        sidebar: {}

    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subcribe(observer) {

        this._callSubscriber = observer; // (паттерн наблюддатель  observer)
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(NewText) {

        this._state.profilePage.newPostText = NewText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.NewText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', NewText : text })

export default store;
window.state = store;