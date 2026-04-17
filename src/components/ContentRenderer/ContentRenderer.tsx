import BlockRenderer from './components/BlockRenderer';
import s from './ContentRenderer.module.scss'
import Button from 'components/Button';
import TableOfContents from './components/TableOfContents';

const ContentRenderer = ({ blocks, headers }) => {
  if (!blocks || !Array.isArray(blocks)) return null;
  
  return (
    <section className={s.content__section}>
      <TableOfContents headers={headers} blocks={blocks} />

      <div className={s.content}>
        {blocks.map((block, idx) => (
          <BlockRenderer key={idx} id={block.type === 'heading' ? block.id : undefined} block={block} />
        ))}
      </div>

      <Button className={s.pdf} view='dark'>Скачать PDF</Button>
    </section>
  );
};

export default ContentRenderer;
