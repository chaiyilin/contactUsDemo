import store from 'store'

export const submit = (contactMeMessage) => {
  return new Promise(function (resolve, reject) {
    setTimeout(()=>{
      store.set('contactMeMessage', JSON.stringify(contactMeMessage))
      resolve(contactMeMessage)
    },5000)


  })
}
