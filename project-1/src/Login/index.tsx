import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

export const Login = () => {
  const router = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router("/dashboard");
  };

  return (
    <div className={styles.container}>
      <h2>Sign In</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Insira seu e-mail" />
        <input type="password" placeholder="Insira sua senha" />
        <button>Login</button>
      </form>
    </div>
  );
};
