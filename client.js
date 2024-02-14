const soap = require('soap');

const proxyUrl = 'http://localhost:3000';

const getValutes = async () => {
    const client = await soap.createClientAsync(proxyUrl);
    const response = await client.getValutesAsync();
    return JSON.parse(response);
};

const getValute = async (code, startDate, endDate) => {
    const client = await soap.createClientAsync(proxyUrl);
    const response = await client.getValuteAsync({ code, startDate, endDate });
    return JSON.parse(response);
};

// Пример использования
(async () => {
    const valutes = await getValutes();
    console.log(valutes);

    const valute = await getValute('USD', '01.03.2023', '15.03.2023');
    console.log(valute);
})();
