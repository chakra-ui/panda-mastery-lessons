import { Badge } from '@mono/ui';
import { css } from '../../styled-system/css';

export default function Home() {
  return (
    <main>
      <div className={css({ bg: 'cobalt.400', color: 'white', p: '10' })}>
        <h1
          className={css({
            color: 'conf.primary',
            fontFamily: 'heading',
            fontSize: '4xl',
          })}
        >
          Welcome to Panda Conf 2024 🐼
        </h1>
        <p>The best conference on earth!</p>
        <Badge status='info'>Badge</Badge>
      </div>
    </main>
  );
}
