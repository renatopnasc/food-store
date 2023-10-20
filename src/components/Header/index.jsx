import { Container, SearchInput } from "./styles";
import logoSvg from "../../assets/svg/logo.svg";
import logoAdmSvg from "../../assets/svg/logoAdm.svg";

import { AiOutlineSearch } from "react-icons/ai";
import { PiReceipt } from "react-icons/pi";
import { GoSignOut } from "react-icons/go";
import { ButtonHeader } from "../ButtonHeader";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { useNavigate } from "react-router-dom";

import { USER_ROLE } from "../../utils/roles";

export function Header({ onChange }) {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  function handleNavigate() {
    navigate("/register/dish");
  }
  return (
    <Container>
      <nav>
        <Link to="/">
          <img
            src={user.role === USER_ROLE.ADMIN ? logoAdmSvg : logoSvg}
            alt=""
          />
        </Link>

        <SearchInput>
          <AiOutlineSearch size={24} />
          <input
            placeholder="Busque por pratos ou ingredientes"
            type="text"
            name=""
            id=""
            onChange={onChange}
          />
        </SearchInput>

        <ButtonHeader
          icon={user.role !== USER_ROLE.ADMIN && PiReceipt}
          title={user.role === USER_ROLE.ADMIN ? "Novo prato" : "Pedidos (0)"}
          onClick={user.role === USER_ROLE.ADMIN ? handleNavigate : null}
        />

        <button className="signOut-btn" onClick={handleSignOut}>
          <GoSignOut size={22} />
        </button>
      </nav>
    </Container>
  );
}
