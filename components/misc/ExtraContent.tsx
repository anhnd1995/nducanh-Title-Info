import { Typography } from 'antd';
import Image from 'next/image';
import { type } from 'os';
import React from 'react';

const { Title, Text } = Typography;

type Props = {};

const ExtraContent = (props: Props) => {
  return (
    <div style={{ marginBottom: '12px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5,1fr)',
          gap: '8px',
          marginBottom: '22px',
        }}
      >
        <Image
          src='/images/title-thumbnail-1.jpeg'
          alt='title thumbnail image'
          layout='responsive'
          width={'100%'}
          height={126}
          objectFit='cover'
          style={{ borderRadius: '4px' }}
        />
        <Image
          src='/images/title-thumbnail-2.png'
          alt='title thumbnail image'
          layout='intrinsic'
          width={'100%'}
          height={'100%'}
          objectFit='cover'
          style={{ borderRadius: '4px' }}
        />
        <Image
          src='/images/title-thumbnail-3.jpeg'
          alt='title thumbnail image'
          layout='intrinsic'
          width={'100%'}
          height={'100%'}
          objectFit='cover'
          style={{ borderRadius: '4px' }}
        />
        <Image
          src='/images/title-thumbnail-4.png'
          alt='title thumbnail image'
          layout='intrinsic'
          width={'100%'}
          height={'100%'}
          objectFit='cover'
          style={{ borderRadius: '4px' }}
        />
        <Image
          src='/images/title-thumbnail-4.png'
          alt='title thumbnail image'
          layout='intrinsic'
          width={'100%'}
          height={'100%'}
          objectFit='cover'
          style={{ borderRadius: '4px' }}
        />
      </div>
      <Title level={5} style={{ marginBlock: '0 9px' }}>
        Credits
      </Title>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          marginBottom: '33px',
        }}
      >
        <IconInfo
          icon={'/images/publisher.png'}
          title='Kodansha'
          desc='Publisher'
        />
        <IconInfo
          icon={'/images/avatar-1.png'}
          title='Johnnie Christmas'
          desc='Story'
        />
        <IconInfo icon={'/images/avatar.png'} title='Jack T. Cole' desc='Art' />
      </div>

      <Title level={5} style={{ marginBlock: '0 4px' }}>
        Other Facts
      </Title>
      <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
        <Fact label='Last Updated' desc='2 days ago' />
        <Fact label='Age Rating' desc='Mature (18+)' />
        <Fact label='Color' desc='Black & White' />
        <Fact label='Origin Media' desc='Print' />
        <Fact label='Style Origin' desc='Japanese Comics (Manga)' />
        <Fact label='Copyright' desc='© Daruma Matsuura / Kodansha Ltd.' />
        <Fact label='Other Names' desc='Kasane -voleuse de visage' />
      </div>
    </div>
  );
};

type IconInfoProps = {
  icon: string;
  title: string;
  desc: string;
};

const IconInfo = ({ icon, title, desc }: IconInfoProps) => {
  return (
    <div className='flex-center' style={{ gap: '10px' }}>
      <Image src={icon} alt={title} width={40} height={40} />
      <div>
        <Text>{title}</Text>
        <p className='text-primary-45 text-description'>{desc}</p>
      </div>
    </div>
  );
};

type FactProps = {
  label: string;
  desc: string;
};
const Fact = ({ label, desc }: FactProps) => {
  return (
    <div>
      <Text
        type='secondary'
        style={{ width: '90px', marginRight: '2px', display: 'inline-block' }}
      >
        {label}
      </Text>
      <Text>
        <span style={{ marginRight: '8px' }}>:</span> {desc}
      </Text>
    </div>
  );
};

export default ExtraContent;
