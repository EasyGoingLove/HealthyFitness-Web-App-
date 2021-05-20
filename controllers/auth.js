import db from '../db/db.js';
import bcrypt from 'bcryptjs';


const register = (req,res) => {
  //console.log(req.body);
  const email = req.body.email;
  const plan = req.body.plan;
  const name = req.body.name;
  const pass = req.body.pass;            
  const passSec = req.body.passSec;
  const dataOfBirth = req.body.dataOfBirth;
  const proffesion = req.body.proffesion;
  const phoneNum =  req.body.phoneNum;
  const iskamDa = JSON.stringify(req.body.iskamDa);
  const alsoTo = JSON.stringify(req.body.alsoTo);
  const skalaMotiviran = parseInt(req.body.skalaMotiviran);
  const opitHranRejim = req.body.opitHranRejim;
  const kakuwHranRejim = req.body.kakuwHranRejim;
  const alergiiHran = req.body.alergiiHran;
  const udobniDni = JSON.stringify(req.body.udobniDni);
  const udobnoVreme = req.body.udobnoVreme;
  const kolkoSportuwate = req.body.kolkoSportuwate;
  const kolkoDniSportuwate = JSON.stringify(req.body.kolkoDniSportuwate);
  const priemaneDobawki = req.body.priemaneDobawki;
  const chasaSunImate = req.body.chasaSunImate;
  const opishiEjednevie= req.body.opishiEjednevie;
  const procentaMaznina = req.body.procentaMaznina;
  const kilogrami = req.body.kilogrami;
  const visochina = req.body.visochina;
  const taliq  =req.body.taliq;
  const ruce = req.body.ruce;
  const bedro = req.body.bedro;
  const gurda = req.body.gurda;
  const hansh = req.body.hansh;
  const naranqvaniqBolki= req.body.naranqvaniqBolki;
  const imaliOperacii = req.body.imaliOperacii;
  const imaliBolesti = req.body.imaliBolesti;
  

    db.query('SELECT email FROM basicusers WHERE email = ?', [email], async (error,results)=>{
        if(error){console.log(error)}
       
         if(Object.keys(results).length !== 0 && results.constructor !== Object){
            return res.render('register',{
                 message: 'Вече има потребител с този email'
            });
        }
         else if (pass !== passSec){
            return res.render('register',{
                 message: 'Паролите не съвпадат'
            });
        }
        else if (email === undefined || email === null || email ==="" ||email ===NaN){
            return res.render('register',{
                 message: 'Не сте въвели Еmail'
            });
        }
        else if (pass === undefined || pass === null || pass ==="" ||pass ===NaN){
            return res.render('register',{
                 message: 'Не сте въвели Парола'
            });
        }
        else if (passSec === undefined || passSec === null || passSec ==="" ||passSec ===NaN){
            return res.render('register',{
                 message: 'Не сте въвели Повторна Парола'
            });
        }
         else if (name === undefined || name === null || name ==="" ||name ===NaN){
            return res.render('register',{
                 message: 'Не сте въвели Име и Фамилия'
            });
        }
        else if ( dataOfBirth === undefined ||  dataOfBirth === null ||  dataOfBirth ==="" || dataOfBirth ===NaN){
            return res.render('register',{
                 message: 'Не сте въвели Дата на Раждане'
            });
        }
        else if ( proffesion === undefined ||  proffesion === null ||  proffesion ==="" || proffesion ===NaN){
            return res.render('register',{
                 message: 'Не сте въвели Професия'
            });
        }
        else if ( phoneNum === undefined ||  phoneNum === null ||  phoneNum ==="" || phoneNum ===NaN){
            return res.render('register',{
                 message: 'Не сте въвели Телефонен номер'
            });
        }
        else if ( iskamDa === undefined ||  iskamDa === null ||  iskamDa ==="" || iskamDa ===NaN){
            return res.render('register',{
                 message: 'Полето "Искам да..." е празно'
            });
        }
        else if ( alsoTo === undefined ||  alsoTo === null ||  alsoTo ==="" || alsoTo ===NaN){
            return res.render('register',{
                 message: 'Полето "Също да..." е празно'
            });
        }
        else if ( skalaMotiviran === undefined ||  skalaMotiviran === null ||  skalaMotiviran ==="" || skalaMotiviran ===NaN){
            return res.render('register',{
                 message: 'Полето "На скала от 1 до 5..." е празно'
            });
        }
        else if ( opitHranRejim === undefined ||  opitHranRejim === null ||  opitHranRejim ==="" || opitHranRejim ===NaN){
            return res.render('register',{
                 message: '"Имате ли предишен опит..." е празно'
            });
        }
        else if ( kakuwHranRejim === undefined ||  kakuwHranRejim === null ||  kakuwHranRejim ==="" || kakuwHranRejim ===NaN){
            return res.render('register',{
                 message: '"Кога, колко време и какъв хранителен план..." е празно'
            });
        }
        else if ( alergiiHran === undefined ||  alergiiHran === null ||  alergiiHran ==="" || alergiiHran ===NaN){
            return res.render('register',{
                 message: '"Има ли храни, които не обичате, имате алергии..." е празно'
            });
        }
        else if ( udobniDni === undefined ||  udobniDni === null ||  udobniDni ==="" || udobniDni ===NaN){
            return res.render('register',{
                 message: '"Кои дни от седмицата са удобни..." е празно'
            });
        }
        else if ( udobnoVreme === undefined ||  udobnoVreme === null ||  udobnoVreme ==="" || udobnoVreme ===NaN){
            return res.render('register',{
                 message: '"По кое време през деня ще Ви..." е празно'
            });
        }
        else if ( kolkoSportuwate === undefined ||  kolkoSportuwate === null ||  kolkoSportuwate ==="" || kolkoSportuwate ===NaN){
            return res.render('register',{
                 message: '"Какво спортувате в момента ..." е празно'
            });
        }
        else if ( kolkoSportuwate === undefined ||  kolkoSportuwate === null ||  kolkoSportuwate ==="" || kolkoSportuwate ===NaN){
            return res.render('register',{
                 message: '"Какво спортувате в момента ..." е празно'
            });
        }
        else if ( kolkoDniSportuwate === undefined ||  kolkoDniSportuwate === null ||  kolkoDniSportuwate ==="" || kolkoDniSportuwate ===NaN){
            return res.render('register',{
                 message: '"По колко дни тренирате в момента ..." е празно'
            });
        }
        else if ( priemaneDobawki === undefined ||  priemaneDobawki === null ||  priemaneDobawki ==="" || priemaneDobawki ===NaN){
            return res.render('register',{
                 message: '"Какви добавки приемате в момента ..." е празно'
            });
        }
        else if ( chasaSunImate === undefined ||  chasaSunImate === null ||  chasaSunImate ==="" || chasaSunImate ===NaN){
            return res.render('register',{
                 message: '"Колко часа сън имате?" е празно'
            });
        }
        else if ( opishiEjednevie === undefined ||  opishiEjednevie === null ||  opishiEjednevie ==="" || opishiEjednevie ===NaN){
            return res.render('register',{
                 message: '"Как протича вашето ежедневие?" е празно'
            });
        }
        else if ( procentaMaznina === undefined ||  procentaMaznina === null ||  procentaMaznina ==="" || procentaMaznina ===NaN){
            return res.render('register',{
                 message: '"Колко процента подкожни мазнини имате..." е празно'
            });
        }
        else if (  kilogrami === undefined ||   kilogrami === null ||   kilogrami ==="" ||  kilogrami ===NaN){
            return res.render('register',{
                 message: '"Колко килограма сте?" е празно'
            });
        }
        else if (  visochina === undefined ||   visochina === null ||   visochina ==="" ||  visochina ===NaN){
            return res.render('register',{
                 message: '"Колко сте високи (см)?" е празно'
            });
        }
        else if (  taliq === undefined ||   taliq === null ||   taliq ==="" ||  taliq ===NaN){
            return res.render('register',{
                 message: '"Талия(см)?" е празно'
            });
        }
        else if (  ruce === undefined ||   ruce === null ||   ruce ==="" ||  ruce ===NaN){
            return res.render('register',{
                 message: '"Ръце(см)?" е празно'
            });
        }
        else if (   bedro === undefined ||    bedro === null ||    bedro ==="" ||   bedro ===NaN){
            return res.render('register',{
                 message: '"Бедро(см)?" е празно'
            });
        }
        else if (   gurda === undefined ||    gurda === null ||    gurda ==="" ||   gurda ===NaN){
            return res.render('register',{
                 message: '"Гръдна(см)?" е празно'
            });
        }
        else if (   hansh === undefined ||    hansh === null ||    hansh ==="" ||   hansh ===NaN){
            return res.render('register',{
                 message: '"Ханш - за жени (см)? (Ако сте Мъж напишете - 0)" е празно'
            });
        }
        else if (   naranqvaniqBolki === undefined ||    naranqvaniqBolki === null ||   naranqvaniqBolki ==="" ||   naranqvaniqBolki ===NaN){
            return res.render('register',{
                 message: '"Имали ли сте някога наранявания или болки в ..." е празно'
            });
        }
        else if (   imaliOperacii === undefined ||    imaliOperacii === null ||   imaliOperacii ==="" ||   imaliOperacii ===NaN){
            return res.render('register',{
                 message: '"Били ли сте някога подлагани на хирургическа операция ..." е празно'
            });
        }
        else if (   imaliBolesti === undefined ||    imaliBolesti === null ||   imaliBolesti ==="" ||   imaliBolesti ===NaN){
            return res.render('register',{
                 message: '"Диагностицирали ли сте някога хронично заболяване ..." е празно'
            });
        }






        let hashedPass = await bcrypt.hash(pass, 8);
        
        db.query('INSERT INTO basicusers SET ?', {
            email:email , name:name , password:hashedPass, plan:plan,
            dataOfBirth:dataOfBirth, proffesion:proffesion ,phoneNum:phoneNum,
            iskamDa:iskamDa,alsoTo:alsoTo,skalaMotiviran:skalaMotiviran,
            opitHranRejim:opitHranRejim, kakuwHranRejim:kakuwHranRejim,
            alergiiHran:alergiiHran,udobniDni:udobniDni, udobnoVreme:udobnoVreme,
            kolkoSportuwate:kolkoSportuwate,kolkoDniSportuwate:kolkoDniSportuwate,
            priemaneDobawki:priemaneDobawki ,chasaSunImate:chasaSunImate,
            opishiEjednevie:opishiEjednevie ,procentaMaznina:procentaMaznina,
            kilogrami:kilogrami,visochina:visochina,taliq:taliq ,ruce:ruce,
            bedro:bedro ,gurda:gurda ,hansh:hansh,naranqvaniqBolki:naranqvaniqBolki,
            imaliOperacii:imaliOperacii,imaliBolesti:imaliBolesti

        }, (error,results)=>{
            if(error){console.log(error)}
            else{console.log("u did it!")}
        })

    });
}

export default register;



// With destructuring (seems to give an error : (TypeError: Cannot destructure property 'name' of 'req.bоdy' as it is undefined. ))
// const {
//     name, pass , passSec , dataOfBirth, proffesion ,phoneNum ,
//    iskamDa,alsoTo,skalaMotiviram,opitHranRejim, kakuwHranRejim ,alergiiHran ,
//    udobniDni, udobnoVreme ,kolkoSportuwate,kolkoDniSportuwate,priemaneDobawki ,chasaSunImate ,opishiEjednevie ,
//    procentaMaznina,kilogrami ,visochina,taliq ,ruce ,bedro ,gurda ,hansh ,naranqvaniqBolki ,imaliOperacii ,imaliBolesti
//   } =  req.bоdy;