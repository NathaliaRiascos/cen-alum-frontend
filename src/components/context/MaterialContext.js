import React, { createContext, useState, useEffect } from "react";
import { MaterialService } from "services/material";
import PropTypes from 'prop-types'

export const MaterialContext = createContext();

const MaterialContextProvider = ({ children }) => {
  const materialService = new MaterialService();

  const [materials, setMaterials] = useState([]);
  const [materialsUsed, setMaterialsUsed] = useState([]);
  const [editMaterialUsed, setEditMaterialUsed] = useState(null)
  const [editMaterial, setEditMaterial] = useState(null);

  useEffect(() => {
    updateMaterials()
  }, []);

  const updateMaterials = () => {
    materialService.readAll().then(data => setMaterials(data));
  }

  const createMaterial = material => {
    const { referencia, descripcion, precio} = material
    const mtl = {
      reference: referencia,
      description: descripcion,
      price: precio
    }

    materialService
      .create(mtl)
      .then(data => setMaterials([...materials, data]));
  };

  const deleteMaterial = id => {
    materialService
      .delete(id)
      .then(() => setMaterials(materials.filter(p => p.id_material !== id)));
  };

  const findMaterial = id => {
    console.log(id)
    const material = materials.find(p => p.id_material === id);
    const materialUsed = materialsUsed.find(p => p.key === id);
    const mtl = materialUsed? materialUsed : material
    setEditMaterial(mtl);
    //setEditMaterialUsed(materialUsed)
  };

  const updateMaterial = material => {
    const { id_material, referencia, descripcion, precio} = material
    const mtl = {
      referencia,
      descripcion,
      precio,
      id_material
    }
    
    materialService
      .update(mtl)
      .then(data =>
        console.log(data)
        /*setMaterials(
          materials.map(p => (p.id_material === mtl.id_material ? data : mtl))
        )*/
      );

    console.log(mtl)
    setEditMaterial(null);
  };

  const updateMaterialUsed = material => {
    
    setMaterialsUsed(
      materialsUsed.map(p => (p.key === material.key ? material: p))
    )
    //updateMaterial(material)
    console.log(material)
    //setEditMaterial(null)
    updateMaterial(material)
  }
  const deleteMaterialsUsed = id => {
    setMaterialsUsed(materialsUsed.filter(p => p.key !== id))
  }

  return (
    <MaterialContext.Provider
      value={{
        createMaterial,
        updateMaterials,
        deleteMaterial,
        findMaterial,
        updateMaterial,
        materialsUsed,
        editMaterialUsed,
        updateMaterialUsed,
        setEditMaterialUsed,
        deleteMaterialsUsed,
        setMaterialsUsed,
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