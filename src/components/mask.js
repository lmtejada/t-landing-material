import React from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from "mdbreact";

const Intro = ({ children }) => {
    return (
        <MDBContainer style={{marginTop: "25vh", marginBottom: "40vh"}}>
            <MDBRow >
                <MDBCol md="12" className="white-text text-center">
                    <h2 className="h1-responsive font-weight-bold white-text mb-0 pt-md-5 pt-5">TISA - Soluciones de software</h2>
                    <hr className="hr-light my-4 w-75" />
                    <h4 className="subtext-header h4-responsive mt-2 mb-4">Para que te dediques a lo que más importa.</h4>
                    {/* <MDBBtn color="info" ><MDBIcon icon="home" className="mr-2" /> Visit us</MDBBtn> */}
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Intro;
