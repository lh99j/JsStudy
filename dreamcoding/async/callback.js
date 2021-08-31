'use strict';

//JavaScript is synchronous.
//Excute the code block by orger after hoisting.
//hoisting : var, function declaration

console.log('1');

setTimeout(() => {
    console.log('2');
}, 1000);

console.log('3');



//Synchronous callback(동기)

function printImmediately(print){
    print();
}

printImmediately(() => console.log('hello'));  //Synchronous



//Asynchronous calback(비동기)
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'),2000); //Asynchrounos




// Callback Hell example
    
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
      setTimeout(() => {
        if (
          (id === 'ellie' && password === 'dream') ||
          (id === 'coder' && password === 'academy')
        ) {
          onSuccess(id);
        } else {
          onError(new Error('not found'));
        }
      }, 2000);
    }
  
    getRoles(user, onSuccess, onError) {
      setTimeout(() => {
        if (user === 'ellie') {
          onSuccess({ name: 'ellie', role: 'admin' });
        } else {
          onError(new Error('no access'));
        }
      }, 1000);
    }
  }
  
  const userStorage = new UserStorage();
  const id = prompt('enter your id');
  const password = prompt('enter your password');

  userStorage.loginUser(id, password, user => {
      userStorage.getRoles(user, userWithRole => {
          alert( `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
        },
        error => {
          console.log(error);
        }
      );
    },
    error => {
      console.log(error);
    }
  );

  //problem : 콜백안에서 또 호출하고 그 또 콜백에서 콜백을 호출하면 가독성이 떨어지고 , 로직을 이해하는것도 어려움, 유지보수도 어렵다.