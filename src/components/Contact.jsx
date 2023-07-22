  import { useEffect } from "react";

const Contact = ()=>{

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return (
      <>
        <div className="contact mt-5 ">
          <div className="contact-text d-flex align-items-center justify-content-center  mb-3 ">
            <h2 className="text-center animate__animated animate__fadeInLeft">
              Contact
            </h2>
          </div>
          <p className="text-center">
            <a href="/" style={{ textDecoration: "none", color: "gray" }}>
              Home
            </a>
            {">"} Contact
          </p>
          <div className="contact-menu">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.182370726!2d-0.10159865000000001!3d51.52864165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2z0JvQvtC90LTQvtC9LCDQktC10LvQuNC60L7QsdGA0LjRgtCw0L3QuNGP!5e0!3m2!1sru!2s!4v1675020266105!5m2!1sru!2s"
              width={"100%"}
              height={500}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="fmap"
            />
          </div>
        </div>
      </>
    );
}

export default Contact;