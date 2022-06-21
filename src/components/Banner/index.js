import { BackgroundWrapper, BackgroundContent, Title } from "./styles";
import { StudentCard } from "../StudentCard";
import { useQuery } from "@apollo/client";
import { GET_STUDENTS } from "../../services/student";
import { useEffect, useState } from "react";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { Forms } from "../Forms";

export function Banner() {
  const { data } = useQuery(GET_STUDENTS);
  const [students, setStudents] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [action, setAction] = useState("");

  useEffect(() => {
    if (data?.getStudents) setStudents(data.getStudents);
  }, [data, students]);

  const createStudentModal = () => {
    setOpenModal(true);
    setAction("Criar");
  };

  const getStudentModal = () => {
    setOpenModal(true);
    setAction("Buscar");
  };

  return (
    <BackgroundWrapper>
      <BackgroundContent>
        <Button text={"Criar Estudante"} onClick={createStudentModal} />
        <Button text={"Buscar Estudante"} onClick={getStudentModal} />
        {openModal && (
          <Modal
            show={openModal}
            onClose={() => setOpenModal(false)}
            modalContent={<Forms action={action} />}
            buttonText={"Fechar"}
            modalTitle={"Criar Estudante"}
          />
        )}

        <Title>Estudantes Cadastrados</Title>
        {students.length &&
          students.map((student) => <StudentCard student={student} />)}
      </BackgroundContent>
    </BackgroundWrapper>
  );
}
