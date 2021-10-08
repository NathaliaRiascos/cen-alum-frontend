import React, { createContext, useState, useEffect } from "react";
import { MaterialService } from "services/material";
import PropTypes from 'prop-types'

export const MaterialContext = createContext();

const MaterialContextProvider = ({ children }) => {
  const materialService = new MaterialService();

  const [materials, setMaterials] = useState([]);
  
  const [editMaterial, setEditMaterial] = useState(null);

  useEffect(() => {
    materialService.readAll().then(data => setMaterials(data));
  }, []);

  const createMaterial = material => {

    materialService
      .create(material)
      .then(data => setMaterials([...materials, data]));
  };

  const deleteMaterial = id => {
    materialService
      .delete(id)
      .then(() => setMaterials(materials.filter(p => p.id_material !== id)));
  };

  const findMaterial = id => {
    const material = materials.find(p => p.id_material === id);
    
    setEditMaterial(material);
  };

  const updateMaterial = material => {
    materialService
      .update(material)
      .then(data =>
        setMaterials(
          materials.map(p => (p.id_material === material.id_material ? data : material))
        )
      );

    setEditMaterial(null);
  };

  return (
    <MaterialContext.Provider
      value={{
        createMaterial,
        deleteMaterial,
        findMaterial,
        updateMaterial,
        setEditMaterial,
        editMaterial,
        materials,
      }}
    >
      {children}
    </MaterialContext.Provider>
  );
};

MaterialContextProvider.propTypes = {
  children: PropTypes.node
}

export default MaterialContextProvider;