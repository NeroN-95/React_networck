import profileReducer from "./profile-reducer";
import dialogsReducer from "./message-reducer";
import sideBarReducer from "./sidebar-reducer";



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
            ],
            newMessageBody: ""
        },
        sidebar: {}

    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {

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
        this._state.profilePage  = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        this._state.sidebar = sideBarReducer( this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
}

export default store;
window.state = store;