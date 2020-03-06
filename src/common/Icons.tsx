import { styled } from '../theme';
import { FiInbox, FiCalendar } from 'react-icons/fi';
import { FaRegCalendarAlt } from 'react-icons/fa';

export const InboxIcon = styled(FiInbox)`
  font-size: 24px;
  stroke-width: 1;
  color: ${props => props.theme.icon.blue};
`;

export const CalendarIcon = styled(FiCalendar)`
  font-size: 24px;
  stroke-width: 1;
  color: ${props => props.theme.icon.green};
`;

export const AltCalendarIcon = styled(FaRegCalendarAlt)`
  font-size: 24px;
  stroke-width: 1;
  color: ${props => props.theme.icon.purple};
`;
