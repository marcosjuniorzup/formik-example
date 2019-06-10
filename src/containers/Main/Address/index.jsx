import React from "react";
import { Input, Select } from "components/Form";
import { Card, CardTitle, CardBody } from "components/Card";

const Address = () => (
  <Card className="mg-bottom-10">
    <CardTitle className="mg-bottom-10" title="Endereço" />
    <CardBody>
      <Select name="address.city" label="Cidade" />
      <Select name="address.state" label="Estado" />
      <Input name="address.street" label="Rua" />
      <Input name="address.cell" label="Número" />
      <Input name="address.neighborhood" label="Bairro" />
      <Input name="address.complement" label="Complemento" />
    </CardBody>
  </Card>
);

export default Address;
