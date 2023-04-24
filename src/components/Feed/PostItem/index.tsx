import React from 'react';
import PostHeader from '../PostHeader';
import UserImg from '../UserImg';
import LikeBtn from '../LikeBtn';
import Comments from '../Comments';
import * as S from './style';
import { getUsers, getUsersImages, getUserData } from '../../../api/data';
import { StyledFaRegComment } from './style';
import { useFeed } from '../../../context/FeedContext';
import { useQuery } from 'react-query';
import { getPost, getPosts } from '../../../api/data';

function PostItem({ post }) {
  const { setIsCommentModal } = useFeed();
  const { isContentLoading, data: postContents } = useQuery('posts', getPosts);
  if (isContentLoading) {
    return <div>로딩중입니다</div>;
  }
  return (
    <S.PostItem>
      <S.TopSection>
        <UserImg size='small' url={post.author.userImg} />

        <PostHeader post={post} />
      </S.TopSection>

      <S.PostImg style={{ backgroundImage: `url(${post.postImg})` }} />

      <S.Reaction>
        <LikeBtn postId={post.id} />
        <StyledFaRegComment
          onClick={() => {
            setIsCommentModal(true);
          }}
        />
      </S.Reaction>

      <Comments postId={post.id} postContent={post.content} />
    </S.PostItem>
  );
}

export default PostItem;
