import { Typography } from 'antd';
import Link from 'next/link';
import React from 'react';

const { Text } = Typography;

type Props = {
  list: string[];
};

const TagList = ({ list }: Props) => {
  if (!list) return null;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {list &&
        list.length > 0 &&
        list.map((item, index: number) => (
          <Tag text={item} key={`${item}-${index}`} />
        ))}
    </div>
  );
};

const Tag = ({ text }: { text: string }) => {
  return (
    <Link href={'#'}>
      <a
        className={'text-description hover-primary'}
        style={{
          paddingInline: '8px',
          borderRadius: ' 4px',
          border: '1px solid #434343',
        }}
      >
        {text}
      </a>
    </Link>
  );
};

export default TagList;
