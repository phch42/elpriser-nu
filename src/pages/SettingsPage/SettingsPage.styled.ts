import styled from 'styled-components';

export const SettingsContent = styled.section`
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  padding: 1rem 1.5rem 3rem;

  @media (min-width: 768px) {
    padding: 2rem 2rem 3rem;
  }

  @media (min-width: 1200px) {
    padding: 2rem 3rem 3rem;
  }
`;

export const SettingsHeading = styled.h1`
  margin: 0 0 7rem;
  color: var(--color-text);
  font-size: 1.75rem;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;

  @media (min-width: 768px) {
    margin-bottom: 5rem;
    font-size: 2rem;
  }
`;

export const SettingsOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  width: 100%;
  max-width: 36rem;
  margin: 0 auto;

  @media (min-width: 768px) {
    gap: 3rem;
  }
`;

export const SettingRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const SettingLabel = styled.label`
  color: var(--color-text);
  font-size: 0.8rem;
  font-weight: 400;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ToggleButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 4.25rem;
  height: 2rem;
  padding: 0;
  border: none;
  border-radius: 2rem;
  background: transparent;

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 4px;
  }
`;

interface ToggleTrackProps {
  $enabled: boolean;
}

export const ToggleTrack = styled.span<ToggleTrackProps>`
  position: relative;
  display: block;
  width: 100%;
  height: 2rem;
  border-radius: 2rem;
  background: ${({ $enabled }) =>
    $enabled ? '#201e1e' : '#201e1e'};
  border: ${({ $enabled }) =>
    $enabled ? '1px dashed var(--color-accent)' : '1px solid #201e1e'};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: ${({ $enabled }) => ($enabled ? 'auto' : '0')};
    right: ${({ $enabled }) => ($enabled ? '0' : 'auto')};
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: var(--color-accent);
  }
`;

export const RegionSelect = styled.select`
  width: 7.5rem;
  min-height: 3rem;
  padding: 0.5rem;
  border: none;
  border-radius: 8px;
  background: #201e1e;
  color: var(--color-text);
  font-size: 0.75rem;
  text-transform: uppercase;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 3px;
  }

  option {
    background: #201e1e;
    color: var(--color-text);
  }
`;