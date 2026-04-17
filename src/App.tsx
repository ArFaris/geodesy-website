import { useLanguage } from 'contexts/LanguageContext';
import Header from 'components/Header';
import ArticleWrapper from 'components/ArticleWrapper';
import ContentRenderer from 'components/ContentRenderer';
import contentRu from 'content/analytics/gnss-receivers-state/gnss-receivers-state.ru.json';
import contentEn from 'content/analytics/gnss-receivers-state/gnss-receivers-state.en.json';

function App() {
  const { locale } = useLanguage();
  
  const content = locale === 'ru' ? contentRu : contentEn;

  return (
    <>
      <Header />
      <ArticleWrapper 
        category={locale === 'ru' ? 'Аналитика' : 'Analytics'}
        title={content.title}
        author={locale === 'ru' ? 'В.С. Вдовин' : 'V.S. Vdovin'}
        createdAt={locale === 'ru' ? '10 октября, 2025' : 'October 10, 2025'}
        readingTime={25}
        views={0}
        likes={0}
        image='/png/frame.png'
      />
      <ContentRenderer blocks={content.sections} headers={content.headers} />
    </>
  );
}

export default App;
