const params = new URLSearchParams({
    "destinationId": "1506246",
    "pageNumber": "1",
    "checkIn": "2020-12-10",
    "checkOut": "2020-12-25",
    "pageSize": "25",
    "adults1": "1",
    "currency": "USD",
    "locale": "en_US",
    "sortOrder": "PRICE"
});

export const options = {
    method: 'GET',
    headers: {
        "x-rapidapi-key": "ef6aa709c6msh59ea8aef79713cbp1df7c5jsn167c2866f9b9",
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "useQueryString": true
    }
};

export const url = `https://hotels4.p.rapidapi.com/properties/list?${params}`;