var Animal ={
     type : "Invertebrates",
      displayType: function(){ console.log(this.type)} 
}
var animal1 = Object.create(Animal);
console.log(animal1);