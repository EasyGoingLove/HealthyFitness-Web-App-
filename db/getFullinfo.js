import db from '../db/db.js';

const getFullinf = async (req,res)=>{
    console.log(req.body);

    let fullinf = [];
    db.query('SELECT * FROM basicusers', await function(error,results) {
        if(error){console.log(error)}
        for (let i = 0; i < results.length; i++) {
            
            if(req.body.id == results[i].id ){
                fullinf.push(
                    "Emeil :"+ results[i].email ,"Име :" + results[i].name ,
                    "План :" + results[i].plan,"Дата на Раждане :" + results[i].dataOfBirth,
                    "Професия :" + results[i].proffesion , "Телефон :" + results[i].phoneNum,
                    "Искам да :" + results[i].iskamDa,"Също да :" + results[i].alsoTo,
                    "Мотивиран :" + results[i].skalaMotiviran,"Опит хран. режим"+results[i].opitHranRejim,
                    "Какъв хран режим :"+ results[i].kakuwHranRejim,"Алергии хран. :"+results[i].alergiiHran,
                    "Удобни дни :"+results[i].udobniDni,"Удобно време :"+ results[i].udobnoVreme,
                    "Колко спортувате :"+results[i].kolkoSportuwate,"Колко дни спорт. :"+results[i].kolkoDniSportuwate,
                    "Добавки в момента :"+results[i].priemaneDobawki ,"Колко часа сън :"+results[i].chasaSunImate,
                    "Опиши ежедневието си :"+results[i].opishiEjednevie ,"Процент мазнини :"+results[i].procentaMaznina,
                    "Килограми :"+results[i].kilogrami,"Височина :"+results[i].visochina,
                    "Талия :"+results[i].taliq ,"Ръце :"+results[i].ruce,
                    "Бедро :"+results[i].bedro ,"Гърда : "+results[i].gurda ,
                    "Ханш :"+results[i].hansh,"Наранявания :"+results[i].naranqvaniqBolki,
                    "Операции : "+results[i].imaliOperacii,"Болести :" + results[i].imaliBolesti
                );
                break;
            }
            
            
        } 
    });
        res.render('adminProfileLookup', {
            userinfo:fullinf,
         });
};

export default getFullinf;