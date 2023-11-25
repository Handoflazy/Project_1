const db = require('./connect.js');

const fetchData = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM Products', (error, results, fields) => {
            if (error) {
                console.error('Query error: ' + error.stack);
                reject(error);
                return;
            }
            resolve(results);
        });
    });
};

const servedDataFnc = async () => {
    try {
        const data = await fetchData();
        return data;
    } catch (error) {
        console.error('Error: ' + error.stack);
        return null;
    } /*finally {
        // Close the connection to the database
        db.end((err) => {
            if (err) {
                console.error('Error connection: ' + err.stack);
                return;
            }
            console.log('Closed the connection successfully!');
        });
    }*/
};

module.exports = servedDataFnc;