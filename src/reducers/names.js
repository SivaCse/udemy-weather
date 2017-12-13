export default function(state={users:[],selectedUser:''}, action){

  switch (action.type){
        case 'CREATE_USER':
          return {...state,users:state.users.concat(action.payload)}
        case 'SELECTED_USER':
          return {...state,selectedUser:action.payload}
        case 'UPDATE_USER':
        const {id ,data } = action.payload
        const users = state.users.map((s,i)=>{
             if(i===id) {
               s=data;
             }
             return s;
           });
        return {...state,users:users}   
    }
    return state;
}
