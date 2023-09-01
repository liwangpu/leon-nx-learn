import { memo } from 'react';
// import styles from './index.module.less';

export const SimpleComponent: React.FC = memo(props => {

  return (
    // <div className={styles['page']}>
    //   <div className={styles['header']}>头部</div>
    // </div>

    <div>
      <div>header</div>
    </div>
  );
});

SimpleComponent.displayName = 'SimpleComponent';
