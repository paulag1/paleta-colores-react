import React from "react";
import { Button, Card, Form, FormControl } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./formColor.css";

const FormColor = (props) => {
  const { colors, changeColorList } = props;

  const { register, handleSubmit } = useForm();

  //data nos proporciona el react hook form 
  const customHandleSubmit = (data) => {
    console.log(data);

    //[] ---> voy a tener un arreglo de colores dentro de cada posicion con su id
    /*[ {
id: 1234
color: #1234
          }

       ] */

const newColor={
  id: Math.round(Math.random()*30000),
  color: data.color
}

changeColorList([...colors, newColor])
  };

  return (
    <Card className="formCard">
      <Card.Body>
        <Card.Title className="text-dark">Añadir color</Card.Title>
        <Form onSubmit={handleSubmit(customHandleSubmit)}>
          <Form.Control
            {...register("color")}
            type="color"
            className="w-100 my-3"
            id="colorPicker"
          />
          <div className="text-end">
            <Button variant="danger" type="submit">
              Guardar
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormColor;
