import Header from 'components/Header';
import ArticleWrapper from 'components/ArticleWrapper';
import ContentRenderer from 'components/ContentRenderer';
import content from 'content/analytics/gnss-receivers-state/gnss-receivers-state.ru.json';

function App() {


  return (
    <>
      <Header/>
      <ArticleWrapper category={'Аналитика'} title={'СОСТОЯНИЕ И РАЗВИТИЕ ИСПОЛЬЗОВАНИЯ ГНСС-ПРИЁМНИКОВ В МИРЕ'} author={'В.С.Вдовин'} createdAt={'10 октября, 2025'} readingTime={25} views={0} likes={0} image='/png/frame.png'/>
      <ContentRenderer blocks={content.sections} headers={content.headers}/>
    </>
  )
}

export default App;
