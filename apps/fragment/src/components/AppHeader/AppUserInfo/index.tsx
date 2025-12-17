import { css, cx } from '@/styled-system/css';
import { SystemStyleObject } from '@/styled-system/types';
import { useState } from 'react';

type Props = {
  name: string;
  css?: SystemStyleObject;
};

export const AppUserInfo = ({ name, css: cssProp }: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={cx(styles.root, css(cssProp))}>
      <button className={styles.button} onClick={() => setIsVisible((prev) => !prev)}>
        {name}
      </button>
      {!!isVisible && (
        <ul className={styles.menu}>
          <li>Item1</li>
          <li>Item2</li>
        </ul>
      )}
    </div>
  );
};

const styles = {
  root: css({
    position: 'relative',
    minWidth: '120px',
    display: 'flex',
    justifyContent: 'flex-end',
  }),
  button: css({
    fontWeight: 'bold',
    padding: '4px 8px',
    borderRadius: 'sm',
    cursor: 'pointer',
    _hover: {
      backgroundColor: 'gray.700',
    },
  }),
  menu: css({
    position: 'absolute',
    top: '100%',
    width: '100%',
    backgroundColor: 'gray.800',
    padding: '8px',
    borderRadius: 'sm',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  }),
};
