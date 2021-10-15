import React, { createContext, useState, useEffect } from "react";
import { MaterialService } from "services/material";
import PropTypes from 'prop-types'

export const MaterialContext = createContext();

const MaterialContextProvider = ({ children }) => {
  const materialService = new MaterialService();

  const [materials, setMaterials] = useState([]);
  const [materialsUsed, setMaterialsUsed] = useState([]);
  //const [ getIdMaterial, setIdMaterial] = useState(null)
  const [editMaterialUsed, setEditMaterialUsed] = useState(null)
  const [editMaterial, setEditMaterial] = useState(null);

  useEffect(() => {
    updateMaterials()
  }, []);

  const updateMaterials = () => {
    materialService.readAll().then(data => setMaterials(data));
  }

  const createMaterial =  (material, otrosdatos) => {
    const { longitud, cantidad, total} = otrosdatos
    materialService
      .create(material)
        .then(data => {
          if (otrosdatos) {
              material.longitud = longitud
              material.cantidad = cantidad
              material.total = total
              material.key = data.id
              material.id_material = data.id
              setMaterialsUsed([...materialsUsed, material])
          }
        })
  };
 
  const deleteMaterial = id => {
    const material = materials.find(p => p.id_material === id);
    materialService
      .delete(material)
      .then(() => setMaterials(materials.filter(p => p.id_material !== id)));
  };

  const findMaterial = id => {
    const material = materials.find(p => p.id_material === id);
    const materialUsed = materialsUsed.find(p => p.key === id);
    const mtl = materialUsed? materialUsed : material
    setEditMaterial(mtl);
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
        setMaterials(
          materials.map(p => (p.id_material === mtl.id_material ? data : mtl))
        )
      );

    console.log(mtl)
    setEditMaterial(null);
  };

  const updateMaterialUsed = material => {
    
    setMaterialsUsed(
      materialsUsed.map(p => (p.key === material.key ? material: p))
    )
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
        //getIdMaterial,
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