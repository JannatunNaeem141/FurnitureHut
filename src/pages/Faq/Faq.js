import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Faq.css';

const Faq = () => {
    return (
        <Accordion defaultActiveKey="0" className='faq-section'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Do you have any environment policy in place?</Accordion.Header>
                <Accordion.Body>
                    Being a responsible corporate citizen, FurnitureHut always puts ‘environment’ on top of its priority list. We apply the kind of UV Lacquer Finish that is environment-sensible and doesn’t contain formaldehyde and hazardous elements.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How your furniture items are technically distinct from that of others?</Accordion.Header>
                <Accordion.Body>
                    Apart from using hand-picked raw materials, our furniture items are absolutely nail-free and made of basing on time-honored manufacturing techniques like tongue and groove, finger joints, mortise and tenon, dovetail joints.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>What’s your Return Policy?</Accordion.Header>
                <Accordion.Body>
                    Furniture items in good condition can be returned in 3 days of purchase. This policy is in place to show respect to the notion that a customer may change his/her mind within a certain period of time and that shouldn’t cost him/her a fortune. Only a 10% service charge will be applied on the total amount of purchase in this case. It is not applicable for Fabric product or upholstered product.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Do you deliver at customer’s address?</Accordion.Header>
                <Accordion.Body>
                    Within our network, we deliver your purchased items in 48 hours. Road situations or other unavoidable reasons may affect though. A delivery charge will apply.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Do you offer any warranty?</Accordion.Header>
                <Accordion.Body>
                    We offer 1 year free of cost after sales service warranty which covers any damages caused due to production defects.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Faq;