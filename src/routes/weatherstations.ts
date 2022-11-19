import express from "express";
import { weatherstation } from "src/schemas/weatherstation";

const router = express.Router();

router.get('/:stationname/:startdate', async (req,res,next)=>{
    try{
        
        let date = new Date(req.params.startdate);
        
        let PeriodInDays = 7; 
        
        let dates: any[] = [];
        for(let i = 0; i <= PeriodInDays; i++){
            dates.push(date.toLocaleDateString("en-CA"));
            date.setDate(date.getDate() + 1);
        }

        const stations = await weatherstation.find({date: {$in: dates}, stationname: req.params.stationname});
        res.json({Stations: stations});
    }catch(err){
        next(err);
    }
})

// Export
export default router;