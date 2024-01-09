import Head from 'next/head';
import MainLayout from '../../../layouts/Main';
import { useState } from 'react';
import { Page, FormContainer, Input, Button, PostList, PostItem } from './style';

const MyPage = () => {
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [posts, setPosts] = useState([
    { id: 1, title: '첫 번째 글', content: '이것은 첫 번째 글입니다.' },
    { id: 2, title: '두 번째 글', content: '이것은 두 번째 글입니다.' },
    { id: 2, title: '두 번째 글', content: '이것은 두 번째 글입니다.' },
    { id: 2, title: '두 번째 글', content: '이것은 두 번째 글입니다.' },
    { id: 2, title: '두 번째 글', content: '이것은 두 번째 글입니다.' },
    { id: 2, title: '두 번째 글', content: '이것은 두 번째 글입니다.' },

    // 추가적인 더미데이터를 필요에 따라 추가할 수 있습니다.
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPostWithId = { ...newPost, id: posts.length + 1 };
    setPosts((prevPosts) => [...prevPosts, newPostWithId]);
    setNewPost({ title: '', content: '' });
  };

  return (
    <>
      <Head>
        <title>타이거하우스</title>
        <meta name="description" content="타이거하우스" />
      </Head>

      <Page>
        <div>
          <h1>게시판</h1>

          {/* 입력 폼 */}
          <FormContainer>
            <form onSubmit={handleSubmit}>
              <Input type="text" name="title" placeholder="제목" value={newPost.title} onChange={handleInputChange} />
              <Input
                type="text"
                name="content"
                placeholder="내용"
                value={newPost.content}
                onChange={handleInputChange}
              />
              <Button type="submit">글 작성</Button>
            </form>
          </FormContainer>

          {/* 게시글 목록 */}
          <PostList>
            {posts.map((post) => (
              <PostItem key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </PostItem>
            ))}
          </PostList>
        </div>
      </Page>
    </>
  );
};

MyPage.layout = MainLayout;

export default MyPage;
