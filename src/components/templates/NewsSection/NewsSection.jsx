import React from 'react';
import { Wrapper, NewsSectionHeader, ArticleWrapper, TitleWrapper } from './NewsSection.styles';
import { Button } from 'components/atoms/AddButton/AddButton';

const data = [
  {
    title: 'News1',
    category: 'Category1',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio est, laboriosam nulla corrupti magnam obcaecati soluta iste, aliquid expedita quidem quaerat voluptatum quasi tempora pariatur sunt, veniam quod vel dolorum',
  },
  {
    title: 'News2',
    category: 'Category1',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio est, laboriosam nulla corrupti magnam obcaecati soluta iste, aliquid expedita quidem quaerat voluptatum quasi tempora pariatur sunt, veniam quod vel dolorum',
    image: 'https://unsplash.it/500/400',
  },
  {
    title: 'News3',
    category: 'Category1',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio est, laboriosam nulla corrupti magnam obcaecati soluta iste, aliquid expedita quidem quaerat voluptatum quasi tempora pariatur sunt, veniam quod vel dolorum',
  },
  {
    title: 'News4',
    category: 'Category1',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio est, laboriosam nulla corrupti magnam obcaecati soluta iste, aliquid expedita quidem quaerat voluptatum quasi tempora pariatur sunt, veniam quod vel dolorum',
    image: 'https://unsplash.it/500/400',
  },
];

const NewsSection = () => {
  return (
    <Wrapper>
      <NewsSectionHeader>News feed section</NewsSectionHeader>
        {data.map(({ title, category, content, image = null}) => (
        <ArticleWrapper>
          <TitleWrapper>
            <h3>{title}</h3>
            <p>{category}</p>
          </TitleWrapper>
          <p>{content}</p>
          {image ? <img src={image} alt="preview" /> : null}
          <Button isBig={true}>Read more</Button>
        </ArticleWrapper>
      ))}
    </Wrapper>
  );
};

export default NewsSection;
