export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="logo-utp">
            <div className="logo-utp-box">PARI</div>
            <div className="logo-utp-text footer-logo-text">
              Universidad
              <br />
              Jesús Luján
              <br />
              Carrión
            </div>
          </div>
          <p className="footer-desc">
            Formando profesionales líderes para transformar el futuro. Siempre empleables, siempre innovadores.
          </p>
        </div>

        <div className="footer-links">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="#">Carreras</a></li>
            <li><a href="#">Admisión</a></li>
            <li><a href="#">Modalidades de Estudio</a></li>
            <li><a href="#">Campus</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>📍 Av. Universitaria 1234, Lima</p>
          <p>📞 (01) 555-1234</p>
          <p>✉️ admision@pari.edu.pe</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Universidad PARI Jesús Luján Carrión. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
