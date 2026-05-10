export const usePosts = () => {
    const config = useRuntimeConfig()

    const posts = useState('posts', () => [])
    const loading = useState('loading', () => false)

    const fetchPosts = async () => {
        loading.value = true

        try {
            const res = await $fetch('http://127.0.0.1:8000/api/posts')
            posts.value = res
        } catch (e) {
            console.error(e)
        } finally {
            loading.value = false
        }
    }

    const createPost = async (data) => {
        await $fetch('http://127.0.0.1:8000/api/posts', {
            method: 'POST',
            body: data
        })

        await fetchPosts()
    }

    const deletePost = async (id) => {
        await $fetch(`http://127.0.0.1:8000/api/posts/${id}`, {
            method: 'DELETE'
        })

        posts.value = posts.value.filter(p => p.id !== id)
    }

    return {
        posts,
        loading,
        fetchPosts,
        createPost,
        deletePost
    }
}