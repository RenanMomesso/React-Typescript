import styled from "styled-components";

const HeadingMain = styled.div`
  font-size: 30px;
  width: 100%;
  height: 60px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  background-color: #c4c4c4;

  a {
    text-decoration: none;
    color: #454868;
  }
`;

export interface HeaderProps {
  children: React.ReactNode;
}
const Header = ({ children }: HeaderProps) => {
  return <HeadingMain aria-label="Header">{children}</HeadingMain>;
};

export default Header;
