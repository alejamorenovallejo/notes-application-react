import React, { useState } from 'react';
export const AppContext = React.createContext();



export function AppProvider({ children }) {
    const [show, setShow] = useState(false);
    const [texto, setTexto] = useState('Agregar');
    const [hidden,setHidden] = useState('')
    const [hiddenDelete,setHiddenDelete] = useState('none')
    const [id,setId] = useState('');
    const [listNotes, setListNotes] = useState([]);
    const [filterData,setFilterData]= useState({id:'',titleNote:'',noteDescription:'',edit:false,color:'default'});

    return (
        <AppContext.Provider
            value={{
                show, 
                setShow,
                texto, 
                setTexto,
                hidden,
                setHidden,
                hiddenDelete,
                setHiddenDelete,
                hiddenDelete,
                setHiddenDelete,
                id,
                setId,
                listNotes, 
                setListNotes,
                filterData,
                setFilterData,
            }}>
            {children}
        </AppContext.Provider>
    )
}