function norris() {
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest();
xhr.open('GET','https://api.chucknorris.io/jokes/random');
xhr.send();
xhr.onload = function () {
    if (xhr.status == 200){
        resolve(xhr.response)
    }else {
        reject('connection problem')

    }
  }
    });
}
norris().then(theResponse => {
    console.log(theResponse)
}).catch(error=> {
   console.log(error)
})
