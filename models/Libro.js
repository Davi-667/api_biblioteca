const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/libros", {
useUnifiedTopology: true,
useNewUrlParser: true,
});
const LibroSchema = new mongoose.Schema({
Titulo: String,
Autor: String,
Genero: String,
Anio: Number,
Editorial : String,
}, { collection: 'libros' });
const Libro = mongoose.model('Libro', LibroSchema);
module.exports = Libro;