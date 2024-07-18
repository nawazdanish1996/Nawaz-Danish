import "../style/Contact.css";

const Contact = () => {

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <p><strong>Preseent Address:</strong> Thirumennahalli, Hegde Nagar, Banglore, Karnataka, 560064, India</p>
        <p><strong>Permanent Address:</strong> Mainnagar, Goalpokher, Uttar Dinajpur, West Bengal, 733210, India</p>
        <p><strong>Email:</strong> contact.to.nd@gmail.com</p>
        <p><strong>Phone:</strong> +91 83918 09802</p>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1619093712006!2d77.63445452439834!3d13.08892323982754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1996bc90a82d%3A0xeb781ea47e853365!2sThirumenahalli%20Cross!5e0!3m2!1sen!2sin!4v1721301754350!5m2!1sen!2sin"
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="Location Map"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;