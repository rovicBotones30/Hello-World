function createPerson(age, firstName) {
    return{
age,
firstName,
make: function(){
    console.log('ey yo');
},
happy: function(){
    console.log('happy');
}

    }
};
const circle = createPerson(20, 'hello');


//Constructor function
function Person(radius)
{
    this.radius = radius;
    this.make = function(){
        console.log('hey');
    }
    
}
const another = new Person(1);
another.make();
const king = new createPerson(20, 'pogiako');
console.log(king.happy);