import {renderEntireTree} from "../../render";


let state = {
    profilePage: {
        posts : [
    {id: 1, message: 'hi how are you?', likesCount: 11},
    {id: 2, message: 'hi its my post', likesCount: 12},
    {id: 3, message: 'blabla', likesCount: 10}
],
        newPostText : 'Samurai'

    },
    messagesPage:{
        message :  [
        {id : 1, message: 'hi'},
        {id : 2, message: 'how are you?'},
        {id : 3, message: 'what are you think about your dream ?'},
        {id : 4, message: 'ok'},
        {id : 5, message: 'stay with...'}
    ],
        dialogs : [
            {id : 1, name: 'Roma'},
            {id : 2, name: 'Vlad'},
            {id : 3, name: 'Kirill'},
            {id : 4, name: 'Viktor'},
            {id : 5, name: 'Alexandra'},
            {id : 6, name: 'Oleh'}
        ]
    },
    sidebar : {}

}
window.state = state ;


export let addPost = () => {

    let newPost = {
        id : 5,
        message: state.profilePage.newPostText,
        likesCount : 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText= '';
    renderEntireTree(state);
}

export let updateNewPostText = (NewText) => {
    state.profilePage.newPostText = NewText;
    renderEntireTree(state);
}

export default state;