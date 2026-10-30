// src/components/DesktopDashboard/DesktopDashboard.tsx
import { useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import PriceSummary from '../PriceSummary/PriceSummary';
import HourlyPrices from '../HourlyPrices/HourlyPrices';
import { usePrices } from '../../hooks/usePrices';
import { useSettings } from '../../context/SettingsContext';
import {
  DashboardContainer,
  DashboardSection,
  SectionHeading,
  CurrentPriceContainer,
  CurrentPriceCircle,
  CurrentPriceValue,
  CurrentPriceUnit,
  CurrentPriceTime,
  HistoryControls,
  HistoryDateContainer,
  HistoryDateInput,
  CalendarIcon,
  SelectedDateHeading,
  OverviewListSpacer,
  Message,
} from './DesktopDashboard.styled';
  
export default function DesktopDashboard() {
  const { settings } = useSettings();
  const region = settings.region;

  const today = useMemo(() => new Date(), []);
  const [selectedDate, setSelectedDate] = useState(() => new Date());

  const {
    prices: todayPrices,
    isLoading: todayIsLoading,
    error: todayError,
  } = usePrices(today, region);

  const {
    prices: historyPrices,
    isLoading: historyIsLoading,
    error: historyError,
  } = usePrices(selectedDate, region);

  const now = new Date();

  const currentPrice = todayPrices.find((price) => {
    const start = new Date(price.time_start);
    const end = new Date(price.time_end);

    return now >= start && now < end;
  });

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
    <DashboardContainer>
      <DashboardSection>
        <SectionHeading>Lige nu</SectionHeading>

        {!region ? (
          <Message>Vælg venligst en region under indstillinger.</Message>
        ) : (
          <>
            {todayIsLoading && <Message>Henter elpriser...</Message>}
            {todayError && <Message>{todayError}</Message>}

            {!todayIsLoading && !todayError && (
              currentPrice ? (
                <CurrentPriceContainer>
                  <CurrentPriceCircle>
                    <CurrentPriceValue>
                      {currentPrice.DKK_per_kWh.toFixed(3)} KR
                    </CurrentPriceValue>
                    <CurrentPriceUnit>PR. KWH</CurrentPriceUnit>
                  </CurrentPriceCircle>

                  <CurrentPriceTime>
                    Kl.{' '}
                    {new Date(currentPrice.time_start).toLocaleTimeString(
                      'da-DK',
                      { hour: '2-digit', minute: '2-digit' }
                    )}
                    {' – '}
                    {new Date(currentPrice.time_end).toLocaleTimeString(
                      'da-DK',
                      { hour: '2-digit', minute: '2-digit' }
                    )}
                  </CurrentPriceTime>
                </CurrentPriceContainer>
              ) : (
                <Message>Ingen pris tilgængelig for den aktuelle time.</Message>
              )
            )}

            {!todayIsLoading && !todayError && (
              <PriceSummary prices={todayPrices} />
            )}
          </>
        )}
      </DashboardSection>

      <DashboardSection>
        <SectionHeading>Oversigt</SectionHeading>

        <OverviewListSpacer />

        {!region ? (
          <Message>Vælg venligst en region under indstillinger.</Message>
        ) : (
          <>
            {todayIsLoading && <Message>Henter elpriser...</Message>}
            {todayError && <Message>{todayError}</Message>}

            {!todayIsLoading && !todayError && (
              <HourlyPrices
                prices={todayPrices}
                desktopScrollable
              />
            )}
          </>
        )}
      </DashboardSection>

      <DashboardSection>
        <SectionHeading>Historik</SectionHeading>

        <HistoryControls>
          <HistoryDateContainer>
            <HistoryDateInput
              id="dashboard-history-date"
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
          </HistoryDateContainer>

          <SelectedDateHeading>
            Elpriser for{' '}
            {selectedDate.toLocaleDateString('da-DK', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </SelectedDateHeading>
        </HistoryControls>

        {!region ? (
          <Message>Vælg venligst en region under indstillinger.</Message>
        ) : (
          <>
            {historyIsLoading && <Message>Henter elpriser...</Message>}
            {historyError && <Message>{historyError}</Message>}

            {!historyIsLoading && !historyError && (
              <HourlyPrices
                prices={historyPrices}
                desktopScrollable
              />
            )}
          </>
        )}
      </DashboardSection>
    </DashboardContainer>
  );
}