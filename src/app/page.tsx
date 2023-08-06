'use client';
import { useChat } from "ai/react";

function HomePage() {

  const { handleInputChange, input, handleSubmit, messages, isLoading } = useChat();

  // const { handleInputChange, handleSubmit } = useChat({
  //   api: "api/ia"
  // });

  return (
    <section className="flex justify-center items-center h-screen">
      <form className="max-w-xl w-full" onSubmit={handleSubmit}>

        <div className="text-white max-h-96 h-full overflow-y-auto">
          { messages.map((message) => (
            <div key={message.id} className={`mb-2 p-2 rounded-md ${message.role === 'assistant' ? 'self-end bg-gray-800': 'self-start bg-blue-700'}`}>
              <span className={`text-xs ${message.role === 'assistant' ? 'text-right': 'text-left'}`}>
                {message.role}
              </span>
              {message.content}
            </div>
          ))}
        </div>

        <div className="flex justify-between my-4">
          <label className="text-white block font-bold my-2">
            di algo...
          </label>
          <button className="bg-blue-600 text-white px-3 py-2 rounded-md focus:outline-none disabled:opacity-50"
            disabled={isLoading || !input}
          >
            enviar
          </button>
        </div>
        <textarea 
          rows={4}
          value={input}
          placeholder="escribe tu mensaje aqui..."
          className="text-black bg-slate-300 px-3 py-2 w-full rounded-md focus:outline-none"
          onChange={handleInputChange}
        >
        </textarea>
      </form>
    </section>
  );
}

export default HomePage;