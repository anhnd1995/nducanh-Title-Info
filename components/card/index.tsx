import { Card, Typography } from 'antd';
import Image from 'next/image';
import React, { CSSProperties, ReactNode } from 'react';

const { Title, Text } = Typography;

type Props = {
  children: ReactNode;
  styles?: {
    [key: string]: number | string;
  };
  className?: string;
};

const CardLayout = ({ styles, children, className }: Props) => {
  return (
    <Card
      style={{
        borderRadius: '8px',
        backgroundColor: '#141414',
        marginBottom: '24px',
      }}
      bordered={false}
      className={className}
      bodyStyle={styles}
    >
      {children}
    </Card>
  );
};

const CardMeta = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '17px',
        marginBottom: '24px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Image
          src='/icons/icon-book.svg'
          alt='book icon'
          layout='intrinsic'
          width={16}
          height={13}
        />
        <Text>74,483</Text>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <Image
          src='/icons/icon-like.svg'
          alt='like icon'
          layout='intrinsic'
          width={15}
          height={15}
        />
        <Text>15,863</Text>
      </div>
    </div>
  );
};

export { CardMeta };
export default CardLayout;
