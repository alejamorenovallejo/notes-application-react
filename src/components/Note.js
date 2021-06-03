import React, {useContext} from 'react'
import {AppContext} from '../context/context'
import {
    Button,
    Form,
    Modal,
    ButtonToolbar,
    ButtonGroup,
  } from "react-bootstrap";


export function Note() {
    const {setShow,show,setListNotes,listNotes,filterData,hidden,texto,hiddenDelete,setFilterData,id} = useContext(AppContext);
    
    //Modal Close
    const handleClose = () => setShow(false);

    //Delete Note 
    const deleteNote =(value) => {
        const newList = listNotes.filter((item) => item.id !== value);
        setListNotes(newList);
        handleClose();
    }

    //Input Chnage
   const handleInputChange = (element) => {
    if(!filterData.edit) {
      const newListNote = listNotes.map((note) => {
        return note.id ;
      });
      const count = listNotes.length === 0 ? listNotes.length + 1 : Math.max(...newListNote) + 1;
      setFilterData({
        ...filterData,
        id: count,
        [element.target.name] : element.target.value
      })
    }else {
      setFilterData({
        ...filterData,
        [element.target.name] : element.target.value
      })
    }
  } 

   //Save Note
   const saveNote = (element) => {
    element.preventDefault()
    if(!filterData.edit) {
      setListNotes([...listNotes, filterData])
      setFilterData('')
    }else {
      const newListNote = listNotes.map((note) => {
        if (note.id === filterData.id) {
          const updatedNote = {
            ...note,
            titleNote: filterData.titleNote,
            noteDescription: filterData.noteDescription,
            color:filterData.color
          };
          return updatedNote;
        }
        return note;
      });
      setListNotes(newListNote);
      setFilterData('')
    }
    handleClose();
  } 

  //Change Color
  const changeColor = (color) => {
    setFilterData({
      ...filterData,
      color:color
    })
  }

  return(
    <section>
        <Modal show={show} onHide={handleClose}  >
            <Modal.Header closeButton className={`bg-${filterData.color}`}>
                <Modal.Title >{texto} Nota</Modal.Title>
            </Modal.Header>
            <Modal.Body className={`bg-${filterData.color}`} >
              <p className={`d-${hiddenDelete}`}>
                  ¿Desea Eliminar la nota?
              </p>
              <Form onSubmit={saveNote} className={`d-${hidden}`}>
                <Form.Group controlId="formNote" xs={{ order: 3 }} >
                  <Form.Control type="text" placeholder="Titulo" name="titleNote"  value={filterData.titleNote} onChange={handleInputChange} required/>
                </Form.Group>
                <Form.Group controlId="formNote" xs={{ order: 3 }}>
                  <Form.Control as="textarea" rows={5} placeholder="Añade una nota" value={filterData.noteDescription} name="noteDescription"  onChange={handleInputChange} required/>
                </Form.Group>
                <Form.Group controlId="formNote" xs={{ order: 3 }}>
                  <Button variant="dark" type="submit">{texto} Nota</Button>
                </Form.Group>
                <Form.Group controlId="formNote" xs={{ order: 3 }}>
                  <ButtonToolbar>
                    <ButtonGroup className="mb-2" aria-label="First group">
                      <Button onClick={() => {changeColor("warning")}} variant="warning"></Button> 
                      <Button onClick={() => {changeColor("primary")}} variant="primary"></Button> 
                      <Button onClick={() => {changeColor("danger")}} variant="danger"></Button> 
                      <Button onClick={() => {changeColor("success")}} variant="success"></Button> 
                      <Button onClick={() => {changeColor("info")}} variant="info"></Button>
                      <Button onClick={() => {changeColor("default")}} variant="default"></Button>
                      <Button onClick={() => {changeColor("secondary")}} variant="secondary"></Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer className={`d-${hiddenDelete}`}>
              <Button variant="secondary" onClick={handleClose}>No</Button>
              <Button variant="primary" onClick={() => {deleteNote(id)}}>Si</Button>
            </Modal.Footer>
          </Modal>
    </section>
  )
}