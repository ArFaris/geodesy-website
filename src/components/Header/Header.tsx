import React, { useState, useContext, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router';
import Text from 'components/Text';
import s from './Header.module.scss';
import Button from 'components/Button';
import SearchIcon from 'components/icons/SearchIcon';
import BurgerMenu from './componenets/BurgerMenu';
import useBurgerMenu from 'hooks/useBurgerMenu';
import MenuIcon from 'components/icons/MenuIcon';
import cn from 'classnames';

export type Link = {
    description: string,
    to: string
}

const linksArr: Link[] = [
    {
        description: "Главная",
        to: "/"
    },
    {
        description: "Новости",
        to: "/news"
    },
    {
        description: "Обзоры",
        to: "/reviews"
    },
    {
        description: "Аналитика",
        to: "/analytics"
    },
    {
        description: "Статьи",
        to: "/articles"
    },
    {
        description: "Партнеры",
        to: "/partners"
    },
    {
        description: "Ссылки",
        to: "/links"
    },
    {
        description: "Магазин",
        to: "/shop"
    },
    {
        description: "О проекте",
        to: "/about"
    }
]

type HeaderProps = {
    image?: string,
    links?: Link[]
}

const Header: React.FC<HeaderProps> = ({image='/logo.svg', links=linksArr}: HeaderProps) => {
    const { isOpen, close, open } = useBurgerMenu();
    const [isSecondLevelVisible, setIsSecondLevelVisible] = useState(true);
    const lastScrollY = useRef(0);
    const frameId = useRef<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            if (frameId.current) {
                cancelAnimationFrame(frameId.current);
            }
            
            frameId.current = requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                
                if (currentScrollY === 0) {
                    setIsSecondLevelVisible(true);
                } else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                    setIsSecondLevelVisible(false);
                } else if (currentScrollY < lastScrollY.current) {
                    setIsSecondLevelVisible(true);
                }
                
                lastScrollY.current = currentScrollY;
            });
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (frameId.current) {
                cancelAnimationFrame(frameId.current);
            }
        };
    }, []);

    return (
        <>
            <div className={s.header}>
                <div className={s.header__main}>
                    <SearchIcon />
                    <img src={image} alt='Логотип' className={s.logo}/>

                    <div className={s.buttons}>
                        <Button view='strong'>Регистрация</Button>
                        <Button view='strong'>Вход</Button>
                    </div>

                    <MenuIcon onClick={open} className={s.menu}/>
                </div>

                <div className={cn(s.header__links, {
                    [s.hidden]: !isSecondLevelVisible
                })}>
                    {
                        links.map(link =>
                        <div key={link.to} className={s.borderEffect}>
                            <Text color='primary' view="p-16">
                            {link.description}
                        </Text></div>)
                    }
                </div>
            </div>

            <BurgerMenu onClose={close}
                        isOpen={isOpen}
                        links={links} />
        </>
    );
}

export default Header;
