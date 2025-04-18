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
  const [accessGranted, setAccessGranted] = useState(false);
  const [secretInput, setSecretInput] = useState('');

  const SECRET_KEY = '2277'; // Replace with process.env.REACT_APP_SECRET_KEY for production

  useEffect(() => {
    if (accessGranted) {
      fetchContacts();
    }
  }, [accessGranted]);

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

  const handleSecretSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (secretInput === SECRET_KEY) {
      setAccessGranted(true);
    } else {
      alert('Invalid secret key');
    }
  };

  if (!accessGranted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <form
          onSubmit={handleSecretSubmit}
          className="bg-black p-8 rounded-lg shadow-lg max-w-sm w-full space-y-4"
        >
          <h2 className="text-white text-2xl font-bold text-center">
            Enter Secret Key
          </h2>
          <input
            type="password"
            placeholder="Secret Key"
            value={secretInput}
            onChange={(e) => setSecretInput(e.target.value)}
            className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-2 rounded hover:bg-gray-200"
          >
            Enter
          </button>
        </form>
      </div>
    );
  }

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
