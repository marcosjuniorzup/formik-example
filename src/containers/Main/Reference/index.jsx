import React, { useEffect } from "react";
import PropType from "prop-types";
import { Input, FieldArray } from "components/Form";
import { Card, CardTitle, CardBody } from "components/Card";
import { AddButton, RemoveButton } from "components";
import { Row } from "./styled";

const Reference = ({ values }) => {
  useEffect(() => {
    // window.scroll({ top: 668, behavior: 'smooth' })
  });
  return (
    <FieldArray
      name="references"
      render={({ push, remove }) => {
        const handleClick = () => {
          push({ name: "", email: "", cell: "" });
        };

        return (
          <Card className="mg-bottom-10">
            <CardTitle className="mg-bottom-10" title="Referência">
              <AddButton onClick={handleClick} />
            </CardTitle>
            <CardBody>
              {values.map((item, index) => {
                const handleTrashClick = () => {
                  remove(index);
                };

                return (
                  <Row key={index}>
                    <Input
                      dist="36%"
                      name={`references[${index}].name`}
                      label="Nome"
                    />
                    <Input
                      dist="36%"
                      name={`references[${index}].email`}
                      label="Email"
                    />
                    <Input
                      dist="28%"
                      name={`references[${index}].cell`}
                      label="Celular"
                    />
                    <RemoveButton onClick={handleTrashClick} />
                  </Row>
                );
              })}
            </CardBody>
          </Card>
        );
      }}
    />
  );
};

Reference.propTypes = {
  values: PropType.array
};

export default Reference;
