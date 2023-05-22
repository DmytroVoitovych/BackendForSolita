

const funcGetFilteredControl = (list) =>  list.sort((a,b)=> +a.Duration > +b.Duration?1:-1);
    
     


module.exports = funcGetFilteredControl;