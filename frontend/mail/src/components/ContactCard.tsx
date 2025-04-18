type Props = {
    _id: string;
    name: string;
    email: string;
    phone: string;
    onSendEmail: (id: string) => void;
  };
  
  export default function ContactCard({ _id, name, email, phone, onSendEmail }: Props) {
    return (
      <div className="bg-white text-black p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 w-full max-w-sm mx-auto flex flex-col justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="text-gray-700 break-words">{email}</p>
          <p className="text-gray-700">{phone}</p>
        </div>
  
        <button
          onClick={() => onSendEmail(_id)}
          className="mt-4 w-full bg-black text-white font-medium py-2 rounded-md hover:bg-gray-800 transition"
        >
          Send Email
        </button>
      </div>
    );
  }
  