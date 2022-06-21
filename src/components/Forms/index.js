import { useState } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import {
  CREATE_STUDENT,
  GET_STUDENT,
  EDIT_STUDENT,
} from "../../services/student";
import { Input } from "./styles";

export function Forms({ action }) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [editStudent] = useMutation(EDIT_STUDENT);
  const [createStudent] = useMutation(CREATE_STUDENT);
  const [getStudent, { data }] = useLazyQuery(GET_STUDENT);

  async function handleCreateStudent(e) {
    e.preventDefault();

    if (!name || !cpf || !email) {
      return;
    }

    switch (action) {
      case "Editar":
        await editStudent({
          variables: {
            cpf,
            name,
            email,
          },
        });

        break;
      case "Criar":
        await createStudent({
          variables: {
            name,
            cpf,
            email,
          },
        });

        break;

      case "Buscar":
        await getStudent({
          variables: {
            name,
            email,
            cpf,
          },
        });

        break;

      default:
        break;
    }
  }

  console.log(data);

  return data ? (
    <div>
      <div>Nome: {data?.getStudent?.name}</div>
      <div>Cpf: {data?.getStudent?.cpf}</div>
      <div>Email: {data?.getStudent?.email}</div>
    </div>
  ) : (
    <form onSubmit={handleCreateStudent}>
      Nome
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      Cpf{" "}
      <Input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
      Email{" "}
      <Input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">{action}</button>
    </form>
  );
}
