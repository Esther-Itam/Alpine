import legende from '../images/configurateur/modele/selection/legende.png'
import pure from '../images/configurateur/modele/selection/pure.png'


const initialState = {
  //TODO : complete players {} and monster{}
  versions: {
    1: { name: "Legende", price: 58500, picture: {legende}, id: 1},
    2: { name: "Pure", price: 54700, picture: {pure}, id: 2 }
  }
}
 


function rootReducer(state = initialState, action) {
  
 if (action.type === "CHOICE") {
    
    return {...state, 
                versions: state.versions.price,
                 }}      
   
    console.log(state.versions)

  

  return state;

};

 
export default rootReducer;