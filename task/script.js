//question 1
//How to compare two JSON have the same properties without order

let obj1 = { name: "person1", age:5 };
let obj2 = { age:5 , name: "person1" };
console.log(obj1 === obj2);
let objequal= false;

let obj1keys = Object.keys(obj1).sort();
let obj2keys = Object.keys(obj2).sort();
if (obj1keys.lenght !== obj2keys.lenght){
    console.log(objequal);
}
else{
    const areEqual = obj1keys.every((key, index) => {
        const objValue1 = obj1[key];
        const objValue2 = obj2[obj2keys[index]];
        return objValue1 === objValue2;
      });
      if (areEqual) {
        objequal = true;
        console.log(objequal);
      } else {
        console.log(objequal);
      }
    }


    //question 2
    // use rest countries API urldisplay all the county flags in the console 

    let xhr = new XMLHttpRequest()
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload= function(){
    let result=JSON.parse(xhr.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].flag);   

}
}

//question 3

//use rest countries API url and print all countries names,regions,subregion and populations

let countries = new XMLHttpRequest()
console.log(countries);
countries.open("GET", "https://restcountries.com/v3.1/all");
countries.send();
countries.onload= function(){
    let result=JSON.parse(countries.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].name.common);
        console.log(result[i].region);
        console.log(result[i].subregion); 
        console.log(result[i].population); 

    }
} 