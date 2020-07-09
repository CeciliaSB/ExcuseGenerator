window.onload = () => {
    
    document.querySelector('#btn').addEventListener("click",() => {
       document.querySelector('#the-excuse').innerHTML = generateExcuse();
    });
    console.log('Hello Rigo from the console!');
};

let generateExcuse = () => {

    let pronoun = ['A', 'The'];
    let subject = ['jogger','racoon', 'dog', 'driver', 'homeless guy', 'old lady'];
    let action = ['took my', 'threw my', 'yelled at my', 'stole my', 'eat my'];
    let things = ['homework', 'toe', 'car', 'shoe'];
    let where = ['on the street', 'in my house', 'in my driveway'];

    let pronounIndex = Math.floor(Math.random() * pronoun.length);
    let subjectIndex = Math.floor(Math.random()* subject.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let thingsIndex = Math.floor(Math.random() * things.length);
    let whereIndex = Math.floor(Math.random() * where.length); 

    return pronoun[pronounIndex] + ' ' + subject[subjectIndex] + ' ' + action[actionIndex] + ' ' + things[thingsIndex] + ' ' + where[whereIndex];
};

