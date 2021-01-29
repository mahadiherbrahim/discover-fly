function handleTicket(ticketType, isIncrease) {
    //Ticket Count
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
    //Call a function for calculate subtotal tax and show total
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
    //subTotal ticket price Declared
    const firstClassTicketCount = getTicketInput('firstClass');
    const economyTicketCount = getTicketInput('economy');
    const subtotalTicketPrice = firstClassTicketCount * 150 + economyTicketCount * 100;
    document.getElementById('subtotalTicketPrice').innerText = subtotalTicketPrice;

    //Declared Tax
    const ticketTax = subtotalTicketPrice * 0.1;
    document.getElementById('ticketTax').innerText = Math.round(ticketTax)

    //Total ticket price Declared
    const totalTicketPrice = subtotalTicketPrice + ticketTax;
    document.getElementById('totalTicketPrice').innerText = totalTicketPrice;
}


//write function for show success message (Bonus Part)
function handleBookNow() {
    document.getElementById('bookingForm').style.display = "none";
    document.getElementById('bookingContent').style.display = "none";
    document.getElementById('successMessage').style.display = "block";
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