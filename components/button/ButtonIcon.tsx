import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';

const styles = {
  btnIcon: {
    width: '32px',
    height: '32px',
    padding: 0,
    display: 'grid',
    placeItems: 'center',
    borderColor: '#434343',
    borderRadius: '8px',
    boxShadow: ' 0px 2px 0px 0px #00000004',
    background: '#1F1F1F',
  },
};

type Props = {
  icon: string;
  width: string | number;
  height: string | number;
};

const ButtonIcon = ({ icon, width, height }: Props) => {
  return (
    <Button style={styles.btnIcon} className='border-hover text-primary-65'>
      <Image
        src={icon}
        alt='button icon'
        width={width}
        height={height}
        layout='fixed'
      />
    </Button>
  );
};

export default ButtonIcon;
