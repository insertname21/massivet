import { Container, Row, Col } from "react-bootstrap";
import logo from "./images/MMVSLogoFooter.png";
import { InView, useInView} from 'react-intersection-observer';
import { LinkContainer } from "react-router-bootstrap";



function Footer() {




  
    return (

      <InView>
      {({ inView, ref, entry }) => (
      <div Class="footer">
      

  
  
          
        
        <Row>
          
        <div class="col">
          <img src={logo} width="200px" />
        </div>
        <div class="col">
          <h3>Contact:</h3>
          <p><a href="tel:541-636-1191">541-636-1191</a></p>
          <p>< a href="mailto:info@massievet.com">info@massievet.com</a></p>
          <p>< a href="https://www.google.com/maps/place/Massie+Mobile+Veterinary+Services/@42.271785,-122.8807619,17z/data=!3m1!4b1!4m5!3m4!1s0x54cf77093b2c0001:0xa9541755627cdee9!8m2!3d42.2716603!4d-122.8784969">4940 Pioneer Rd</a></p>
          <p>< a href="https://www.google.com/maps/place/Massie+Mobile+Veterinary+Services/@42.271785,-122.8807619,17z/data=!3m1!4b1!4m5!3m4!1s0x54cf77093b2c0001:0xa9541755627cdee9!8m2!3d42.2716603!4d-122.8784969">Medford, OR 97501</a></p>
        </div>
        <div class="col">
          <h3>Helpful Info:</h3>
          <p>
          <a href="https://drive.google.com/drive/folders/18cjycwx35A0RmAaWgONv-nqPq8PkteDl?usp=sharing">Press Kit</a>
          </p>
          <p>Terms & conditions</p>
          <p>copy right</p>
        </div>
        <div class="col">
          <h3>Follow us:</h3>
  
          <p>
            <a href="https://www.instagram.com/massievet/?hl=en">Instagram</a>
          </p>
  
          <p>
            <a href="https://www.facebook.com/massievet">Facebook</a>
          </p>
        </div>
      </Row>
      <Row>
          <div class="center">
            <p>© 2020 by Massie Mobile Veterinary Services, LLC.</p>
          </div>
        </Row>
      </div>
      )}
    </InView>
        
  
      
    );
    
    
  }
  
  

export default Footer;


