import React, { useContext } from 'react';
import { AppContext } from '../context/context';
import { Button,Card,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt,faEdit,faFileAlt,faPaperclip} from '@fortawesome/free-solid-svg-icons';

export function NoteList() {
  const { listNotes,setFilterData,setId,setHiddenDelete,filterData,setHidden,setTexto,setShow } = useContext(AppContext);

  //Modal Open Mode Edit or Delete
  const handleShow = (remove) => {
    setHidden("");
    setHiddenDelete("none");
    if (!remove) {
      setTexto("Editar");
    } else {
      setTexto("Eliminar");
    }
    setShow(true);
  };

  //Edit Note
  const editNote = (value) => {
  listNotes.filter((element) => (element.id == value)).map((elem) =>  {
      setFilterData({
          ...elem,
          edit:true
      })
  })
    handleShow(false);
  }

  //Delete Alert Note
  const deleteAlert = (value) => {
      setId(value);
      handleShow(true);
      setHiddenDelete("");
      setHidden("none");
      setFilterData({
        ...filterData,
        color: "default",
      });
  };

  return (
      <section>
          {listNotes.map((elem) =>  (
          <Col className="col-md-3" key={elem.id}>
            <Card className={`bg-${elem.color}`}>
              <Card.Header><FontAwesomeIcon icon={faPaperclip}/>{elem.titleNote}</Card.Header>
              <Card.Body key={elem.id}>
                <Card.Text>{elem.noteDescription}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline-dark"><FontAwesomeIcon icon={faTrashAlt} type="button"  onClick={() => {deleteAlert(elem.id)}}/></Button> 
                <Button variant="outline-dark"><FontAwesomeIcon icon={faEdit} type="button" onClick={() => {editNote(elem.id)}}/></Button>
              </Card.Footer>
            </Card>
          </Col>
          ))}
      </section>
  );
}

