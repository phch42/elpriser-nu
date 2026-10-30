// src/pages/HistoryPage/HistoryPage.tsx

import { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import HourlyPrices from '../../components/HourlyPrices/HourlyPrices';
import { usePrices } from '../../hooks/usePrices';
import { useSettings } from '../../context/SettingsContext';
import {
  HistoryPageContainer,
  HistoryHeading,
  DatePickerContainer,
  DatePickerInput,
  CalendarIcon,
  SelectedDateHeading,
} from './HistoryPage.styled';

export default function HistoryPage() {
  const { settings } = useSettings();
  const region = settings.region;

  const [selectedDate, setSelectedDate] = useState(() => new Date());

  const { prices, isLoading, error } = usePrices(selectedDate, region);

  const today = useMemo(() => new Date(), []);
  const oldestDate = useMemo(() => {
    const date = new Date(today);
    date.setDate(date.getDate() - 6);
    return date;
  }, [today]);

  function formatDateForInput(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  function handleDateChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value) {
      setSelectedDate(new Date(`${event.target.value}T12:00:00`));
    }
  }

  return (
    <HistoryPageContainer>
      <HistoryHeading>Historik</HistoryHeading>

      <DatePickerContainer>
        <DatePickerInput
          id="history-date"
          type="date"
          aria-label="Vælg dato"
          value={formatDateForInput(selectedDate)}
          min={formatDateForInput(oldestDate)}
          max={formatDateForInput(today)}
          onChange={handleDateChange}
        />
        <CalendarIcon>
          <FontAwesomeIcon icon={faCalendarDays} />
        </CalendarIcon>
      </DatePickerContainer>

      {!region ? (
        <p>Vælg venligst en region under indstillinger.</p>
      ) : (
        <>
          {isLoading && <p>Henter elpriser...</p>}
          {error && <p>{error}</p>}

          {!isLoading && !error && (
            <>
              <SelectedDateHeading>
                Elpriser for{' '}
                {selectedDate.toLocaleDateString('da-DK', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </SelectedDateHeading>

              <HourlyPrices prices={prices} />
            </>
          )}
        </>
      )}
    </HistoryPageContainer>
  );
}