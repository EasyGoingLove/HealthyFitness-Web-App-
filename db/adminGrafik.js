import db from '../db/db.js';

const adminGrafik = async (req,res)=>{
   let day_grafik = {
       monday:[],
       tuesday:[],
       wednesday:[],
       thursday:[],
       friday:[],
       saturday:[],
       sunday:[],

       user_monday:[],
       user_tuesday:[],
       user_wednesday:[],
       user_thursday:[],
       user_friday:[],
       user_saturday:[],
       user_sunday:[]
   };

   let today = new Date().toLocaleDateString();

    db.query('SELECT * FROM grafik', await function(error,results) {
        if(error){console.log(error)}
        for (let i = 0; i < results.length; i++) {
            if (results[i].day == "Понеделник" &&new Date(today).getTime() < new Date(results[i].date).getTime()) {
                day_grafik.monday.push("Дата : "+results[i].date ,"Време : "+results[i].time,"Състояние : "+results[i].state ,results[i].userInfo,"."); 
                day_grafik.user_monday.push("ID:"+results[i].id,"Дата : "+results[i].date ,"Време : "+results[i].time,"Състояние : "+results[i].state,"."); 
            }
            if (results[i].day == "Вторник" &&new Date(today).getTime() < new Date(results[i].date).getTime()) {
                day_grafik.tuesday.push("Дата : "+results[i].date ,"Време : "+results[i].time,"Състояние : "+results[i].state ,results[i].userInfo,"."); 
                day_grafik.user_tuesday.push("ID:"+results[i].id,"Дата : "+results[i].date ,"Време : "+results[i].time,"Състояние : "+results[i].state,"."); 
            }
            if (results[i].day == "Сряда" &&new Date(today).getTime() < new Date(results[i].date).getTime()) {
                day_grafik.wednesday.push("Дата : "+results[i].date ,"Време : "+results[i].time,"Състояние : "+results[i].state ,results[i].userInfo,"."); 
                day_grafik.user_wednesday.push("ID:"+results[i].id,"Дата : "+results[i].date ,"Време : "+results[i].time,"Състояние : "+results[i].state,"."); 
            }
            if (results[i].day == "Четвъртък" &&new Date(today).getTime() < new Date(results[i].date).getTime()) {
                day_grafik.thursday.push("Дата : "+results[i].date ,"Време : "+results[i].time,"Състояние : "+results[i].state ,results[i].userInfo,"."); 
                day_grafik.user_thursday.push("ID:"+results[i].id,"Дата : "+results[i].date ,"Време : "+results[i].time,"Състояние : "+results[i].state,"."); 
            }
            if (results[i].day == "Петък" &&new Date(today).getTime() < new Date(results[i].date).getTime()) {
                day_grafik.friday.push("Дата : "+results[i].date ,"Време : "+results[i].time,"Състояние : "+results[i].state ,results[i].userInfo,".");
                day_grafik.user_friday.push("ID:"+results[i].id,"Дата : "+results[i].date ,"Време : "+results[i].time,"Състояние : "+results[i].state,".");  
            }
            if (results[i].day == "Събота" &&new Date(today).getTime() < new Date(results[i].date).getTime()) {
                day_grafik.saturday.push("Дата : "+results[i].date ,"Време : "+results[i].time,"Състояние : "+results[i].state ,results[i].userInfo,".");
                day_grafik.user_saturday.push("ID:"+results[i].id,"Дата : "+results[i].date ,"Време : "+results[i].time,"Състояние : "+results[i].state,".");  
            }
            if (results[i].day == "Неделя" &&new Date(today).getTime() < new Date(results[i].date).getTime()) {
                day_grafik.sunday.push("Дата : "+results[i].date ,"Време : "+results[i].time,"Състояние : "+results[i].state ,results[i].userInfo,".");
                day_grafik.user_sunday.push("ID:"+results[i].id,"Дата : "+results[i].date ,"Време : "+results[i].time,"Състояние : "+results[i].state,".");  
            }
        
        }
 
    });
   return day_grafik;
};

export default adminGrafik;