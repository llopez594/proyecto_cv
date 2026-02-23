import { useEffect, useRef, useState } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hola, soy tu asistente virtual. ¿En qué puedo ayudarte?" }
  ]);
  const [inputValue, setInputValue] = useState("");

  const messagesRef = useRef(null);
  const inputRef = useRef(null);
  const badgeHiddenRef = useRef(false);

  useEffect(() => {
    // Auto-scroll al último mensaje
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    // Focus al abrir (como en tu JS original) :contentReference[oaicite:2]{index=2}
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen((v) => !v);
    badgeHiddenRef.current = true; // simula “quitar badge” como en tu JS original :contentReference[oaicite:3]{index=3}
  };

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("hola") || lowerMessage.includes("hi")) {
      return "Hola, ¿en qué puedo ayudarte hoy?";
    } else if (lowerMessage.includes("servicio") || lowerMessage.includes("precio")) {
      return "Ofrezco varios servicios: Frontend, Full-Stack, y más. ¿Sobre cuál te gustaría saber más?";
    } else if (lowerMessage.includes("experiencia")) {
      return "Tengo experiencia desarrollando aplicaciones web con React y Node. ¿Quieres ver mi portafolio?";
    } else if (lowerMessage.includes("contacto") || lowerMessage.includes("email")) {
      return "Puedes contactarme por email o usando el formulario de contacto.";
    } else if (lowerMessage.includes("portafolio") || lowerMessage.includes("proyecto")) {
      return "Puedes ver ejemplos en la sección de Portafolio.";
    } else if (lowerMessage.includes("gracias")) {
      return "De nada. ¿Algo más en lo que pueda ayudarte?";
    }
    return "Para más información, revisa las secciones del sitio o usa el formulario de contacto.";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const messageText = inputValue.trim();
    if (!messageText) return;

    setMessages((prev) => [...prev, { type: "user", text: messageText }]);
    setInputValue("");

    setTimeout(() => {
      const botText = getBotResponse(messageText);
      setMessages((prev) => [...prev, { type: "bot", text: botText }]);
    }, 800);
  };

  return (
    <div className="chat-widget">
      <button className="chat-toggle" onClick={handleToggle} type="button">
        <i className="fas fa-comments"></i>
        {!badgeHiddenRef.current && !isOpen && <span className="chat-badge">1</span>}
      </button>

      <div className={`chat-window ${isOpen ? "active" : ""}`}>
        <div className="chat-header">
          <div className="chat-header-info">
            <i className="fas fa-robot"></i>
            <div>
              <h4>Asistente Virtual</h4>
              <span className="chat-status">En línea</span>
            </div>
          </div>
          <button className="chat-close" onClick={handleToggle} type="button">
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="chat-messages" ref={messagesRef}>
          {messages.map((message, index) => (
            <div key={index} className={`chat-message ${message.type}`}>
              <div className="chat-message-avatar">
                <i className={`fas fa-${message.type === "bot" ? "robot" : "user"}`}></i>
              </div>
              <div className="chat-message-content">
                <p>{message.text}</p>
              </div>
            </div>
          ))}
        </div>

        <form className="chat-input-form" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            className="chat-input"
            placeholder="Escribe tu mensaje..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="chat-send">
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWidget;