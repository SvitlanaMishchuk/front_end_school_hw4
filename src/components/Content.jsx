import React from 'react';
import styled from 'styled-components';
import articles from './../articles.json';
import { Article } from './../components/Article';

const ContentContainer = styled.div`
  margin: 80px 0;
`;

export const Content = () => {
  const list = articles.data.map((article) => (
    <Article article={article} key={article.id} />
  ));
  return <ContentContainer>{list}</ContentContainer>;
};
