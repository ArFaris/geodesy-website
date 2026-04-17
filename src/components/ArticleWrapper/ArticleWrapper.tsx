import EmailIcon from 'components/icons/EmailIcon';
import MaksIcon from 'components/icons/MaksIcon';
import CopyIcon from 'components/icons/CopyIcon';
import DotIcon from './components/DotIcon';
import Text from 'components/Text';
import s from './ArticleWrapper.module.scss';
import cn from 'classnames';

type ArticleWrapperProps = {
    image: string;
    category: string;
    title: string;
    author: string;
    createdAt: string;
    readingTime: number;
    views: number;
    likes: number;
}

const ArticleWrapper = ({image, category, title, author, createdAt, readingTime, views, likes}: ArticleWrapperProps) => {
    return (
        <section className={s.wrapper}>
            <img className={cn(s.img, s.img__desctop)} src={image} alt='Иллюстрация к статье'/>

            <div className={cn(s.page, s.main)}>
                <div>
                    <Text className={s.category} color='gray'>{category}</Text>
                    <Text weight='bold' view='title-small'>{title}</Text>
                </div>

                <img className={cn(s.img, s.img__mobile)} src={image} alt='Иллюстрация к статье'/>

                <div>
                    <Text className={s.author}>{`Автор: ${author}`}</Text>

                    <div className={s.group}>
                        <Text color='gray'>{createdAt}</Text>
                        <DotIcon />
                        <Text color='gray'>{`время чтения: ${readingTime} минут`}</Text>
                    </div>
                </div>

                <div className={s.group}>
                    <Text color='gray'>{`${views} просмотров`}</Text>
                    <DotIcon />
                    <Text color='gray'>{`${likes}`}</Text>
                </div>

                <div className={s.links}>
                    <CopyIcon />
                    <EmailIcon />
                    <MaksIcon />
                </div>
            </div>
        </section>
    );
}

export default ArticleWrapper;
