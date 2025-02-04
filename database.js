const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database.sqlite", (err) => {
    if (err) {
        console.error("❌ Error al conectar con SQLite:", err.message);
    } else {
        console.log("📦 Conectado a la base de datos SQLite");
    }
});

// Crear la tabla si no existe
db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL
    )
`);

module.exports = db;
