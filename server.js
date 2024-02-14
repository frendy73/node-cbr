const soap = require('soap');
const express = require('express');

const url = 'https://www.cbr.ru/DailyInfoWebServ/DailyInfo.asmx?WSDL';

const app = express();

app.get('/getValutes', async (req, res) => {
    const client = await soap.createClientAsync(url);
    const response = await client.GetCursOnDateXMLAsync({
        On_date: new Date().toISOString(),
    });
    const valutes = await response.GetCursOnDateXMLResultAsync();
    res.json(JSON.parse(valutes));
});

app.get('/getValute', async (req, res) => {
    const { code, startDate, endDate } = req.query;
    const client = await soap.createClientAsync(url);
    const response = await client.GetCursDynamicXMLAsync({
        FromDate: startDate,
        ToDate: endDate,
        ValutaCode: code,
    });
    const valute = await response.GetCursDynamicXMLResultAsync();
    res.json(JSON.parse(valute));
});

app.listen(3000);
