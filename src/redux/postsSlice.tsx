import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { initialPosts } from '../utils/initialPosts'

export interface Post {
  profileImage: string
  name: string
  message: string
}

const initialState: Post[] = initialPosts

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    publishPost: (state, { payload }: PayloadAction<Post>) => {
      return [ ...state, payload ]
    },
  },
})

export const { publishPost } = postsSlice.actions

export default postsSlice.reducer
