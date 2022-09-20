import { Button, Form, Input, Typography } from 'antd';
import Image from 'next/image';

const { Paragraph, Text } = Typography;
type Props = {};

const styles = {
  tinyText: {
    color: '#FFFFFF73',
    fontSize: '12px',
    lineHeight: '22px',
    marginLeft: '8px',
  },
  commentInput: {
    borderRadius: '8px',
    borderColor: '#434343',
    padding: '5px 12px',
  },
};

const Comment = (props: Props) => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px',
          marginBottom: '28px',
        }}
      >
        <Image
          src={'/images/default.png'}
          alt='defaul user avatar'
          width={32}
          height={32}
          style={{ borderRadius: '50%', cursor: 'pointer' }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: '4px' }}>
            <span
              style={{
                fontSize: '12px',
                lineHeight: '18px',
                color: '#FFFFFF73',
              }}
            >
              Han Solo
            </span>
            <span
              style={{
                fontSize: '11px',
                lineHeight: '18px',
                color: '#434343',
                marginLeft: '8px',
              }}
            >
              Commented on Chapter 35 • 24 min. ago
            </span>
          </div>
          <Paragraph style={{ color: ' #FFFFFFD9', marginBottom: '12px' }}>
            I had no idea such a sequel was coming as I thought the show had
            ended and Kyoto Animation took a hard hit from the tragedy but
            currently 4 episodes in as of writing this review, and I love every
            second of it.
          </Paragraph>
          <div className='flex-center' style={{ gap: '10px' }}>
            <div className='flex-center'>
              <Image
                src={'/icons/icon-thumbup.svg'}
                width={11}
                height={11}
                alt='like icon'
                style={{ cursor: 'pointer' }}
              />
              <span style={styles.tinyText}>61</span>
            </div>
            <div className='flex-center'>
              <Image
                src={'/icons/icon-comment.svg'}
                width={12}
                height={12}
                alt='comment icon'
                style={{ cursor: 'pointer' }}
              />
              <span style={styles.tinyText}>12</span>
            </div>
            <Text
              type='secondary'
              style={{ cursor: 'pointer' }}
              className='hover-primary'
            >
              Reply
            </Text>
          </div>
        </div>
      </div>
      <CommentForm />
    </div>
  );
};

const CommentForm = () => {
  return (
    <Form name='comment' autoComplete='off'>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
        <Image
          src={'/images/comment-avatar.png'}
          alt='user avatar'
          width={32}
          height={32}
          style={{ borderRadius: '50%', cursor: 'pointer' }}
        />

        <div style={{ width: '100%' }}>
          <Form.Item
            name='content'
            rules={[{ required: false, message: 'Comment cannot be blank' }]}
            style={{ marginBottom: '24px', maxWidth: '290px' }}
          >
            <Input placeholder='Add your comment' style={styles.commentInput} />
          </Form.Item>
          <Form.Item style={{ marginBottom: 0 }}>
            <Button
              type='primary'
              htmlType='submit'
              className='btn btn-primary flex-center'
              style={{ gap: '8px' }}
            >
              <Image
                src={'/icons/icon-send.svg'}
                alt='send icon'
                width={14}
                height={14}
                className='filter-white'
              />
              Add Comment
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
};

export default Comment;
