require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./database");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas

// 🟢 Obtener todos los usuarios
app.get("/users", (req, res) => {
    db.all("SELECT * FROM users", [], (err, rows) => {
        if (err) {
            console.error("❌ Error al obtener usuarios:", err.message);
            return res.status(500).json({ error: "Error interno del servidor" });
        }
        res.json(rows);
    });
});

// 🔵 Crear un nuevo usuario
app.post("/users", (req, res) => {
    const { nombre, email } = req.body;

    // Validar que los campos estén presentes
    if (!nombre || !email) {
        return res.status(400).json({ error: "Se requieren nombre y email" });
    }

    // Insertar en la base de datos
    const query = "INSERT INTO users (nombre, email) VALUES (?, ?)";
    db.run(query, [nombre, email], function (err) {
        if (err) {
            if (err.message.includes("UNIQUE constraint failed")) {
                return res.status(400).json({ error: "El email ya está registrado" });
            }
            console.error("❌ Error al insertar usuario:", err.message);
            return res.status(500).json({ error: "Error interno del servidor" });
        }
        res.status(201).json({ id: this.lastID, nombre, email });
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
