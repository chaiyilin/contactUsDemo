import store from 'store'

export const submit=(contactMeMessage)=>{
    return new Promise(function(resolve, reject) {
        store.set('contactMeMessage', JSON.stringify(contactMeMessage))
        resolve(contactMeMessage);
    });
}