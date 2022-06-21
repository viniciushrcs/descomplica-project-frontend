import { HeaderWrapper, HeaderContent, Logo } from "./styles";

export function Header() {
  return (
    <>
      <HeaderWrapper>
        <HeaderContent>
          <Logo>
            <img
              src="https://d3awytnmmfk53d.cloudfront.net/landings/static/images/core/logo_verde.svg"
              alt="logo-descomplica"
            />
          </Logo>
        </HeaderContent>
      </HeaderWrapper>
    </>
  );
}
