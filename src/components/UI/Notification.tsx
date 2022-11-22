import { NotificationSection } from '@/components/UI/NotificationStyle';
import { NotificationType } from './types';

interface NotificationProps {
  content: NotificationType | null;
}

function Notification({ content }: NotificationProps) {
  const { status, title, message } = content!;
  let sectionClass = '';

  if (status === 'error') {
    sectionClass = 'error';
  }
  if (status === 'success') {
    sectionClass = 'success';
  }

  return (
    <NotificationSection className={sectionClass}>
      <h2>{title}</h2>
      <p>{message}</p>
    </NotificationSection>
  );
}

export default Notification;
