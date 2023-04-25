import styled, { css } from 'styled-components';

interface IModal {
  toggle: boolean;
}

export const Modal = styled.aside<IModal>`
  position: absolute;
  bottom: -305px;
  left: -103px;
  width: 352px;
  height: 190px;
  padding: 16px 12px 12px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 8px 8px 0 0;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgb(209, 213, 219) 0px 0px 0px 1px inset;
  opacity: 0;
  visibility: hidden;
  z-index: -1;
  transform: translate3d(0, 190px, 0);
  transition: top 500ms ease-in-out;

  ${({ toggle }: any) =>
    toggle &&
    css`
      opacity: 1;
      visibility: visible;
      z-index: 10;
      transform: translate3d(0, 0, 0);
    `};
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const DefaultButton = styled.button`
  padding: 6px 0;
  outline: none;
  border: none;
  border-radius: 4px;
`;

export const SubmitButton = styled(DefaultButton)`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.skyblue};
`;
