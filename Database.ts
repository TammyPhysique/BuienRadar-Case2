const myServer = http.createServer((req, res) => {
   res.write('Hello World!')
   res.end()
});

myServer.listen(3000, () => {
   console.log('Server is running on port 3000. Go to http://localhost:3000/')
});

myServer.close()

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
