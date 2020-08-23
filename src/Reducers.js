import {
    CHANGE_SEARCH_FIELD,
    REQUEST_LISTS_UPDATE,
    REQUEST_LISTS_DELETE,
    REQUEST_LISTS_EDIT,
    REQUEST_LISTS_COMPLETED,
  } from "./Constants.js";

const initialStateSearch = {
	searchField : ''
}

export const searchLists =(state = initialStateSearch, action = {}) => {
    
    switch (action.type){
        case CHANGE_SEARCH_FIELD :
            return Object.assign({},state, { searchField: action.payload});
        default:
            return state;	
    }
}

const initialStateLists = {
    list: [],
    completedList: [],
    length: 0,
    isUpdated: false
}

export const updateLists = (state = initialStateLists, action = {}) => {
    
    if(action.type === REQUEST_LISTS_UPDATE){
        const payload = action.payload
        let lists = state.list
        let lengths = lists.length + 1 
        lists[lengths-1] = payload
        //console.log(lists)
        return Object.assign({},state, {list: lists, length: lengths, isUpdated: true})
    }else if(action.type === REQUEST_LISTS_COMPLETED){
        let element = action.payload
        let lists = state.completedList
        let lengths = lists.length +1
        lists[lengths-1] = element
        //console.log(state.completedList)
        return Object.assign({},state, {completedList: lists})
    }else if (action.type === REQUEST_LISTS_DELETE){
        
        let active = state.list.filter(name => {
            if(state.completedList.includes(name)){
                return null
            }else return name
       })
        //console.log("payload", index)
        return Object.assign({},state, {completedList: [], list: active})
    }else if (action.type === REQUEST_LISTS_EDIT){
        //console.log(action.payload)
        let lists = state.list
        let element = action.payload
        lists[element[0]] = element[1]
        let completeListChange = state.completedList
        if(completeListChange.indexOf(lists[element[0]]) > -1){
            let complete = completeListChange.indexOf(lists[element[0]])
            completeListChange[complete] = element[1]
        }
        console.log(lists,completeListChange)
        return Object.assign({},state, {completedList: completeListChange, list: lists})
    }

    return state

    
}
