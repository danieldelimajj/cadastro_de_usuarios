import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 padding-top: 160px;
`

export const StyledH1 = styled.h1`
  color: #f7f7f7;
  font-size: 28px;
  text-align: center;
`

export const StyledForm = styled.form`
 display: flex;
 flex-direction: column;
 gap: 30px;
 padding: 30px;
 border-radius: 10px;
 background-color: #2e2d4e;
 max-width: 50%;
 width: 400px;
 margin-bottom: 20px;
`

export const StyledInputForm = styled.input`
  border: 1px solid #4e4f6c;
  border-radius: 30px;
  height: 40px;
  background-color: #363653;
  color: #f7f7f7;
  font-size: 16px;
  padding-left: 10px;
  outline: none;
`

export const StyledSpanForm = styled.span`
  font-weight: normal;
  padding-left: 5px;
`

export const StyledButtonForm = styled.button`
  border-radius: 30px;
  background-color: #8b8ae1;
  height: 40px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  color: #f7f7f7;

 &:hover {
  opacity: 0.8;
  background-color: green;
  transition: 0.7s;
 }
`

export const StyledCardDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #2e2d4e;
  margin: 10px;
  padding: 10px;
  width: 400px;
  border-radius: 10px;
`

export const StyledCardParagraph = styled.p`
  color: #f7f7f7;
  font-weight: bold;
`

export const ButtonTrash = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`