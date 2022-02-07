import React from 'react';
import styled from 'styled-components';
import { Link, Text } from './../styled-components/common';
import { ArticleInfo } from './../components/ArticleInfo';

const ArticleContainer = styled.div`
  margin: 20px 0;
`;

const ArticleTitle = styled(Link)`
  font-size: 32px;
  font-weight: 600;
  text-decoration: none;
`;

const ArticleContent = styled(Text)`
  display: block;
  font-size: 18px;
`;

export const Article = ({ article }) => {
  const { title, url, created, read_time_min, short_content } = article;
  return (
    <ArticleContainer>
      <ArticleTitle href={url} target='blank'>
        {title}
      </ArticleTitle>
      <ArticleInfo created={created} readTime={read_time_min} />
      <ArticleContent>{short_content}</ArticleContent>
    </ArticleContainer>
  );
};
