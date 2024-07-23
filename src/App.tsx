import { useState } from 'react';
import { css } from '../styled-system/css';
import { stack } from '../styled-system/patterns';

interface CardProps {
  title: string;
  category: string;
  author: string;
  image: string;
}

export function Card(props: CardProps) {
  const { title, category, author, image, ...rest } = props;

  return (
    <div
      className={stack({
        maxW: '320px',
        p: '6',
        gap: '5',
        border: '1px solid',
        borderColor: 'gray.400',
        bg: 'cardBg',
      })}
      {...rest}
    >
      <img src={image} alt={category} className={css({ objectFit: 'cover' })} />

      <div
        className={css({
          textTransform: 'uppercase',
          fontWeight: 'semibold',
          color: 'cardAccent',
        })}
      >
        {category}
      </div>
      <div
        className={css({
          fontSize: '2xl',
          fontFamily: 'cardTitle',
          fontWeight: 'semibold',
        })}
      >
        {title}
      </div>
      <div
        className={css({
          textTransform: 'uppercase',
          fontWeight: 'semibold',
          color: '#888',
        })}
      >
        By {author}
      </div>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState('');
  return (
    <div
      data-panda-theme={theme}
      className={stack({
        minH: '100dvh',
        pt: '96px',
        px: '24px',
      })}
    >
      <select onChange={(e) => setTheme(e.target.value)}>
        <option value=''>Cosmos</option>
        <option value='kent'>Kent</option>
        <option value='oxford'>Oxford</option>
      </select>
      <Card
        image='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyc3xlbnwwfHwwfHx8MA%3D%3D'
        category='New Post'
        title='What tech stack are developers currently using?'
        author='Christie Wood'
      />
    </div>
  );
}

export default App;
