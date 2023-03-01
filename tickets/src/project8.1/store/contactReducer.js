const defaultState = {
  contacts: []
} 

const INITIAL_CONTACT = "INITIAL_CONTACT"
const ADD_CONTACT = "ADD_CONTACT"
const EDIT_CONTACT = "EDIT_CONTACT"
const REMOVE_CONTACT = "REMOVE_CONTACT"

export const contactReducer = (state = defaultState, action) => {
  switch (action.type){
    case INITIAL_CONTACT: 
      return {...state, contacts: [...action.payload]}
    case ADD_CONTACT: 
      return {...state, contacts: [...state.contacts, action.payload]}
    case EDIT_CONTACT: 
      const arr = state.contacts.map(item => {
        if(item.id === action.payload.id) return (action.payload.contact)
        return item;
      })
      return ({...state, contacts: [...arr]})
    case REMOVE_CONTACT: 
      return {...state, contacts: state.contacts.filter(contact => contact.id !== action.payload)}
    default:
      return state
  }
}

export const initialContactAction = (payload) => ({type: INITIAL_CONTACT, payload})
export const addContactAction = (payload) => ({type: ADD_CONTACT, payload})
export const editContactAction = (payload) => ({type: EDIT_CONTACT, payload})
export const removeContactAction = (payload) => ({type: REMOVE_CONTACT, payload})