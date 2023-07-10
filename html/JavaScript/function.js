console.log("Function In Js")

// basic Function Creation

function basic() {
    console.log("Welcome To Js World !");
}

basic();

// html get input and show function
function greet(name, msg) {
    if (name) {

        console.log("hello " + name + msg);
    }
    else {
        console.log("testing the return statement !");

    }
}
greet('hi', 'welcome');

var days = 1;

while (days <= 7) {
    switch (days) {
        case 1:
            console.log('Day ' + days + ' Sunday');
            break;
        case 2:
            console.log( 'Day ' + days + ' Monday');
            break;
        case 3:
            console.log('Day ' + days + ' Tuesday');
            break;
        case 4:
            console.log('Day ' + days + ' Wednesday');
            break;
        case 5:
            console.log('Day ' + days + ' Thursday');
            break;
        case 6:
            console.log('Day ' + days + ' Friday');
            break;
        case 7:
            console.log('Day ' + days + ' Saturday');
            break;
        default :
            console.log('Loop Not Excuted');
    }
    days++;
}