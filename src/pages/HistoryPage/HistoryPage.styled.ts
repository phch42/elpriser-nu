import styled from 'styled-components';

export const HistoryPageContainer = styled.main`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HistoryHeading = styled.h1`
  margin: 0 0 3.5rem;
  color: var(--color-text);
  font-size: 1.75rem;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
`;

export const DatePickerContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.25);
  transition: box-shadow 0.2s ease;

  &:focus-within {
    box-shadow: 0 0 14px rgba(255, 255, 255, 0.5);
  }
`;

export const DatePickerInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 0.85rem 3rem 0.85rem 1rem;
  border: 1px solid #55565a;
  border-radius: 8px;
  background: #201e1e;
  color: #ebebeb;
  font: inherit;
  color-scheme: dark;
  cursor: pointer;

  &::-webkit-calendar-picker-indicator {
    opacity: 0;
    position: absolute;
    right: 0;
    width: 3rem;
    height: 100%;
    cursor: pointer;
  }

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
`;

export const CalendarIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  color: var(--color-accent);
  font-size: 1.4rem;
  pointer-events: none;
`;

export const SelectedDateHeading = styled.h2`
  width: 100%;
  margin: 0 0 1.25rem;
  color: #ebebeb;
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
`;