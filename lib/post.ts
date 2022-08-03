import axios from 'axios'

export const getPost = async () => {
  try {
    const response = await axios.get(
      'https://drview-demo-default-rtdb.asia-southeast1.firebasedatabase.app/posts/-N511Zc4HAfIGOa0Xy1g.json',
    )

    return response.data
  } catch (error) {
    console.log(error)
  }
}
