import { useState } from 'react';

type Props = {
  onAdd: (contact: { name: string; email: string; phone: string }) => void;
};

export default function ContactForm({ onAdd }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ name, email, phone });
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-black p-6 rounded-lg shadow-lg space-y-4 max-w-md mx-auto"
    >
      <h2 className="text-2xl font-semibold text-center">Add New Contact</h2>

      <input
        className="w-full bg-white border border-gray-300 text-black px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        className="w-full bg-white border border-gray-300 text-black px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        className="w-full bg-white border border-gray-300 text-black px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-black"
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />

      <button
        type="submit"
        className="w-full bg-black text-white font-semibold py-2 rounded hover:bg-gray-800 transition"
      >
        Add Contact
      </button>
    </form>
  );
}
