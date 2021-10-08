import React, { createContext, useState, useEffect } from "react";
import { ClientService } from "services/quotation";

export const QuotationContext = createContext();

const QuotationContextProvider = ({ children }) => {
  const quotationService = new ClientService();

  const [quotations, setQuotations] = useState([]);

  const [editQuotation, setEditQuotation] = useState(null);

  useEffect(() => {
    quotationService.readAll().then(data => setQuotations(data));
  }, []);

  const createQuotation = quotation => {
    console.log(quotation)
    quotationService
      .create(quotation)
      .then(data => setQuotations([...quotations, data]));
  };

  const deleteQuotation = id => {
    quotationService
      .delete(id)
      .then(() => setQuotations(quotations.filter(p => p._id !== id)));
  };

  const findQuotation = id => {
    const quotation = quotation.find(p => p._id === id);

    setEditQuotation(quotation);
  };

  const updateQuotation = quotation => {
    quotationService
      .update(quotation)
      .then(data =>
        setQuotations(
          quotations.map(p => (p._id_cliente === quotation.id_cliente ? data : quotation))
        )
      );

    setEditQuotation(null);
  };

  return (
    <QuotationContext.Provider
      value={{
        createQuotation,
        deleteQuotation,
        findQuotation,
        updateQuotation,
        editQuotation,
        quotations,
      }}
    >
      {children}
    </QuotationContext.Provider>
  );
};

export default QuotationContextProvider;