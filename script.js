function handleTicket(ticketType, isIncrease) {

    //Ticket Count
    //const ticketInput = document.getElementById(ticketType + 'TicketInput');
    //const ticketCount = parseInt(ticketInput.value);

    const ticketCount = getTicketInput(ticketType);
    let ticketTotalCount = ticketCount;
    if (isIncrease == true) {
        ticketTotalCount = ticketCount + 1;
    } else if (isIncrease == false && ticketCount > 0) {
        ticketTotalCount = ticketCount - 1;
    }

    document.getElementById(ticketType + 'TicketInput').value = ticketTotalCount;

    //Price Declared
    let ticketPrice = 0;
    if (ticketType == 'firstClass') {
        ticketPrice = ticketTotalCount * 150;
    } else if (ticketType = 'economy') {
        ticketPrice = ticketTotalCount * 100;
    }
    totalTicketPrice();
}


//Write function for input value catch and make it integer 
function getTicketInput(ticketType) {
    const ticketInput = document.getElementById(ticketType + 'TicketInput');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}


// Write function for calculate total ticket price  
function totalTicketPrice() {
    const firstClassTicketCount = getTicketInput('firstClass');
    const economyTicketCount = getTicketInput('economy');
    const totalTicketPrice = firstClassTicketCount * 150 + economyTicketCount * 100;
    console.log(totalTicketPrice);
}








// function handleTicketClass(isIncrease) {
//     //Ticket Count
//     const ticketInput = document.getElementById('firstClassTicketInput');
//     const ticketCount = parseInt(ticketInput.value);
//     let ticketTotalCount = ticketCount;
//     if (isIncrease == true) {
//         ticketTotalCount = ticketCount + 1;
//     } else if (isIncrease == false && ticketCount > 0) {
//         ticketTotalCount = ticketCount - 1;
//     }
//     ticketInput.value = ticketTotalCount;

//     //Price Declared
//     const ticketClassPrice = ticketTotalCount * 150;
// }

// function handleTicketEconomy(isIncrease) {
//     //Ticket Count
//     const ticketInput = document.getElementById('economyTicketInput');
//     const ticketCount = parseInt(ticketInput.value);
//     let ticketTotalCount = ticketCount;
//     if (isIncrease == true) {
//         ticketTotalCount = ticketCount + 1;
//     } else if (isIncrease == false && ticketCount > 0) {
//         ticketTotalCount = ticketCount - 1;
//     }
//     ticketInput.value = ticketTotalCount;

//     //Price Declared
//     const ticketClassPrice = ticketTotalCount * 100;
// }

// document.getElementById('ticketClassIncrease').addEventListener('click', function() {
//     const ticketInput = document.getElementById('ticketInput');
//     const ticketCount = parseInt(ticketInput.value);
//     const ticketTotalCount = ticketCount + 1;
//     ticketInput.value = ticketTotalCount;

//     const ticketClassPrice = ticketTotalCount * 150;
// });

// document.getElementById('ticketClassDecrease').addEventListener('click', function() {
//     const ticketInput = document.getElementById('ticketInput');
//     const ticketCount = parseInt(ticketInput.value);
//     const ticketTotalCount = ticketCount - 1;
//     ticketInput.value = ticketTotalCount;

//     const ticketClassPrice = ticketTotalCount * 150;
// });