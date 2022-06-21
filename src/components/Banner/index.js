import { BackgroundWrapper, BackgroundContent } from "./styles";
import { NewStudentForm } from "../NewStudentForm";

export function Banner() {
  return (
    <BackgroundWrapper>
      <BackgroundContent>
        <NewStudentForm />
      </BackgroundContent>
    </BackgroundWrapper>
  );
}
