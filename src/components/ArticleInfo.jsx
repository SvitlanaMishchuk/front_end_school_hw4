import { format } from 'date-fns';
import React from 'react';
import styled from 'styled-components';
import { Text } from './../styled-components/common';

const ArticleInfoCntainer = styled.div`
  margin: 5px 0;
  span {
    display: inline-block;
  }
`;

const ArticleDateCreate = styled(Text)`
  margin-right: 10px;
`;

export const ArticleInfo = (props) => {
  const { created, readTime } = props;
  console.log('created', created, new Date(created));
  return (
    <ArticleInfoCntainer>
      <ArticleDateCreate>
        {format(new Date(created), "LLLL d',' yyyy")}
      </ArticleDateCreate>
      <Text>{`...${readTime} min read`}</Text>
    </ArticleInfoCntainer>
  );
};
