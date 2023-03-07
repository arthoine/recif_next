import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [creator_client, setCreatorClient] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { email, message, creator_client };
    const response = await fetch("https://api.recif.app/api/submitForm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
     console.log('envoie : '+ response.ok)
      // Le formulaire a été envoyé avec succès
      // Afficher un message de confirmation ou rediriger l'utilisateur
    } else {
      // Il y a eu une erreur lors de l'envoi du formulaire
      // Afficher un message d'erreur ou gérer l'erreur d'une autre manière
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </label>
      <label>
        Creator client:
        <input
          type="text"
          value={creator_client}
          onChange={(e) => setCreatorClient(e.target.value)}
        />
      </label>
      <button type="submit">Envoyer</button>
    </form>
  );
}
