import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 20px;
  margin: 10px auto 30px auto;
  list-style: none;
  border-radius: 10%;
  background-color: #ffffff;
`;

export const ButtonItem = styled.li`
  width: 80px;
  &:not(:last-child) {
    margin-right: 40px;
  }
`;

export const Button = styled.button`
  width: 100px;
  border-radius: 999px;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    90deg,
    rgba(34, 193, 195, 0.7539390756302521) 19%,
    rgba(218, 242, 4, 0.802) 77%
  );
  border: 1px solid transparent;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.64);
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.64);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.64);
  color: #ffffff;
  font-family: Akshar;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 20px;
  &:hover,
  &:focus {
    transform: scale(1.1);
    transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
  }
`;
