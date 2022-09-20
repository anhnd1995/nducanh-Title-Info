import { Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const { Text, Title } = Typography;
const styles = {};
type Props = {};

const RelatedTitlesList = (props: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <RelatedTitle />
      <RelatedTitle />
      <RelatedTitle />
    </div>
  );
};

const RelatedTitle = ({}) => {
  return (
    <Link href={'#'}>
      <a
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          width: 'calc(100% + 48px)',
          paddingInline: '24px',
          paddingBottom: '16px',
          borderBottom: '1px solid #FFFFFF1F',
        }}
      >
        <div
          style={{
            aspectRatio: '80/120',
            width: '100%',
            maxWidth: '80px',
            height: '100%',
            position: 'relative',
          }}
        >
          <Image
            src={'/images/related-thumbnail.png'}
            alt='related title thumbnail'
            layout='fill'
            objectFit='cover'
            style={{
              borderRadius: '10px',
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <Title level={5} style={{ marginBottom: 0 }}>
            Title Name 1
          </Title>
          <Text style={{ color: '#844CFF', fontWeight: 500 }}>
            <i style={{ marginRight: '5.5px' }}>
              <Image
                src={'/icons/icon-crown.svg'}
                alt='crown icon'
                width={13}
                height={11}
              />
            </i>
            EXCLUSIVE
          </Text>
          <Text type='secondary' style={{ display: 'block' }}>
            PREQUEL
          </Text>
          <Text type='secondary' style={{ display: 'block' }}>
            45.6K reads
          </Text>
        </div>
      </a>
    </Link>
  );
};

export default RelatedTitlesList;
