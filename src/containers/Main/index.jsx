import React, { Fragment } from "react";
import { Form, Debug } from "components/Form";
import { Card, CardTitle, CardBody } from "components/Card";
import { Button } from "components";
import PersonalData from "./PersonalData";
import Address from "./Address";
import Reference from "./Reference";
import { Main, Footer, Row, Column } from "./styled";
import yup from "utils/yup";

const Home = () => {
  const initialValues = {
    address: {
      city: "",
      state: "",
      street: "",
      cell: "",
      neighborhood: "",
      complement: ""
    },
    personalData: {
      name: "",
      email: "",
      cpf: "",
      rg: "",
      cellPhone: "",
      birthday: ""
    },
    references: [
      {
        name: "",
        email: "",
        cell: ""
      }
    ]
  };

  return (
    <Main>
      <Form
        initialValues={initialValues}
        validationSchema={yup.object().storeExample()}
        onSubmit={values => alert(JSON.stringify(values, null, 2))}
        render={({ values }) => (
          <Row className="pd-10">
            <Column dist="70%">
              <Card id="reference" className="mg-right-10 pd-vertical-40">
                <CardTitle className="mg-bottom-20" title="Formik Example" />
                <CardBody>
                  <PersonalData />
                  <Address />
                  <Reference values={values.references} />
                </CardBody>
                <Footer>
                  <Button type="submit">Enviar</Button>
                </Footer>
              </Card>
            </Column>
            <Column dist="30%">
              <Card className="pd-vertical-20">
                <CardTitle className="mg-bottom-20" title="Formik Props" />
                <Debug />
              </Card>
            </Column>
          </Row>
        )}
      />
    </Main>
  );
};

export default Home;
