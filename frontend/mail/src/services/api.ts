const API_BASE = 'https://mailing-system-1.onrender.com/api/contacts';

export const getContacts = async () => {
  const res = await fetch(API_BASE);
  return res.json();
};

export const addContact = async (contact: {
  name: string;
  email: string;
  phone: string;
}) => {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contact),
  });
  return res.json();
};

export const sendMail = async (id: string) => {
  const res = await fetch(`${API_BASE}/${id}/email`, {
    method: 'POST',
  });
  return res.json();
};
