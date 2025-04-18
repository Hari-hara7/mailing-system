import { useEffect, useState } from 'react';
import { getContacts, addContact, sendMail } from '../services/api';
import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';

type Contact = {
  _id: string;
  name: string;
  email: string;
  phone: string;
};

export default function Home() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const data = await getContacts();
    setContacts(data);
  };

  const handleAdd = async (contact: Omit<Contact, '_id'>) => {
    await addContact(contact);
    fetchContacts();
  };

  const handleSendEmail = async (id: string) => {
    await sendMail(id);
    alert('Email sent!');
  };

  return (
    <div className="bg-white min-h-screen py-8 px-4 md:px-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-black">
        Emergency Contact Directory
      </h1>

      <div className="mb-10">
        <ContactForm onAdd={handleAdd} />
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {contacts.map((c) => (
          <ContactCard key={c._id} {...c} onSendEmail={handleSendEmail} />
        ))}
      </div>
    </div>
  );
}
