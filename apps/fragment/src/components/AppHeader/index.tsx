import { env } from '@/env';
import { AppUserInfo } from '@/src/components/AppHeader/AppUserInfo';
import { css } from '@/styled-system/css';
import z from 'zod';

export const AppHeaderSchema = z.object({
  name: z.string().min(1),
});

type Props = z.infer<typeof AppHeaderSchema>;

export const AppHeader = ({ name }: Props) => {
  return (
    <header className={styles.root}>
      <div className={styles.logo}>
        <img src={`${env.VITE_APP_URL}/static/dummy-logo.svg`} alt="dummy logo" />
      </div>
      <AppUserInfo css={styles.userInfo} name={name} />
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
  userInfo: css.raw({
    marginLeft: 'auto',
  }),
  logo: css({
    width: '160px',
    '& > img': {
      width: '100%',
      height: 'auto',
    },
  }),
};
