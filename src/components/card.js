import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import image from "../images/mockup.webp"

const CardExample = (props) => {
    return (
        <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
            <MDBCardImage className="img-fluid" src={image} alt=""  waves />
                <MDBCardBody>
                    <MDBCardTitle>{props.title}</MDBCardTitle>
                    <div className="card-text">{props.children}</div>
                    {/* <MDBBtn href="#">Click</MDBBtn> */}
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default CardExample;
