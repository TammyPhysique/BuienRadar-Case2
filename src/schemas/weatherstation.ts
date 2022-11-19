import { Document, Model, model, Schema } from "mongoose";

export interface Iweatherstation extends Document {
    stationname: String;
    date: String;
    weatherdescription: String;
    temperature: Number;
    feeltemperature: Number;
    groundtemperature: Number;
    humidity: Number;
    rainFallLast24Hour: Number;
    rainFallLastHour: Number;

    shortterm: String;
    id: Number;
    startdate: Number;
    enddate: Number;
    forecast: String; 
    fivedayforecast: String;
    day: Number;
    mintemperature: Number;
    maxtemperature: Number;
    mintemperatureMax: Number;
    mintemperatureMin: Number;
    maxtemperatureMax: Number;
    maxtemperatureMin: Number;
    rainChance: Number;
    sunChance: Number;
    windDirection: String;
    wind: Number;
    mmRainMin: Number;
    mmRainMax: Number;
    iconurl: String;
      
  
  }
  
const weatherstationSchema: Schema = new Schema({
    stationname: {type: String },
    date: {type: String},
    weatherdescription: {type: String},
    temperature: {type: Number },
    feeltemperature: {type: Number },
    groundtemperature: {type: Number },
    humidity: {type: Number},
    rainFallLast24Hour: {type: Number },
    rainFallLastHour: {type: Number },

    shortterm: {type: String},
    id: {type: Number},
    startdate: {type: Number},
    enddate: {type: Number},
    forecast: {type:  String},
    fivedayforecast: {type: String},
    day: {type: Number},
    mintemperature: {type: Number},
    maxtemperature: {type: Number},
    mintemperatureMax: {type:  Number},
    mintemperatureMin: {type:  Number},
    maxtemperatureMax: {type:  Number},
    maxtemperatureMin: {type:  Number},
    rainChance: {type:  Number},
    sunChance: {type:  Number},
    windDirection: {type:  String},
    wind: {type:  Number},
    mmRainMin: {type:  Number},
    mmRainMax: {type:  Number},
    iconurl: {type:  String},
  });

export const weatherstation: Model<Iweatherstation> = model('weatherstation', weatherstationSchema);