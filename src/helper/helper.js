export function generateOrderString(order) {
    let itemsString = ""
    if(order.items.length===1) 
        itemsString = `${order.items[0].quantity} x ${order.items[0].name}`
    else if(order.items.length===2) 
        itemsString = `${order.items[0].quantity} x ${order.items[0].name}, ${order.items[1].quantity} x ${order.items[1].name}`
    else if(order.items.length>2) 
        itemsString+= `${order.items[0].quantity} x ${order.items[0].name}, ${order.items[1].quantity} x ${order.items[1].name},...`

    return itemsString
}

export function generateDateString(dateString) {
    const date = new Date(dateString);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    };
    return date.toLocaleString('en-US', options);
}

export function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^[0-9]{10}$/;

    return phoneRegex.test(phoneNumber);
}