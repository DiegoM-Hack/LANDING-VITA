import '../estilos/nosotros.css';


 const Nosotros = () => {
    return(
       <>
    

    
    <section class="seccion-certificados" id="certificados">
        <h2>Certificados que Ofrecemos</h2>
        <p>No solo te afrecemos aumentar tu conocimiento en el idioma de tu elección 
            tambien puedes obtener reconocimientos internacionales que validan tu dominio del idioma:</p>
        <ul>
            <li>Certificado de Cambridge (PET, FCE, CAE).</li>
            <li>TOEFL iBT para competencias académicas.</li>
            <li>IELTS para estudios y migración.</li>
            <li>Certificados internos avalados por instituciones reconocidas.</li>
        </ul>
        <div class="imagen-certificados">
            <a target="_blank" href="https://youtu.be/nDNZqQfAqjI"><img src="imagenes/Cert4.jpg" alt="Certificados"/></a>
        </div>
        <section class="carrusel">
            <img src="imagenes/cert1.png" alt="certificados"/>
            <img src="imagenes/cert2.jpg" alt="certificados"/>
            <img src="imagenes/cert3.jpg" alt="certificados"/>
            <img src="imagenes/cert5.png" alt=""/>
            
        </section>
    </section>

    
    <section class="seccion-galeria" id="galeria">
        <h2>Galería de Estudiantes</h2>
        <p>Explora algunos momentos destacados de nuestros estudiantes en clases y actividades:</p>
        <div class="galeria-imagenes">
            <img src="imagenes/estudiante1.jpg" alt="Estudiante 1"/>
            <img src="imagenes/estudiante2.jpg" alt="Estudiante 2"/>
            <img src="imagenes/estudiante3.jpg" alt="Estudiante 3"/>
            <img src="imagenes/estudiante4.jpg" alt="Estudiante 4"/>
        </div>
    </section>

    <footer>
        <p class="footer-bottom">Copyright © 2024 English-Language · All Rights Reserved</p>
        <div class="redes_sociales">
            <a href="https://wa.me/593979240408" target="_blank"><img class="WhatsApp" src="imagenes/WhatsApp.png" alt="WhatsApp"/></a>
            <a href="https://www.instagram.com/cec_epn/" target="_blank"><img class="Instagram" src="imagenes/Instagram-Logo.png" alt="Instagram"/></a>
            <a href="https://www.facebook.com/CEC.EPN.EC" target="_blank"><img class="Facebook" src="imagenes/facebock logo.png" alt="Facebook"/></a>
        </div>
    </footer>

    </>
    );
}