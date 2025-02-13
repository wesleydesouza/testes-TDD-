import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export const Login = () => {
  const router = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router("/dashboard");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input type="text" placeholder="Insira seu e-mail" />
        <input type="password" placeholder="Insira sua senha" />
        <button>Login</button>
        <Link to="/sign-up">Não tem cadastro? Clique aqui!</Link>
      </form>
    </div>
  );
};
