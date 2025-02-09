<template>
    <div v-if="user">
        <div>Name: {{ user.name }}</div>
        <div>E-mail: {{ user.email }}</div>
    </div>
</template>

<script>
import api from "../../api.js";
export default {
    name: "Personal",

    data() {
        return {
            user: null
        }
    },

    mounted() {
        this.getUser()
    },

    methods: {
        getUser() {
            api.post('/api/auth/me')
                .then( res => {
                    this.user = res.data
                })
        }
    }
}
</script>

<style scoped>

</style>
