import React from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 

const MenuAdmin = () => {

    const navigate = useNavigate();

    const handleLogout = async () => {
        const token = localStorage.getItem('token'); // Suponiendo que el token está en localStorage

        if (!token) {
            console.error("No hay token disponible");
            return;
        }

        try {
            // Enviar el token al servidor para hacer logout
            const response = await axios.post('http://localhost:8080/api/v1/auth/logout', {
                token: token
            });

            console.log('Respuesta del logout:', response.data);

            // Limpiar el almacenamiento local
            localStorage.removeItem('token'); // Eliminar el token del localStorage
            // Redirigir al usuario al inicio de sesión
            navigate('/login'); // Redirige a la página de login
        } catch (error) {
            console.error('Error en el cierre de sesión:', error);
            // Puedes mostrar un mensaje de error o manejarlo de otra manera
        }
    }

    return (
        <div className="container mt-5">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <a className="navbar-brand" href="/">Administración</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/Home">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Show/Categorias">Administrar Categorías</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Show/Libros">Administrar Libros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Show/Prestamos">Administrar Prestamos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Show/Reservas">Administrar Reservas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Show/Usuarios">Administrar Usuarios</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-danger" onClick={handleLogout}>Cerrar Sesión</button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Jumbotron */}
            <div className="jumbotron">
                <h1 className="display-4">Menú de Administración</h1>
                <p className="lead">Has iniciado sesión y ahora puedes acceder a las funciones administrativas.</p>
            </div>
        </div>
    );
}

export default MenuAdmin;
