<template>
    <div>
        <router-link v-if="accessToken" :to="{ name: 'posts.index'}">Posts</router-link>

        <router-link v-if="accessToken" :to="{ name: 'user.personal'}" class="ml-4">Personal</router-link>
        <router-link v-if="!accessToken" :to="{ name: 'user.login'}" class="ml-4">Login</router-link>
        <router-link v-if="!accessToken" :to="{ name: 'user.registration'}" class="ml-4">Registration</router-link>
        <a v-if="accessToken" href="#" @click.prevent="logout" class="ml-4">Logout</a>

        <router-view :key="$route.fullPath" class="mt-4"></router-view>
    </div>
</template>

<script>
import api from "./api.js";

export default {
    name: "App",

    data() {
        return {
            accessToken: null
        }
    },

    mounted() {
        this.getAccessToken()
    },

    updated() {
        this.getAccessToken()
    },

    methods: {
        getAccessToken() {
            this.accessToken = localStorage.getItem('access_token')
        },

        logout() {
            api.post('/api/auth/logout')
                .then( res => {
                    localStorage.removeItem('access_token')
                    this.$router.push({ name: 'user.login'})
                })
        }
    }
}
</script>

<style scoped>

</style>
