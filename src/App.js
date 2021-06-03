import "./index.css";
import React, { useState,useContext } from "react";
import {Container,Row,Navbar} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFileAlt,} from "@fortawesome/free-solid-svg-icons";
import { AppProvider } from "./context/context"; 
import { AddNote } from "../src/components/AddNote";
import { Note } from "../src/components/Note";
import { NoteList } from "../src/components/NoteList";


function App() {
  return (
    <div className="App">
     <AppProvider>
        <Navbar expand="lg">
          <h1 className="text-center">
            <FontAwesomeIcon icon={faFileAlt} /> Mis Notas
          </h1>
        </Navbar>
        <Container
          className="d-flex justify-content-center align-items-center h-100"
          fluid
        >
          <Row>
            <AddNote/>
            <Note/>
            <NoteList/>
        </Row>
        </Container>
        </AppProvider>
    </div>
  );
}

export default App;
