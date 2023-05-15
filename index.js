import { app } from "./firebaseConfig";

const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

// destrukturyzacja obiektu

// const obj ={
//   name: 'test',
//   age: 10,
// }

// const objB = {
//   ...obj,
//   surname: 'test nazwisko'
// }

// obj.name;
// obj.age;

// const { name } = obj;

// destrukturyzacja tablicy
// const tab = ['123', 'test', 'aaa'];
// const [valA, ...rest] = tab;
// const tabB = [...tab]; // tab.map(el => el)


const handleSubmit = (event) => {
  event.preventDefault();
  const emailValue = email.value;
  const passwordValue = password.value;
  console.log(`Email: ${emailValue}`);
  console.log(`Hasło: ${passwordValue}`);
}

form.addEventListener('submit', handleSubmit);