import React from 'react'
import { Input } from 'components/Form'
import { Card, CardTitle, CardBody } from 'components/Card'

const PersonalData = () => (
  <Card className="mg-bottom-10" title="Dados Pessoais">
    <CardTitle className="mg-bottom-10" title="Dados Pessoais" />
    <CardBody>
      <Input name="personalData.name" label="Nome completo" />
      <Input name="personalData.email" label="Email" />
      <Input name="personalData.cpf" label="CPF" />
      <Input name="personalData.rg" label="RG" />
      <Input name="personalData.cellPhone" label="Celular" />
      <Input name="personalData.birthday" label="Data de nascimento" />
    </CardBody>
  </Card>
)

export default PersonalData
