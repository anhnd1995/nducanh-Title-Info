import { Col, Row, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const chapters = [
  {
    thumbnail: '/images/chapter-thumbnail.png',
    title: 'Chapter 1',
    locked: false,
  },
  {
    thumbnail: '/images/chapter-thumbnail.png',
    title: 'Chapter 2',
    locked: false,
  },
  {
    thumbnail: '/images/chapter-thumbnail.png',
    title: 'Chapter 3',
    locked: false,
  },
  {
    thumbnail: '/images/chapter-thumbnail.png',
    title: 'Chapter 4',
    locked: true,
  },
  {
    thumbnail: '/images/chapter-thumbnail.png',
    title: 'Chapter 5',
    locked: true,
  },
  {
    thumbnail: '/images/chapter-thumbnail.png',
    title: 'Chapter 6',
    locked: true,
  },
  {
    thumbnail: '/images/chapter-thumbnail.png',
    title: 'Chapter 7',
    locked: true,
  },
  {
    thumbnail: '/images/chapter-thumbnail.png',
    title: 'Chapter 8',
    locked: true,
  },
  {
    thumbnail: '/images/chapter-thumbnail.png',
    title: 'Chapter 9',
    locked: true,
  },
  {
    thumbnail: '/images/chapter-thumbnail.png',
    title: 'Chapter 10',
    locked: true,
  },
];

const { Text } = Typography;
const styles = {
  chaperList: {
    width: 'calc(100% + 48px)',
    marginLeft: '-24px',
  },
  chaperItem: {
    padding: '12px 24px',
  },
  chaperInfo: {
    gap: '12px',
    flex: '1',
  },
};
type Props = {};

const ChapterList = (props: Props) => {
  return (
    <div style={styles.chaperList}>
      {chapters &&
        chapters.length > 0 &&
        chapters.map((item) => <Chapter info={item} key={item?.title} />)}
    </div>
  );
};

type IChapter = {
  info: {
    thumbnail: string;
    title: string;
    locked: boolean;
  };
};

const Chapter = ({ info }: IChapter) => {
  return (
    <Link href='#'>
      <a style={styles.chaperItem} className='flex-center-between chapter-item'>
        <Row style={{ ...styles.chaperInfo }} align='middle'>
          <Col
            style={{ aspectRatio: '78/62', position: 'relative' }}
            flex='78px'
          >
            <Image
              src={info?.thumbnail}
              layout='fill'
              alt='Chapter thumbnail'
            />
            {info?.locked && (
              <div
                style={{
                  display: 'grid',
                  placeItems: 'center',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  background: '#0000004D',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <Image
                    src={'/icons/icon-lock.svg'}
                    alt='like icon'
                    width={8}
                    height={9}
                  />
                </div>
              </div>
            )}
          </Col>
          <Col flex='1'>
            <Text>{info?.title}</Text>
          </Col>
        </Row>
        {info?.locked ? (
          <Text
            type='secondary'
            style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
          >
            <Image
              src={'/icons/icon-coin.svg'}
              alt='like icon'
              width={14}
              height={14}
            />
            5
          </Text>
        ) : (
          <Text type='secondary'>FREE</Text>
        )}
      </a>
    </Link>
  );
};

export default ChapterList;
