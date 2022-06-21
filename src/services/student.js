import { gql } from "@apollo/client";

export const GET_STUDENTS = gql`
  query {
    getStudents {
      name
      cpf
      email
    }
  }
`;

export const GET_STUDENT = gql`
  query ($name: String, $cpf: String, $email: String) {
    getStudent(name: $name, cpf: $cpf, email: $email) {
      name
      cpf
      email
    }
  }
`;

export const EDIT_STUDENT = gql`
  mutation ($name: String!, $cpf: String!, $email: String!) {
    editStudent(name: $name, cpf: $cpf, email: $email) {
      name
      cpf
      email
    }
  }
`;

export const CREATE_STUDENT = gql`
  mutation ($name: String!, $cpf: String!, $email: String!) {
    createStudent(name: $name, cpf: $cpf, email: $email) {
      name
      cpf
      email
    }
  }
`;

export const DELETE_STUDENT = gql`
  mutation ($cpf: String!) {
    deleteStudent(cpf: $cpf)
  }
`;
