import React, { useEffect, useState } from 'react';
import Author from './Author.png';

export default function Articles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=qRHO1Uhr5HWl0BYIrrS06qIWDZNyIl0m');
                const data = await response.json();
                setArticles(data.results);
            } catch (error) {
                console.log(error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div>
            {articles.map((article) => (
                <div className='articleContainer' key={article.title}>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <div className='authorsStyle'>
                                <img src={Author} className='AuthorImage' alt="Author" />
                                <p style={{ marginLeft: 10 }}>{article.author}</p>
                            </div>
                            <p className='titleStyle'>{article.title}</p>
                            <p className='descriptionStyle'>{article.abstract}</p>
                            <div className='bottomStyle'>
                                <button className='buttonStyle'>JavaScript</button>
                            </div>
                        </div>
                        <div>
                            <img src={article.img} className='ArticleImage' alt="Article" />
                        </div>
                    </div>
                    <div className='ArticleDivider'></div>
                </div>
            ))}
        </div>
    );
}
