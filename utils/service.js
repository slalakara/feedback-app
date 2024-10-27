"use server";
import { advancedFetch } from "./fetchGet";

export const getInvoices = async () => {
  const response = await advancedFetch("Invoices");
  return response;
};

export const addInvoices = async () => {
  const response = await advancedFetch(`api/Invoice/SaveInvoice`, "POST", {
    title: "Hello",
    userId: 1,
  });
  return response;
};

export const getInvoicesDetail = async (id) => {
  const response = await advancedFetch(`InvoiceDetail/${id}`, "POST");
  return response;
};

export const deleteInvoicesDetail = async (id) => {
  const response = await advancedFetch(
    `api/Invoice/DeleteInvoice/${id}`,
    "DELETE"
  );
  return response;
};

export const postInvoinces = async (formData) => {
  const response = await advancedFetch(
    `api/Invoice/SaveInvoice`,
    "POST",
    formData
  );
  return response;
};

export const updateInvoinces = async (formData) => {
  const response = await advancedFetch(
    `api/Invoice/SaveInvoice`,
    "POST",
    formData
  );
  return response;
};

export const postClients = async (formData) => {
  debugger;
  const response = await advancedFetch(`SaveClient`, "POST", formData);
  return response;
};

export const getClients = async () => {
  debugger;
  const response = await advancedFetch(`api/Client/GetClients`);
  return response;
};
