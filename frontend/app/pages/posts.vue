<script setup>
const { posts, loading, fetchPosts, createPost, deletePost } = usePosts()

const title = ref('')
const body = ref('')
const submitting = ref(false)

onMounted(() => {
    fetchPosts()
})

const submit = async () => {
    if (!title.value || !body.value) return

    submitting.value = true

    await createPost({
        title: title.value,
        body: body.value
    })

    title.value = ''
    body.value = ''

    submitting.value = false
}
</script>

<template>
    <div class="min-h-screen bg-gray-100 p-8">

        <!-- Header -->
        <div class="max-w-4xl mx-auto mb-8">
            <h1 class="text-3xl font-bold text-gray-800">🔥 Posts Dashboard</h1>
            <p class="text-gray-500">Nuxt 4 + Laravel API</p>
        </div>

        <!-- Create Form -->
        <div class="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow mb-8">
            <h2 class="text-xl font-semibold mb-4">Create Post</h2>

            <input v-model="title" placeholder="Title..."
                class="w-full border p-3 rounded mb-3 focus:outline-none focus:ring" />

            <textarea v-model="body" placeholder="Body..."
                class="w-full border p-3 rounded mb-3 focus:outline-none focus:ring" />

            <button @click="submit"
                class="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
                :disabled="submitting">
                {{ submitting ? 'Sending...' : 'Create 🚀' }}
            </button>
        </div>

        <!-- Loading -->
        <div v-if="loading" class="text-center text-gray-500">
            Loading posts...
        </div>

        <!-- Posts -->
        <div v-else class="max-w-4xl mx-auto grid gap-4">

            <div v-for="post in posts" :key="post.id"
                class="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition">
                <div class="flex justify-between items-start">

                    <div>
                        <h2 class="text-lg font-bold text-gray-800">
                            {{ post.title }}
                        </h2>

                        <p class="text-gray-600 mt-1">
                            {{ post.body }}
                        </p>
                    </div>

                    <button @click="deletePost(post.id)" class="text-red-500 hover:text-red-700 text-xl">
                        🗑
                    </button>

                </div>
            </div>

        </div>

    </div>
</template>