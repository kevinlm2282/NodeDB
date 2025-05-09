const mongoose = require('mongoose');
const connectDB = async () => {
 try {
 await mongoose.connect('mongodb://localhost:27017/testMongo', {
 useNewUrlParser: true,
 useUnifiedTopology: true
 });
 console.log('MongoDB conectado a la base de datos exitosamente');
 } catch (error) {
 console.error('Error de conexión a MongoDB:', error);
 process.exit(1);
 }
};
module.exports = connectDB;