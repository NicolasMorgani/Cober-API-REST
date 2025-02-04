Instrucciones para ejecutar el proyecto:

Clonar el Repositorio
git clone https://github.com/NicolasMorgani/Cober-API-REST.git

Tener Node js instalado corroborar node –v

Instalar Dependencias con npm install 

Ejecutar el servidor con npm run dev

Probar la API con Postman o similar (en mi caso tengo extencion en VSC “Thunder Client”)

Errores manejados: 
	Email duplicado: 400 { "error": "El email ya está registrado" }
	Datos faltantes: 400 { "error": "Se requieren nombre y email" }

 Detener el Servidor Ctrl + c

