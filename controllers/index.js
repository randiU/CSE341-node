const awesomeFunction = (req, res, next) => { 
    console.log('This is an awesome function!');
    next();
};

const twiceAsAwesomeFunction = (req, res) => {
    const name = req.query.name; // e.g., /?name=Randi
    res.send(`Insert your name into the query parameter, ${name || 'John Doe'}!`);
}

module.exports = {
    awesomeFunction,
    twiceAsAwesomeFunction
};