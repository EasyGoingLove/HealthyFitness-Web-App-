import db from '../db/db.js';

const news_getter = async() => {
    let news = [];
   
    db.query('SELECT * FROM news', await function(error,results) {
        if(error){console.log(error)}
        let parsedResult = 0;
        

        for (let i = results.length-1; i >= 0; i--) {
            console.log(results[i].news);
            news.push(results[i].news);
            
        }  
    });
   return news;
};
export default news_getter;