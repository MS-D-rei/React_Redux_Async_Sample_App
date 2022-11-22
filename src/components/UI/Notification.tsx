import { NotificationSection } from '@/components/UI/NotificationStyle';

interface NotificationProps {
  status: string;
  title: string;
  message: string;
}

function Notification({ status, title, message }: NotificationProps) {
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
