var msg = '';                   // Message//alert("test");/* Write your for loop here */var number = 2;for (var i = 1; i <= 10; i++) {    msg += i + ' x ' + number + ' = ' + (i * number) + '<br />';
}document.getElementById('blackboard').innerHTML = msg;