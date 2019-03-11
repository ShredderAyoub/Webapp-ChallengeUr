
////////******************************************** ***************************///////////////////////////


***I have used Reat-js to create this project, I have created a folder and installed React in it using npm; 
then installed bootstrap and react bootstrap, react-dom, react-router-dom and styled, firebase ;

///////////**************************************************//////////////////////////////////////////


 the approach i took for building this project was: { in the App.js I have set the 
login page and used firebase to handle the user database;
the user can put an email and 
password and press a "sign up " button to submit data to fire base then the user can use 
that same email and password and press sign in to go to home page pressing log out to log 
out and go to the sign-in/signup page,

////**********************************************************************/////////////////////////////////////////////

The home page has [

Shoplist element that works as a container to the Shop element 

the Shop elements are sorted by distance, the Shop element is linked to our local Database,
 when you hover over the shop carts the like and dislike buttons translate and you can either
 dislike or like the shop

 pressing the shop card gets you to the details of the shop where you can like the shop or go back to the store 




when you press like the store is registered in the preflist I could get the store 
to not display in the shop list using the (.filter) but when you try to remove the 
shop from preflist it gives an error because I'm working with 'temp values' when trying 
to get elements from my local Database in order to not mess up my database however pressing
 clearpreflist button doesn't give errors because 
it fetches the data from database from scratch,
 you can comment the "tempShops=tempShops.filter(item=> item.id !== id);" line 68 in the context.js in the 
case the shop 
is not removed when liked 
from the shop list but the button like changes to " preferred shop" instead and in 
this case you can add items to pref list and remove items from pref list without getting errors, a 
number is set to 
give you the number of the liked shop that number increments when a shop is liked and decrement
 when the shop is removed from shop list 
I have used the  context.js file to handle all my local database this 
solution was taken in order to increase the web app performance and speed     
 pressing dislike button  changes  
to dislike I couldn't get the dislike time of 2 hours to be applied 