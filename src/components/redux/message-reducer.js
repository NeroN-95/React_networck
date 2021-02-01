
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

 const dialogsReducer = (state = initialState, action) =>{
switch (action.type){
    case UPDATE_NEW_MESSAGE_BODY:
        state.newMessageBody = action.body;
        return state;
    case SEND_MESSAGE:
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.message.push({id: 6, message: body });
        return state;
    default:  return state;
}
}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;