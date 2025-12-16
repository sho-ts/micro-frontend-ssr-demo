import { env } from '@/env';
import { css } from '@/styled-system/css';

type Props = {
  name: string;
};

export const AppHeader = ({ name }: Props) => {
  return (
    <header className={styles.root}>
      <div className={styles.logo}>
        <img src={`${env.APP_URL}/static/dummy-logo.svg`} alt="dummy logo" />
      </div>
      <span className={styles.userName}>{name}</span>
    </header>
  );
};

const styles = {
  root: css({
    backgroundColor: 'gray.900',
    display: 'flex',
    gap: '16px',
    padding: '16px 32px',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'white',
  }),
  userName: css({
    marginLeft: 'auto',
    fontWeight: 'bold',
  }),
  logo: css({
    width: '160px',
    '& > img': {
      width: '100%',
      height: 'auto',
    },
  }),
};
