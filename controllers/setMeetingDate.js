import db from '../db/db.js';

const setMeetingDate = (req,res)=>{
  console.log(req.body);
  const state = "Свободен";

  db.query(`INSERT INTO grafik (day ,time , date,state) VALUES (
      '${req.body.day}','${req.body.hour}'
      ,'${req.body.date}','${state}')`);
  res.redirect('/adminboard');
};

export default setMeetingDate;