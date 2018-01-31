"use strict"
import {createStore} from 'redux';

//Defining red
const reducer= function (state=0,action)
{
	switch(action.type){
     case "POST_BOOK":
     return state = action.payload;
     break;
	}
	return state;
}

//store creation
 const store= createStore(reducer);

 store.subscribe(
  function(){
 	console.log('current state:',store.getState());
 	console.log('current state:',store.getState().id);

 }
 )
 //create and dispatch
 store.dispatch({
 	type:"POST_BOOK",
 	payload:{
 		id:1,
 		title:'Agenda',
 		description:'this is the book description',
 		price:33.33
 	}
 })
 