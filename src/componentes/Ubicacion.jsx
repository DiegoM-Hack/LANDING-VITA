function Ubicacion() {
    return (
      <section className="location" id="ubicacion">
        <div className="map-container">
          <h2>Encuéntranos aquí</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7908961834783!2d-78.49315912635882!3d-0.21243593539242644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a107e1cd44b%3A0x88a284f66939ed4!2sESCUELA%20POLIT%C3%89CNICA%20NACIONAL!5e0!3m2!1ses!2sec!4v1731363594495!5m2!1ses!2sec"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div>
          <iframe
            className="video1"
            width="453"
            height="400"
            src="https://www.youtube.com/embed/tgKVIFYbWgw"
            title="Cursos GRATIS para APRENDER INGLÉS"
          ></iframe>
        </div>
      </section>
    );
  }
  
  export default Ubicacion;
  