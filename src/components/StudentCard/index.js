import { Button } from "../Button";
import { Card, Title, Text, CardItem, CardWrapper } from "./styles";
import { DELETE_STUDENT } from "../../services/student";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Modal } from "../Modal";
import { Forms } from "../Forms";

export function StudentCard({ student }) {
  const [deleteStudent] = useMutation(DELETE_STUDENT);
  const [openModal, setOpenModal] = useState(false);

  const deleteStudentHandler = async () =>
    await deleteStudent({
      variables: {
        cpf: student?.cpf,
      },
    });

  const editStudentModal = () => setOpenModal(true);
  return (
    <div>
      {openModal && (
        <Modal
          show={openModal}
          onClose={() => setOpenModal(false)}
          modalContent={<Forms action={"Editar"} />}
          buttonText={"Fechar"}
          modalTitle={"Editar Estudante"}
        />
      )}
      <Card>
        <CardWrapper>
          <CardItem>
            <Title>Aluno: </Title>
            <Text>{student?.name}</Text>
          </CardItem>
          <CardItem>
            <Title>Cpf:</Title>
            <Text>{student?.cpf}</Text>
          </CardItem>
          <CardItem>
            <Title>Email:</Title>
            <Text>{student?.email}</Text>
          </CardItem>
        </CardWrapper>

        <Button
          text={"Deletar"}
          color={"rgb(254, 213, 0)"}
          onClick={deleteStudentHandler}
        />
        <Button
          text={"Editar"}
          color={"rgb(38, 159, 249)"}
          onClick={editStudentModal}
        />
      </Card>
    </div>
  );
}
