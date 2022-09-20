import { Button, Typography } from 'antd';
import React, { useState } from 'react';
import CardLayout from '../card';
import ExtraContent from '../misc/ExtraContent';
import TagList from '../tag';

const { Title, Paragraph, Text } = Typography;
type Props = {};

const AboutCard = (props: Props) => {
  const [collapse, setCollapse] = useState<boolean>(true);

  return (
    <>
      {collapse ? (
        <>
          <Paragraph type='secondary' style={{ marginBottom: '17px' }}>
            Kasane is an ugly girl who is severely bullied by her classmates
            because of her appearance; making things worse, Kasane&lsquo;s
            mother was a beautiful actress to whom Kasane is a dark contrast,
            even though she is as talented as her mother. Howe...
          </Paragraph>
          <Button
            type='link'
            block
            className='hover-primary'
            onClick={() => setCollapse(false)}
          >
            <Text type='secondary' className='hover-primary'>
              Show more
            </Text>
          </Button>
        </>
      ) : (
        <>
          <Paragraph type='secondary' style={{ marginBottom: '17px' }}>
            Kasane is an ugly girl who is severely bullied by her classmates
            because of her appearance; making things worse, Kasane&lsquo;s
            mother was a beautiful actress to whom Kasane is a dark contrast,
            even though she is as talented as her mother. However, there is
            nothing to do with this.
          </Paragraph>
          <ExtraContent />
        </>
      )}
    </>
  );
};

export default AboutCard;
