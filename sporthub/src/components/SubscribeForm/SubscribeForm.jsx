import { useState } from "react";
import "./SubscribeForm.scss";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!email) {
      setError("Пожалуйста, введите email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Пожалуйста, введите корректный email");
      return;
    }

    // Success - In real app, this would send to backend
    setSuccess(true);
    setEmail("");
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="subscribe">
      <h3>ПОДПИСКА</h3>
      <form className="subscribe-box" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Введите ваш email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email для подписки"
          aria-invalid={error ? "true" : "false"}
        />
        <button type="submit">ПОДПИСАТЬСЯ</button>
      </form>
      {error && <p className="subscribe-error">{error}</p>}
      {success && <p className="subscribe-success">Вы успешно подписались!</p>}
    </div>
  );
};

export default SubscribeForm;