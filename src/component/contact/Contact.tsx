import "./contact.css";
import { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  text: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    text: '',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      text: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>contact</h3>
        <label htmlFor="name">
          Nombre Completo <span>*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">
          correo electronico<span>*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Mensaje</label>
        <textarea
          name="text"
          value={formData.text}
          onChange={handleChange}
          id="message"
          cols={10}
          rows={5}
        ></textarea>
        <button type="submit" className="btForm">
          <a href="romarioariza@gmail.com">ENVIAR</a>
        </button>
      </form>
    </div>
  );
};

export default Contact;