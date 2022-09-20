import { Button, Col, Collapse, Divider, Row, Typography } from 'antd';
import Image from 'next/image';
import React from 'react';
import AboutCard from '../about/About';
import ButtonIcon from '../button/ButtonIcon';
import CardLayout, { CardMeta } from '../card';
import ChapterList from '../chapter';
import Comment from '../comment';
import ExtraContent from '../misc/ExtraContent';
import TagList from '../tag';
import RelatedTitlesList from '../title';

const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

const styles = {
  tinyCard: {
    padding: '12px',
    backgroundColor: '#1F1F1F',
    borderRadius: '8px',
    gap: '12px',
  },
  smallCard: {
    padding: '16px',
    backgroundColor: '#1F1F1F',
  },
  flexCenterBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

type Props = {};

const Layout = (props: Props) => {
  return (
    <Row gutter={{ md: 32, xl: 24 }}>
      <Col md={15} lg={16}>
        <CardLayout>
          <Row style={{ gap: '24px' }}>
            <Col flex='180px'>
              <div className='aspect-thumbnail relative'>
                <Image
                  src={'/images/kasane-thumbnail.png'}
                  alt='kasane thumbnail'
                  width={'100%'}
                  height={'100%'}
                  layout='fill'
                ></Image>
              </div>
            </Col>
            <Col
              flex='3'
              className='text-character-65'
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div className='flex-center-between'>
                  <Title level={2} style={{ marginBottom: '2px' }}>
                    Kasane
                  </Title>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <ButtonIcon
                      icon={'/icons/icon-shareAlt.svg'}
                      width={16}
                      height={16}
                    />
                    <ButtonIcon
                      icon={'/icons/icon-more.svg'}
                      width={12}
                      height={13}
                    />
                  </div>
                </div>
                <Title level={5} style={{ marginBottom: '6px', marginTop: 0 }}>
                  By Kodansha
                </Title>
                <Title level={5} style={{ marginBottom: '6px', marginTop: 0 }}>
                  Drama • 10 Chapters
                </Title>
                <CardMeta />
                <TagList
                  list={['18+', 'NEW', 'TRENDING', 'BESTSELLER', 'MANGA']}
                />
              </div>
              <Button className='btn btn-primary'>
                <p> Read First Chapter for FREE</p>
              </Button>
            </Col>
          </Row>
        </CardLayout>
        <CardLayout>
          <Title level={4} style={{ marginBottom: '16px' }}>
            Pricing & Promotion{' '}
          </Title>
          <Row
            style={{
              gap: '1px',
              marginBottom: '1px',
            }}
          >
            <Col
              flex='1'
              style={{ ...styles.smallCard, borderTopLeftRadius: '8px' }}
            >
              <Text>FREE </Text>
              <Title level={5} style={{ marginBlock: 0 }}>
                3 chapters{' '}
              </Title>
            </Col>
            <Col
              flex='1'
              style={{ ...styles.smallCard, borderTopRightRadius: '8px' }}
            >
              <Text>LOCKED </Text>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <Title level={5} style={{ marginBlock: 0 }}>
                  7 chapters{' '}
                </Title>
                <Text type={'secondary'}>
                  ({' '}
                  <i>
                    <img src='icons/icon-coin.svg' alt='icon coin' />
                  </i>{' '}
                  5 / chapter)
                </Text>
              </div>
            </Col>
          </Row>
          <div
            style={{
              ...styles.smallCard,
              borderRadius: '0 0 8px 8px',
              marginBottom: '16px',
            }}
          >
            <div className='flex-center-between'>
              <div>
                <Title level={5} style={{ marginBottom: '2px', marginTop: 0 }}>
                  Total Price
                </Title>
                <Text type='secondary'>
                  Instant access to all chapters • No Ad{' '}
                </Text>
              </div>
              <Button className='btn-CTA'>
                <Image
                  src={'/icons/icon-coin.svg'}
                  alt='like icon'
                  width={14}
                  height={14}
                />
                <span
                  style={{
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: '700',
                  }}
                >
                  35
                </span>
              </Button>
            </div>
            <Divider style={{ borderTop: '1px solid #141414' }} />
            <div className='flex-center-between'>
              <div>
                <Title
                  level={5}
                  style={{
                    marginBottom: '2px',
                    marginTop: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    color: '#A379FF',
                  }}
                >
                  Save money with INKR Extra
                  <Image
                    src={'/icons/icon-crown.svg'}
                    alt='crown icon'
                    width={16}
                    height={16}
                  />
                </Title>
                <Text type='secondary'>
                  Instant access to all chapters • No Ad • Extra saving
                </Text>
              </div>
              <div>
                <div style={{ display: 'flex', marginBottom: '8px' }}>
                  <Title
                    level={4}
                    style={{
                      padding: '6px 8px',
                      backgroundColor: '#651FFF',
                      width: 'fit-content',
                      borderRadius: '8px 0 0 8px',
                      marginBottom: 0,
                    }}
                  >
                    50%
                  </Title>
                  <Button
                    className='btn-CTA'
                    style={{ borderRadius: '0 8px 8px 0' }}
                  >
                    <Image
                      src={'/icons/icon-coin.svg'}
                      alt='like icon'
                      width={14}
                      height={14}
                    />
                    <span
                      style={{
                        fontSize: '12px',
                        lineHeight: '20px',
                        color: '#FFFFFF4D',
                        textDecoration: 'line-through',
                      }}
                    >
                      35
                    </span>
                    <span
                      style={{
                        fontSize: '16px',
                        lineHeight: '24px',
                        fontWeight: '700',
                      }}
                    >
                      18
                    </span>
                  </Button>
                </div>
                <p
                  style={{
                    fontSize: '12px',
                    lineHeight: '20px',
                    textAlign: 'right',
                    color: '#FFFFFF73',
                    fontStyle: 'italic',
                  }}
                >
                  Saving rates may vary
                </p>
              </div>
            </div>
          </div>
          <Text
            type='secondary'
            style={{ display: 'block', textAlign: 'center' }}
          >
            Want to read for free? Learn more{' '}
          </Text>
        </CardLayout>
        <CardLayout>
          <Title level={4} style={{ marginBottom: '10px' }}>
            Last read
          </Title>
          <Row
            style={{ ...styles.tinyCard, marginBottom: '23px' }}
            align='middle'
          >
            <Col style={{ aspectRatio: '78/62' }} flex='78px'>
              <Image
                src={'/images/chapter-thumbnail.png'}
                layout='fill'
                alt='Chapter thumbnail'
              />
            </Col>
            <Col flex='1'>
              <Text>Chapter 1</Text>
              <p className='text-description'>Last read 2 days ago </p>
            </Col>
          </Row>
          <div className='flex-center-between'>
            <div>
              <Title level={4} style={{ marginBottom: '4px' }}>
                10 chapters{' '}
              </Title>
              <Text type='secondary' style={{ marginBottom: '8px' }}>
                New chapter every Thursday{' '}
              </Text>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <ButtonIcon
                icon={'/icons/icon-bell.svg'}
                width={12}
                height={16}
              />
              <ButtonIcon
                icon={'/icons/icon-sort.svg'}
                width={12}
                height={13}
              />
            </div>
          </div>
          <ChapterList />
        </CardLayout>
      </Col>
      <Col md={9} lg={8}>
        <CardLayout styles={{ paddingBottom: '12px' }}>
          <Title level={4} style={{ marginBottom: '13px' }}>
            About This
          </Title>
          <Title level={5} style={{ marginBlock: '0 8px' }}>
            Genres
          </Title>
          <TagList list={['Horror', 'Psychological', 'Seinen']} />
          <Title level={5} style={{ marginBlock: '22px 9px' }}>
            Genres
          </Title>
          <AboutCard />
        </CardLayout>
        <CardLayout>
          <Title level={4}>Related Titles</Title>
          <RelatedTitlesList />
        </CardLayout>
        <CardLayout>
          <Title level={4} style={{ marginBottom: '16px' }}>
            12 Comments
          </Title>
          <Comment />
        </CardLayout>
        <CardLayout>
          <div className='flex-center-between' style={{ gap: '25px' }}>
            <div style={{ flex: 1 }}>
              <Title level={5} style={{ marginBottom: '4px' }}>
                Get The App
              </Title>
              <Text type='secondary'>
                Love this title? Scan the QR code to continue reading right on
                your mobile devices.
              </Text>
            </div>
            <Image
              src={'/icons/icon-qrcode.svg'}
              width={100}
              height={100}
              layout='fixed'
              alt={'QR image'}
            />
          </div>
        </CardLayout>
      </Col>
    </Row>
  );
};

export default Layout;
