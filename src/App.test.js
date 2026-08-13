import { renderToStaticMarkup } from 'react-dom/server';
import App from './App';

test('renders category cards', () => {
  const markup = renderToStaticMarkup(<App />);

  expect(markup).toMatch(/hats/i);
  expect(markup.match(/shop now/gi)).toHaveLength(5);
});
