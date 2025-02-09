<template>
    <div class="col-6">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col" class="w-25">Title</th>
                    <th scope="col">Content</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="post in posts">
                    <th scope="row">{{ post.id }}</th>
                    <td>{{ post.title }}</td>
                    <td>{{ post.content }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import api from "../../api.js";
export default {
    name: "Index",

    data() {
        return {
            posts: null
        }
    },

    mounted() {
        this.getPosts()
    },

    methods: {
        getPosts() {
            api.get('/api/auth/posts')
                .then( res => {
                    this.posts = res.data.data
                })
        }
    }
}
</script>

<style scoped>

</style>
