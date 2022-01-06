import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated,config } from 'react-spring'

function Castration() {
  const props1 = useSpring({   to: {x:0, opacity: 1 },
    from: {x:-500, opacity: 0 },
     config: config.molasses,})
     const props2 = useSpring({   to: {x:0, opacity: 1 },
      from: {x:-10, opacity: 0 },
       config: config.molasses,})
  return (
    <animated.div style={props1}>
    <div class="article d-none d-xl-block" >
    <h1> Castration:</h1>
      <Row >
      
      <Col>
      
      <p>Castration is a routine procedure most commonly performed in young colts to prevent unwanted breeding and aid management. At Massie Mobile Veterinary Services, we use the open-castration method.
</p>
        <p>The open-castration method is a surgical procedure which requires general anesthetic. This method greatly reduces the risk of hemorrhage, because it allows the incision to drain normally.


</p>
          <h3>Aftercare:</h3>
          <ol>

  <li><em>Exercise:</em> Gentle exercise should be encouraged to promote drainage and prevent swelling of the scrotum. The best method would be turning the horse/pony out into a small dry paddock where he can move around quietly for at least a week. If your horse/pony is stabled, then he should be walked out at least 3-4 times daily for 10-15 minutes to decrease swelling and improve drainage.

</li>
  <li><em>Wound care:</em> The small wound will be left open to allow drainage. Blood dripping from the wound is normal, and may continue for several hours after surgery. The legs should be washed as necessary, but the wounds themselves should not need further attention. If blood streams from the wound or there is bleeding for more than 24 hours, please contact us at 541-636-1191. The scrotum may remain swollen for up to a week, which is normal, but the swelling should start to decrease over time.

</li>
<li><em>Medication:</em> All horses will receive antibiotics for pain relief before and after the procedure. If necessary, we may prescribe a longer dose of antibiotics, but using NSAIDs are often the best choice for at-home treatment. 

</li>

</ol> 
<p>We can also work with other equines such as donkeys and mules. </p>
<p>To schedule a podiatry appointment for your horse, call or text 541-636-1191 today!
</p>

<h3>Please contact us if you have any concerns, especially:
</h3>
          <ul>

  <li>If any tissue is seen hanging out of the scrotum
</li>

<li>If the horse refuses to eat or becomes depressed
</li>
<li>If blood is leaking quickly or for longer than 24 hours
</li>
<li>If any other discharge (such as pus) occurs at any stage
</li>
<li>If swelling fails to resolve within 1-2 weeks
</li>


</ul> 
<p><mark><small>Note: Please let us know if your horse has not been vaccinated for tetanus prior to the operation. He may need to be given temporary cover, if so. It is also helpful if you bring your horse’s papers to the appointment, so that they can be modified to confirm that he has been gelded. </small></mark></p>

<p>To schedule a castration appointment, please text or call us at 541-636-1191. </p>
</Col>
      
 
      
      </Row>
 
      
    </div>
    <div class="article d-xl-none" >
     
    <h1 >Podiatry:</h1>

      <p> We take the phrase “no horse, no hoof” very seriously and work with therapeutic farriers to develop personalized hoof healthcare plans for your horse(s). Using state-of-the-art technology, we work hard to ensure that the maxim “do no harm” is followed.
</p>
        <p>Podiatry is somewhat different to traditional farriery, because it offers owners tools and management practices that they wouldn’t receive otherwise.We work closely with owners to achieve the healthiest hooves possible for their horse and are dedicated to educating owners so that they can understand how different factors, like riding and biomechanics, influence the health of the hoof.

</p>
          <p>Our hoof care system is based on a model which takes a complex structure (the equine foot) and breaks it down into a number of key parts that enables us to assess the health of your horses feet and recommend ways of improving that health. Using diagnostics and thermal imaging, we will work with you to develop a hoof care routine which works for your schedule and capabilities and will improve the overall longevity of your horse’s hooves. 

</p>
<p>We can also work with other equines such as donkeys and mules. </p>
<p>To schedule a podiatry appointment for your horse, call or text 541-636-1191 today!
</p>
      
                    
      <iframe 
        height="100%"

        
        

        src="https://www.youtube.com/embed/M98VPRpRBDw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen=""
      ></iframe>
      
      
      
   

 
    </div>
</animated.div>
    
  );
}

export default Castration;
