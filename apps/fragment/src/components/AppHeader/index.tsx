import { css } from '@/styled-system/css';

type Props = {
  name: string;
};

export const AppHeader = ({ name }: Props) => {
  return (
    <header
      className={css({
        display: 'flex',
        gap: 16,
        padding: '16px 32px',
        width: '100%',
        justifyContent: 'space-between',
      })}
    >
      <h1>App Header</h1>
      <span>User: {name}</span>
    </header>
  );
};
