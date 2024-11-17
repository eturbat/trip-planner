import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'

const initState = {
    items: [
        {
            "id": 1,
            "name": "The White Lotus",
            "price": 80,
            "picture": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80",
            "stars": 3,
            "quantity": 50,
            "about": "The White Lotus is an exclusive yet affordable up-scale hotel nestled in the hills of the Himalayas. Book up to 3 nights with Trip Planner and enjoy a complimentary tour of the mountains."
            
    
        },
        {
            "id": 2,
            "name": "Cappadocia",
            "price": 320,
            "picture": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
            "stars": 4,
            "quantity": 50,
            "about": "Cappadocia is a historic landmark that has withstood the test of time. Teleport yourself into another world and age with better food, luxury and the most delightful of rooms."
            
    
        },
        {
            "id": 3,
            "name": "Blue Lagoon",
            "price": 130,
            "picture": "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            "stars": 3,
            "quantity": 50,
            "about": "The Lagoon sits right next to this hotel. Experience the cool waters anytime of the day whilst being waited upon."
            
        },
        {
            "id": 4,
            "name": "The Royal Kahuna",
            "price": 200,
            "picture": "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
            "stars": 5,
            "quantity": 50,
            "about": "Welcome to Royalty! We promise to treat you like the kings and queens you are, book with TripPlanner for a true taste of the royal treatment."
            
    
        }
    
    ],
    addedItems:[],
    total: 0

}




const cartReducer= (state = initState,action)=>{
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.price 
                }
      }
       else{
          addedItem.quantity = 1;
          //calculating the total
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }
  if(action.type === REMOVE_ITEM){
      let itemToRemove= state.addedItems.find(item=> action.id === item.id)
      let new_items = state.addedItems.filter(item=> action.id !== item.id)
      
      //calculating the total
      let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
      console.log(itemToRemove)
      return{
          ...state,
          addedItems: new_items,
          total: newTotal
      }
  }
  //INSIDE CART COMPONENT
  if(action.type=== ADD_QUANTITY){
      let addedItem = state.items.find(item=> item.id === action.id)
        addedItem.quantity += 1 
        let newTotal = state.total + addedItem.price
        return{
            ...state,
            total: newTotal
        }
  }
  if(action.type=== SUB_QUANTITY){  
      let addedItem = state.items.find(item=> item.id === action.id) 
      //if the qt == 0 then it should be removed
      if(addedItem.quantity === 1){
          let new_items = state.addedItems.filter(item=>item.id !== action.id)
          let newTotal = state.total - addedItem.price
          return{
              ...state,
              addedItems: new_items,
              total: newTotal
          }
      }
      else {
          addedItem.quantity -= 1
          let newTotal = state.total - addedItem.price
          return{
              ...state,
              total: newTotal
          }
      }
      
  }

  if(action.type=== ADD_SHIPPING){
        return{
            ...state,
            total: state.total + 6
        }
  }

  if(action.type=== 'SUB_SHIPPING'){
      return{
          ...state,
          total: state.total - 6
      }
}
  
else{
  return state
  }
  
}
export default cartReducer;