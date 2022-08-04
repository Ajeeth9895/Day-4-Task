var obj1 ={name:"person 1", age:5}

var obj2 ={ age:5, name:"person 1"}

var a = JSON.stringify(obj1);
var b = JSON.stringify(obj2)
    
if(a.name===b.name && a.age===b.age){
    console.log("Object are same");
}else{
    console.log("Object are not same");
}