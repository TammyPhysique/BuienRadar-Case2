import express from "express";
import mongoose from "mongoose";
import fetch from "cross-fetch";
import weatherstationroute from "./routes/weatherstations";
import { weatherstation } from "./schemas/weatherstation";
import {config} from "./config/default";
require('dotenv').config()

import csv
import mysql.connector
import sys

mydb = mysql.connector.connct(
    host="127.0.0.1",
    user="Educom",
    password="_ZCnk-[QtzKOp)go",
    database="educom"
    )

mycursor = mydb.cursor()

arg = sys,argv[1]

openbestand = open(arg)
leesbestand = csv.reader(openbestand)

if len (sys.argv)>1:
    print("CSV-bestand in MySQL-database aan het laden...")
    for row in leesbestand:
        mycursor.execute("INSERT INTO educom(id, stationid, stationname, lat, lon, regio, timestamp, weatherdescription, Zwaar bewolkt, iconurl, graphUrl, winddirection, temperature, groundtemperature, feeltemperature, windgusts, windspeed, windspeedBft, humidity, precipitation, sunpower, rainFallLast24Hour, rainFallLastHour, winddirectiondegrees, startdate, enddate, forecast, id, day, mintemperature, maxtemperature, mintemperatureMax, mintemperatureMin, maxtemperatureMax, maxtemperatureMin, rainChance, sunChance, windDirection, wind, mmRainMin, mmRainMax, weatherdescription , iconurl, on)" \
        "VALUES(%s,%s,%s,%s,%s,%s)",
        row)
    print("Bestand succesvol geladen!")
else:
    print("ERROR: Geen bestandnaam geleverd!")

mydb.commit()
mydb.close()

const app = express()

app.use('/weatherstations', weatherstationroute);

mongoose.connect("mongoose.connect("mongodb+srv://rutger:"+process.env.DB_PASSWORD+"@cluster0.yh4da.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
const client = mongoose.connection;

const UpdateData = async () =>{
    let response = await fetch('https://data.buienradar.nl/2.0/feed/json');
    let data = await response.json();

    let weatherstations = data.actual.stationmeasurements.map((station: any) =>{
        const date = station.timestamp.split("T");
        return new weatherstation({
            stationname: station.stationname,
            date: date[0],        
            weatherdescription: station.weatherdescription,
            temperature: station.temperature,
            feeltemperature: station.feeltemperature,
            groundtemperature: station.groundtemperature,
            humidity: station.humidity,
            rainFallLast24Hour: station.rainFallLast24Hour,
            rainFallLastHour: station.rainFallLastHour
        })
    }); 

    weatherstations.forEach(async (station: any) => {
        await client.db.collection("weatherstations").findOneAndUpdate({date: station.date, stationname: station.stationname}, 
            {$set :{stationname: station.stationname,
                weatherdescription: station.weatherdescription,
                date: station.date,
                temperature: station.temperature,
                feeltemperature: station.feeltemperature,
                groundtemperature: station.groundtemperature,
                humidity: station.humidity,
                rainFallLast24Hour: station.rainFallLast24Hour,
                rainFallLastHour: station.rainFallLastHour}}, 
            {upsert: true});
    });
    console.log("Data updated")
}

setInterval(() => {
    UpdateData();},
    config.SetInterval
);

app.listen({port: 4001}, ()=> {
    console.log('server running')
})