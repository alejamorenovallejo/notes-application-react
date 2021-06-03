import React, {useContext,useState} from 'react'
import {AppContext} from '../context/context'
import {Button,Col} from "react-bootstrap";

export function AddNote() { 
    const {setShow,setHidden,setHiddenDelete,setFilterData,setTexto} = useContext(AppContext);

    //Modal Open Mode Add
    const handleShow = () => {
        setHidden("");
        setHiddenDelete("none");
        setFilterData("");
        setTexto("Agregar");
        setShow(true);
    };
     
    return (
        <>
           <Col md={12} className="space center">
              <Button
                variant="dark"
                className="space"
                onClick={() => {
                  handleShow();
                }}
              >
                Agregar Nota
              </Button>
            </Col>
        </>
    );
}
