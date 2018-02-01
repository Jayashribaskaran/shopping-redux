"use strict"
import {createStore} from 'redux';

//Defining red
const reducer= function (state={books:[]},action)
{
	switch(action.type){
     case "POST_BOOK":
     let books= state.books.concat(action.payload);
     return {books};
     break;
	}
	return state;
}

//store creation
 const store= createStore(reducer);

 store.subscribe(
  function(){
 	console.log('current state:',store.getState());
 	//console.log('current state:',store.getState()[0].id);

 }
 )
 //create and dispatch
 store.dispatch({
 	type:"POST_BOOK",
 	payload:[{
 		id:1,
 		title:'Agenda',
 		description:'this is the book description',
 		price:33.33
 	},
 	{
 		id:2,
 		title:'Agenda 1',
 		description:'this is the book description',
 		price:65 	
 	}
   ]
 })
 //second dispatch
 store.dispatch({
 	type:"POST_BOOK",
 	payload:{
 		id:3,
 		title:'Agenda 2',
 		description:'this is the book description',
 		price:88
 	}
 })
 