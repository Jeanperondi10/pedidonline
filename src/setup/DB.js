const mongoose = require("mongoose");

connect = () => {
    mongoose.connect("mongodb://localhost:27017/cadastro")
        .then(() => {
            console.log("OK")
        })
        .catch((err) => {
            console.log("Deu ruim! ", err);
        });
};

module.exports = {
    connect
};