
module.exports = function midd (req, res, next) 
{ 
   
const hours = new Date().getHours()
const dayofweek = new Date().getDay()
   
    
  
  
if (hours >= 09 && hours <= 17 && dayofweek >=0 && dayofweek <=5)
 {
    console.log('open')
    next()
  } else {
    console.log(' close')
    res.send('<h1> We are Closed </h1>')
  }
   
}
