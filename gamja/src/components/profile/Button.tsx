import styled from "styled-components";

interface BtnProps {
  text: string;
  edit?: () => void;
}

export const Button = ({ text, edit }: BtnProps) => {
  return (
    <>
      <Btn text={text} onClick={edit}>
        {text}
      </Btn>
    </>
  );
};

const Btn = styled.button<{ text: string }>`
  width: 65px;
  height: 50px;
  border: 1px solid gray;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  background-color: ${(props) =>
    props.text === "확인" ? "rgba(0,196,113)" : "white"};
  color: ${(props) => (props.text === "확인" ? "white" : "black")};
`;
