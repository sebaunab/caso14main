// Contact.js
import React from 'react';
import '../App.css'; // Importa el CSS si es necesario

function Contact() {
    return (
        <section className="content contact" id="contacto">
            <h2 className="title">Contacto</h2>
            <p>+569384343434</p>
            <figure className="logok">
                <img src="img/Logo_EspacioAdmin.png" alt="Logo EspacioAdmin" style={{ maxWidth: '200px', height: '220px', width: '100%' }} />
            </figure>
        </section>
    );
}

export default Contact;