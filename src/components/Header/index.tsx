import * as S from "./styles";

export interface HeaderProps {
  children: React.ReactNode;
}
const Header = ({ children }: HeaderProps) => {
  return <S.HeadingMain aria-label="Header">{children}</S.HeadingMain>;
};

export default Header;
