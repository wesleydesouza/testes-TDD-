import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className={styles.container}>
      <h2>Cadastra-se</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Insira seu nome" />
        <input type="text" placeholder="Insira seu e-mail" />
        <input type="text" placeholder="Insira sua senha" />

        <button>Sign Up</button>
      </form>
    </div>
  );
};
