import React, { createContext, useState, useEffect } from "react";
import { AnalisysService } from "services/analisys";
import PropTypes from 'prop-types'

export const AnalisysContext = createContext();

const AnalisysContextProvider = ({ children }) => {
  const analisysService = new AnalisysService();

  const [analisys, setAnalisys] = useState([]);
  const [dataAnalisys, setDtaAnalisys] = useState({
    responsables_del_trabajo: [],
    otros_gastos: [],
    materiales_usados: [],
    observaciones: '',
    total: 0
  })
  
  const [editAnalisys, setEditAnalisys] = useState(null);

  useEffect(() => {
    analisysService.readAll().then(data => setAnalisys(data));
  }, []);

  const createAnalisys = als => {

    analisysService
      .create(als)
      .then(data => setAnalisys([...analisys, data]));
  };

  const deleteAnalisys = id => {
    analisysService
      .delete(id)
      .then(() => setAnalisys(analisys.filter(p => p.id_analisys !== id)));
  };

  const findAnalisys = id => {
    const analisys = analisys.find(p => p.id_material === id);
    
    setEditAnalisys(analisys);
  };

  const updateAnalisys = als => {
    analisysService
      .update(als)
      .then(data =>
        setAnalisys(
          analisys.map(p => (p.id_analisys === analisys.id_analisys ? data : analisys))
        )
      );

    setEditAnalisys(null);
  };

  return (
    <AnalisysContext.Provider
      value={{
        createAnalisys,
        dataAnalisys, 
        setDtaAnalisys,
        deleteAnalisys,
        findAnalisys,
        updateAnalisys,
        setEditAnalisys,
        editAnalisys,
        analisys,
      }}
    >
      {children}
    </AnalisysContext.Provider>
  );
};

AnalisysContextProvider.propTypes = {
  children: PropTypes.node
}

export default AnalisysContextProvider;