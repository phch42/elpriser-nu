import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 2rem;
  width: 100%;
  padding: 1rem 0 2rem;

  @media (min-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 2rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr) minmax(0, 1.1fr);
    gap: 2rem;
  }
`;

export const DashboardSection = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 1.25rem;
  border-radius: 12px;
  background: #201e1e;

  @media (min-width: 1200px) {
    min-height: 100%;
    padding: 1.5rem;
  }
`;

export const SectionHeading = styled.h2`
  margin: 0 0 1.5rem;
  color: var(--color-text);
  font-size: 1.65rem;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
`;

export const CurrentPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin: 0 auto 1rem;
`;

export const CurrentPriceCircle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 220px;
  max-width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #27282b;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  &::before {
    inset: 12px;
    border: 1px dashed #004d12;
  }

  &::after {
    inset: 24px;
    border: 1px dashed var(--color-accent);
  }

  @media (min-width: 1200px) {
    width: 250px;
    height: 250px;
  }
`;

export const CurrentPriceValue = styled.span`
  position: relative;
  z-index: 1;
  color: var(--color-accent);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
  overflow-wrap: anywhere;
`;

export const CurrentPriceUnit = styled.span`
  position: relative;
  z-index: 1;
  margin-top: 0.4rem;
  color: var(--color-accent);
  font-size: 0.8rem;
  font-weight: 500;
`;

export const CurrentPriceTime = styled.p`
  margin: 0;
  color: var(--color-accent);
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
`;

export const OverviewListSpacer = styled.div`
  height: 6.75rem;
  flex-shrink: 0;

  @media (max-width: 1199px) {
    display: none;
  }
`;

export const HistoryControls = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  @media (min-width: 1200px) {
    height: 6.75rem;
  }
`;

export const HistoryDateContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  transition: box-shadow 0.2s ease;

  &:focus-within {
    box-shadow: 0 0 14px rgba(255, 255, 255, 0.5);
  }
`;

export const HistoryDateInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 0.85rem 3rem 0.85rem 1rem;
  border: 1px solid #55565a;
  border-radius: 8px;
  background: #27282b;
  color: #ebebeb;
  font: inherit;
  color-scheme: dark;
  cursor: pointer;

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    right: 0;
    width: 3rem;
    height: 100%;
    opacity: 0;
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

export const SelectedDateHeading = styled.h3`
  width: 100%;
  margin: 0 0 1rem;
  color: #ebebeb;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
`;

export const Message = styled.p`
  margin: 1rem 0;
  color: var(--color-muted);
  text-align: center;
`;