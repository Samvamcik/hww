//1.
const arr = [1, 2, 3, 4, 5];

for (let i=0; i < arr.length; i++){
    console.log(arr[i]);
    //2.
    const sayHello = () => {

        let firstName = prompt ('Введите имя');
        
        if(firstName == '') {
            alert('Вы не ввели Имя, введите пожалуйста Имя');
            sayHello();
        }; alert (`Имя, ${firstName}`);
    }
    
    sayHello()
    //3
    const getAge = () => {

    let age = prompt ('Введите Ваш возраст');

    if(age.length <= 3 && age !== 0 && parseInt(age)) {
        age < 5 ? alert('Вы младенец') :
        age > 5 && age < 10 ? alert('Вы ребенок') : 
        age > 10 && age < 18 ? alert('Вы подросток') : 
        age > 18 && age < 65 ? alert('Вы взрослый') : 
        age > 65 ? alert('Вы старик') : 
        age == 5 || age == 10 || age == 18 || age == 65 ? alert(`Извините, у нас в тз только строго > либо < ${age} лет`)
        : null ;
        
    } else {
        alert('Пожалуйста вводите только числа, и корректные значения возраста');
        getAge();
    }  
    
}
    
getAge ();

// 4

getNumType = () => {

    let askNum = prompt('Введите число');

    askNum%3 == 0 && askNum%5 ==0 ? alert('FizzBuzz'): 
    askNum%3 == 0 ? alert('Fizz'):
    askNum%5 == 0 ? alert('Buzz'): null;
    
}

getNumType()
