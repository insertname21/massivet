import React from "react";
import { Card,Button,Col,Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSpring, animated,config } from 'react-spring'

function Equine_Services() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: config.molasses,})
  return (
    <animated.div style={props}>

    <div class="article" >
        <h1 >Equine Services</h1>

    <Row>
      {/* visit and apointment types */}
    <Card   style={{ width: '18rem', padding: '0px', marginTop: '5px', marginBottom: '5px', }} className="rounded">
    <Card.Img variant="top" src="/images/LamenessInvestigations.jpg" style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title>
      <h3>Visit and Appointment Types</h3>
    </Card.Title>
    <Card.Text>
    Routine visits and wellness exams are a large part of providing preventative care for your animal(s). Dr. Massive offers a variety of examination options in and out of the clinic to fit your and your animals’ lifestyle needs.
    </Card.Text>
    <div class="text">
                
                <Link to={`/Equine_Services/AppointmentsTypes`}>More Info</Link>
              </div>
    </Card.Body>
  </Card>
  {/* Wellness Exams */}
  <Card   style={{ width: '18rem', padding: '0px', marginTop: '5px', marginBottom: '5px', }} className="rounded">
    <Card.Img variant="top" src="/images/LamenessInvestigations.jpg" style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title>
      <h3>Wellness Exams</h3>
    </Card.Title>
    <Card.Text>
    Wellness exams are one of the most important aspects of ensuring preventative care. For many, that requires yearly, or even quarterly examinations. That’s why we’ve made it our priority to offer affordable options for all of our clientele.     </Card.Text>
    <div class="text">
                
                <Link to={`/Equine_Services/WellnessExams`}>More Info</Link>
              </div>
    </Card.Body>
  </Card>
  
  {/* Pre-Purchase Exams */}
  <Card   style={{ width: '18rem', padding: '0px', marginTop: '5px', marginBottom: '5px', }} className="rounded">
    <Card.Img variant="top" src="/images/LamenessInvestigations.jpg" style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title>
      <h3>Pre-Purchase Exams</h3>
    </Card.Title>
    <Card.Text>
    Dr. Massie regularly performs pre-purchase exams for buyers who are looking for a mount that meets their recreational or performance goals. 
 </Card.Text>
    <div class="text">
                
                <Link to={`/Equine_Services/PrePurchaseExams`}>More Info</Link>
              </div>
    </Card.Body>
  </Card>
{/* Equine First-Aid Clinics */}
<Card   style={{ width: '18rem', padding: '0px', marginTop: '5px', marginBottom: '5px', }} className="rounded">
    <Card.Img variant="top" src="/images/LamenessInvestigations.jpg" style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title>
      <h3>Equine First-Aid Clinics</h3>
    </Card.Title>
    <Card.Text>
    Equine first-aid clinics are workshops designed to empower you with the knowledge to assess your horse’s wellbeing and apply temporary first aid while you wait for veterinary assistance. 
 </Card.Text>
    <div class="text">
                
                <Link to={`/Equine_Services/LamenessInvestigation`}>More Info</Link>
              </div>
    </Card.Body>
  </Card>
{/* Behavior Consultations*/}
<Card   style={{ width: '18rem', padding: '0px', marginTop: '5px', marginBottom: '5px', }} className="rounded">
    <Card.Img variant="top" src="/images/LamenessInvestigations.jpg" style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title>
      <h3>Behavior Consultations</h3>
    </Card.Title>
    <Card.Text>
    As we know, the cause of irregular behavior is often misdiagnosed when its origin is actually pain. We offer behavioral consultations to rule out whether it’s ‘pain or the brain’!

 </Card.Text>
    <div class="text">
                
                <Link to={`/Equine_Services/LamenessInvestigation`}>More Info</Link>
              </div>
    </Card.Body>
  </Card>

  {/* Podiatry*/}
<Card   style={{ width: '18rem', padding: '0px', marginTop: '5px', marginBottom: '5px', }} className="rounded">
    <Card.Img variant="top" src="/images/LamenessInvestigations.jpg" style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title>
      <h3>Podiatry</h3>
    </Card.Title>
    <Card.Text>
    We take the phrase “no horse, no hoof” very seriously and work with therapeutic farriers to develop personalized hoof healthcare plans for your horse(s). Using state-of-the-art technology, we work hard to ensure that the maxim “do no harm” is followed.


 </Card.Text>
    <div class="text">
                
                <Link to={`/Equine_Services/LamenessInvestigation`}>More Info</Link>
              </div>
    </Card.Body>
  </Card>
    
    {/* Castration*/}
<Card   style={{ width: '18rem', padding: '0px', marginTop: '5px', marginBottom: '5px', }} className="rounded">
    <Card.Img variant="top" src="/images/LamenessInvestigations.jpg" style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title>
      <h3>Castration</h3>
    </Card.Title>
    <Card.Text>
    Castration is a routine procedure most commonly performed in young colts to prevent unwanted breeding and aid management. At Massie Mobile Veterinary Services, we use the open-castration method.



 </Card.Text>
    <div class="text">
                
                <Link to={`/Equine_Services/LamenessInvestigation`}>More Info</Link>
              </div>
    </Card.Body>
  </Card>

    {/* Natural Dentistry*/}
    <Card   style={{ width: '18rem', padding: '0px', marginTop: '5px', marginBottom: '5px', }} className="rounded">
    <Card.Img variant="top" src="/images/LamenessInvestigations.jpg" style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title>
      <h3>Natural Dentistry</h3>
    </Card.Title>
    <Card.Text>
    Routine dental examinations are an essential part of your horse’s health care, but are unfortunately often overlooked. However, a horse’s teeth are one of the best indicators of early disease and by undertaking regular examinations, severe, painful dental-related problems can be minimised or prevented.
 </Card.Text>
    <div class="text">
                
                <Link to={`/Equine_Services/LamenessInvestigation`}>More Info</Link>
              </div>
    </Card.Body>
  </Card>

{/* Worming Program*/}
<Card   style={{ width: '18rem', padding: '0px', marginTop: '5px', marginBottom: '5px', }} className="rounded">
    <Card.Img variant="top" src="/images/wormtest.jpeg" style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title>
      <h3>Worming Program</h3>
    </Card.Title>
    <Card.Text>
    Worming is a regular part of animal care. But at Massie Mobile Veterinary Services, we focus our program around egg-count to prevent unnecessary deworming.
    </Card.Text>
    <div class="text">
                
                <Link to={`/Equine_Services/LamenessInvestigation`}>More Info</Link>
              </div>
    </Card.Body>
  </Card>
  
  {/* Lameness Investigations*/}
<Card   style={{ width: '18rem', padding: '0px', marginTop: '5px', marginBottom: '5px', }} className="rounded">
    <Card.Img variant="top" src="/images/wormtest.jpeg" style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title>
      <h3>Lameness Investigations</h3>
    </Card.Title>
    <Card.Text>
    Lameness is one of the most common issues horse owners will encounter. Lameness can vary from severe cases associated with fractures of hoof abscesses to subtle hoof issues which can cause pain and a decrease in overall performance. 
    </Card.Text>
    <div class="text">
                
                <Link to={`/Equine_Services/LamenessInvestigation`}>More Info</Link>
              </div>
    </Card.Body>
  </Card>
  
  {/* Internal Medicine*/}
  <Card   style={{ width: '18rem', padding: '0px', marginTop: '5px', marginBottom: '5px', }} className="rounded">
    <Card.Img variant="top" src="/images/wormtest.jpeg" style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title>
      <h3>Internal Medicine</h3>
    </Card.Title>
    <Card.Text>
    Cases that might require extra internal medicine services include, but are not limited to, weight loss, respiratory issues, colic, ulcers, anaemia, liver problems, and skin and eye issues. 
 

    </Card.Text>
    <div class="text">
                
                <Link to={`/Equine_Services/LamenessInvestigation`}>More Info</Link>
              </div>
    </Card.Body>
  </Card>

  {/* Body Work*/}
  <Card   style={{ width: '18rem', padding: '0px', marginTop: '5px', marginBottom: '5px', }} className="rounded">
    <Card.Img variant="top" src="/images/wormtest.jpeg" style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title>
      <h3>Body Work</h3>
    </Card.Title>
    <Card.Text>
    Bodywork is used for horses that are sore, tight or stiff from either normal workload or underlying causes and who may be exhibiting discomfort or irritability. Our bodywork practices include non-invasive massage therapy, trigger point therapy, spinal manipulation, and musculoskeletal, soft tissue, and cranial sacral adjustments. 

    </Card.Text>
    <div class="text">
                
                <Link to={`/Equine_Services/LamenessInvestigation`}>More Info</Link>
              </div>
    </Card.Body>
  </Card>
  

  {/* Microchipping*/}
  <Card   style={{ width: '18rem', padding: '0px', marginTop: '5px', marginBottom: '5px', }} className="rounded">
    <Card.Img variant="top" src="/images/wormtest.jpeg" style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title>
      <h3>Microchipping</h3>
    </Card.Title>
    <Card.Text>
    Thousands of pets and livestock go missing each year — that includes horses. Microchips are cost-effective, electronic devices the size of a grain of rice that help combat this problem and can improve the health and welfare of your horse. In Southern Oregon and Northern California, they can be especially helpful during fire season when your horse gets loose

    </Card.Text>
    <div class="text">
                
                <Link to={`/Equine_Services/LamenessInvestigation`}>More Info</Link>
              </div>
    </Card.Body>
  </Card>
  




  <Card   style={{ width: '18rem', padding: '0px', marginTop: '5px', marginBottom: '5px', }} className="rounded">
    <Card.Img variant="top" src="/images/LamenessInvestigations.jpg" style={{ height: '180px' }}/>
    <Card.Body>
    <Card.Title>
      <h3>End of Life Care</h3>
    </Card.Title>
    <Card.Text>
    Euthanasia is a difficult subject to consider, but our aim is to help support and provide dignified end of life care for your animal. With this in mind, we’ve put together helpful tips and resources for when it comes time to make the decision.
    </Card.Text>
    <div class="text">
                
                <Link to={`/Equine_Services/LamenessInvestigation`}>More Info</Link>
              </div>
    </Card.Body>
  </Card>
  

  



  
  </Row>
  
  </div>

  </animated.div>
  );
}

export default Equine_Services;