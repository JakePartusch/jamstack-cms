/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
    id
    title
    description
    content
    cover_image
    createdAt
    published
    previewEnabled
    categories
  }
}
`;
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
    id
    title
    description
    content
    cover_image
    createdAt
    published
    previewEnabled
    categories
  }
}
`;
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
    id
    title
    description
    content
    cover_image
    createdAt
    published
    previewEnabled
    categories
  }
}
`;
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
    id
    message
    createdBy
    createdAt
  }
}
`;
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
    id
    message
    createdBy
    createdAt
  }
}
`;
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    id
    message
    createdBy
    createdAt
  }
}
`;
export const createSettings = `mutation CreateSettings($input: CreateSettingsInput!) {
  createSettings(input: $input) {
    id
    categories
    adminGroups
    theme
    customStyles
  }
}
`;
export const updateSettings = `mutation UpdateSettings($input: UpdateSettingsInput!) {
  updateSettings(input: $input) {
    id
    categories
    adminGroups
    theme
    customStyles
  }
}
`;
export const deleteSettings = `mutation DeleteSettings($input: DeleteSettingsInput!) {
  deleteSettings(input: $input) {
    id
    categories
    adminGroups
    theme
    customStyles
  }
}
`;
export const createPreview = `mutation CreatePreview($input: CreatePreviewInput!) {
  createPreview(input: $input) {
    id
    title
    description
    content
    cover_image
    createdAt
    categories
  }
}
`;
export const updatePreview = `mutation UpdatePreview($input: UpdatePreviewInput!) {
  updatePreview(input: $input) {
    id
    title
    description
    content
    cover_image
    createdAt
    categories
  }
}
`;
export const deletePreview = `mutation DeletePreview($input: DeletePreviewInput!) {
  deletePreview(input: $input) {
    id
    title
    description
    content
    cover_image
    createdAt
    categories
  }
}
`;
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    avatarUrl
    owner
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    avatarUrl
    owner
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    avatarUrl
    owner
  }
}
`;
