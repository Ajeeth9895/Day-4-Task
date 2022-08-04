
let request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v2/all");

request.onload= () =>{
   console.log(request.status);
   console.log(request.statusText);
   let result = JSON.parse(request.response);

   for(let i=0; i<result.length; i++){
      console.log(result[i].name);
      console.log(result[i].region);
      console.log(result[i].subregion);
      console.log(result[i].population);
      
   }

}

request.send();