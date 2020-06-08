import setText, { appendText } from "./results.mjs";

export function timeout() {
  const wait = new Promise((resolved) => {
    setTimeout(() => {
      resolved("Timeout")
    }, 1500)
  })

  wait.then(text => setText(text))
}

export function interval() {
  let counter = 0;
  const wait = new Promise((resolved) => {
    setInterval(() => {
      console.log(`Counter`)
      resolved(`"Timeout" ${++counter}`)
    }, 1500)
  })

  wait.then(text => setText(text)).finally(() => appendText(` --DONE ${counter}`))
}

export function clearIntervalChain() {
  let counter = 0;
  let interval;
  const wait = new Promise((resolved) => {
    interval = setInterval(() => {
      console.log(`Counter`)
      resolved(`"Timeout" ${++counter}`)
    }, 1500)
  })

  wait.then(text => setText(text)).finally(() => clearInterval(interval))
}

export function xhr() {
  let request = new Promise((resolved, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/users/7");
    xhr.onload = () => {
      console.log(xhr)
      if (xhr.status === 200) {
        resolved(xhr.responseText)
      } else {
        reject("Request failed")
      }
    }
    xhr.send();
  })

  request.then(result => setText(result)).catch(reason => setText(reason))
}

export function allPromises() {
  let categories = axios.get("http://localhost:3000/itemCategories");
  let statuses = axios.get("http://localhost:3000/orderStatuses");
  let userTypers = axios.get("http://localhost:3000/userTypes");
  let addressesTypers = axios.get("http://localhost:3000/addressesTypes");

  Promise.all([categories, statuses, userTypers, addressesTypers])
    .then(([cat, stat, user, addr]) => {
      console.log(cat.data);
      console.log(stat.data);
      console.log(user.data);
      console.log(addr.data)
    })
    .catch(err => console.log(err))
}

export function allSettled() {
  let categories = axios.get("http://localhost:3000/itemCategories");
  let statuses = axios.get("http://localhost:3000/orderStatuses");
  let userTypers = axios.get("http://localhost:3000/userTypes");
  let addressesTypers = axios.get("http://localhost:3000/addressesTypes");

  Promise.allSettled([categories, statuses, userTypers, addressesTypers])
    .then((values) => {
      let result = values.map(val => {
        if (val.status === "fulfilled") {
          return `FULLFILLED: ${JSON.stringify(val.value.data[0])}`
        }
        return `REJECTED: ${val.reason.message}`
      })
      console.log(result)
    })
    .catch(err => console.log(err))
}

export function race() {
  let users = axios.get("http://localhost:3000/users") ;
  let backup = axios.get("http://localhost:3001/users") ;

  Promise.race([users, backup])
  .then(users=>{
    console.log(users.data)
  }).catch(err=> console.log(err))
}