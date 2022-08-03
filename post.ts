export interface Post {
  key: string
  title: string
  content: string
  slug: string
  author: string
  publishDate: number
  categories: string[]
  thumbnail: string
  like: number
  read: number
  state: string
  description: string
  comments: {}[]
  view: number
  tags: string[]
  isReview: boolean
  location: string
  openTime: string
  star: number
  phone: string
}
