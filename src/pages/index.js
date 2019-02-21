import React, { Component } from 'react';
import Layout from '../components/layout';
import Intro from '../components/mask';
import SEO from '../components/seo';
import Banner from '../components/banner';
import AboutSection from '../components/aboutSection'
import Card from '../components/card'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact'

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO title="Home" keywords={[`gatsby`, `MDBReact`, `react`, `Material Design For Bootstrap`]} />
        <Banner />
        <Intro />
        <main>
          <section id="cardSection">
            <MDBCol md="12" style={{textAlign: "center"}}>
              {/* <MDBCol md="12"> */}
              <h2 className="h1-responsive text-center font-weight-bold mb-5">
                Administración de historias clínicas para fisioterapia
              </h2>
              <h4>Contamos con 3 tipos de planes</h4>
              <MDBBtn color="info" style={{marginBottom: "5vh"}}>Comenzar ahora</MDBBtn>
              {/* </MDBCol> */}
              <MDBRow className="m-0" center>
                <Card title="Plan Gratuito">
                <ul>
                  <li><MDBIcon icon="check" className="mr-2"/>Ingresar nuevos clientes (limitado)</li>
                  <li><MDBIcon icon="check" className="mr-2"/>Ingresar diagnósticos y evoluciones (limitado)</li>
                  <li><MDBIcon icon="check" className="mr-2"/>Exportar RIPS en Excel</li>
                  <li><MDBIcon icon="check" className="mr-2"/>100% de Garantía sobre toda la información</li>
                </ul>
                </Card>
                <Card title="Plan intermedio">
                <ul>
                  <li><MDBIcon icon="check" className="mr-2"/>Ingresar nuevos clientes (limitado)</li>
                  <li><MDBIcon icon="check" className="mr-2"/>Ingresar diagnósticos y evoluciones (limitado)</li>
                  <li><MDBIcon icon="check" className="mr-2"/>Exportar RIPS en Excel</li>
                  <li><MDBIcon icon="check" className="mr-2"/>100% de Garantía sobre toda la información</li>
                </ul>
                </Card>
                <Card title="Plan profesional">
                <ul>
                  <li><MDBIcon icon="check" className="mr-2"/>Ingresar nuevos clientes (ILIMITADO)</li>
                  <li><MDBIcon icon="check" className="mr-2"/>Ingresar diagnósticos y evoluciones ILIMITADOS</li>
                  <li><MDBIcon icon="check" className="mr-2"/>Exportar RIPS en Excel</li>
                  <li><MDBIcon icon="check" className="mr-2"/>100% de Garantía sobre toda la información</li>
                </ul>
                </Card>
              </MDBRow>
              </MDBCol>
          </section>
        </main>
        </Layout>
      </>
    );
  }
}

export default App;
