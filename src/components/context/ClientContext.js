import React, { createContext, useState, useEffect } from "react";
import { ClientService } from "services/client";

export const ClientContext = createContext();

const ClientContextProvider = ({ children }) => {
  const clientService = new ClientService();

  const [clients, setClients] = useState([]);
  const [coincidencias, setCoincidencias ] = useState([])
  const [editClient, setEditClient] = useState(null);

  useEffect(() => {
    clientService.readAll().then(data => setClients(data));
  }, []);

  const createClient = client => {
    
    const { nombre, identificacion, direccion, telefono, email } = client

    const cliente = {
     name: nombre,
    identify: identificacion,
    address: direccion,
    phone: telefono,
    email: email
  }
    
    clientService
      .create(cliente)
      .then(data => setClients([...clients, data]));
  };

  const deleteClient = id => {
    clientService
      .delete(id)
      .then(() => setClients(clients.filter(p => p.id_cliente !== id)));
  };

  const searchIdClient = id => {
    const clientes = clients.filter(cliente => cliente.identificacion.includes(id)) ;
    setCoincidencias(clientes.map(c => c.identificacion));
  };

  const findClient = id => {
    const client = clients.find(p => p.identificacion === id);
    
    setEditClient(client);
  };
  const searchNameClient = nombre => {
    let clientes = clients.filter(cliente => cliente.nombre.includes(nombre));
    setCoincidencias(clientes.map(c => c.nombre));
    console.log(coincidencias)
  };

  const updateClient = client => {
    clientService
      .update(client)
      .then(data =>
        setClients(
          clients.map(p => (p.id_cliente === client.id_cliente ? data : client))
        )
      );

    setEditClient(null);
  };

  return (
    <ClientContext.Provider
      value={{
        createClient,
        deleteClient,
        findClient,
        searchIdClient,
        searchNameClient,
        updateClient,
        setEditClient,
        coincidencias,
        editClient,
        clients,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ClientContextProvider;