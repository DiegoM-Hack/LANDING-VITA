import '../estilos/Pago.css'


const Pago = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        {/* Logo */}
        <div className="logo">
          <img src="/imagenes/logoD.png" alt="Logo" />
        </div>
        {/* Navegación */}
        
      </header>

      {/* Contenido principal */}
      <div className="container py-5">
        <h1 className="forma">FORMAS DE PAGO</h1>
        <div className="row_g-4">
          {/* PayPal */}
          <div className="col-md-4">
            <div className="payment-card">
              <img src="/imagenes/paypal.png" alt="PayPal" />
              <h5>PayPal</h5>
              <p>
                Procese todos los pagos con PayPal: en línea, en tiendas o en
                dispositivos móviles.
              </p>
            </div>
          </div>
          {/* Skrill */}
          <div className="col-md-4">
            <div className="payment-card">
              <img src="/imagenes/skrill.avif" alt="Skrill" />
              <h5>Skrill</h5>
              <p>
                Reciba dinero desde casi 200 países y 40 divisas. Skrill es una
                forma segura de pago.
              </p>
            </div>
          </div>
          {/* Ingenico */}
          <div className="col-md-4">
            <div className="payment-card">
              <img src="/imagenes/ingenico.png" alt="Ingenico" />
              <h5>Ingenico</h5>
              <p>
                Acceda a más de 200 socios aceptados y 150 métodos de pago con
                una sola interfaz.
              </p>
            </div>
          </div>
          </div>
        <div className="row_g-4">

          {/* Redsys */}
          <div className="col-md-4">
            <div className="payment-card">
              <img src="/imagenes/redsys.png" alt="Redsys" />
              <h5>Redsys</h5>
              <p>
                Permita a sus clientes pagar con tarjetas de crédito
                internacionales de forma cómoda.
              </p>
            </div>
          </div>
          {/* Stripe */}
          <div className="col-md-4">
            <div className="payment-card">
              <img src="/imagenes/stripe.webp" alt="Stripe" />
              <h5>Stripe</h5>
              <p>
                Acepte una gran variedad de tarjetas de crédito y débito de
                forma rápida y sencilla.
              </p>
            </div>
          </div>
          {/* Predeterminado */}
          <div className="col-md-4">
            <div className="payment-card">
              <img src="/imagenes/pagos.avif" alt="Predeterminado" />
              <h5>Elije la forma para pagar</h5>
              <p>Todas estas formas de pagos son seguras</p>
            </div>
          </div>
          </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="redes_sociales">
          <a href="https://wa.me/593979240408" target="_blank" rel="noreferrer">
            <img
              className="WhatsApp"
              src="/imagenes/WhatsApp.png"
              alt="WhatsApp"
            />
          </a>

          <a
            href="https://www.instagram.com/cec_epn/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="Instagram"
              src="/imagenes/Instagram-Logo.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.facebook.com/CEC.EPN.EC"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="Facebook"
              src="/imagenes/facebock logo.png"
              alt="Facebook"
            />
          </a>
        </div>
        <div className="copyright">
          <p>&copy; Instituto de idiomas. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Pago;
