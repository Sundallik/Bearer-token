<template>
    <div class="col-3">
        <form>
            <div class="mb-3">
                <input type="email" class="form-control" v-model="email" placeholder="E-mail">
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" v-model="password" placeholder="Password">
            </div>

            <button type="submit" class="btn btn-primary" @click.prevent="login">Submit</button>

            <div v-if="error" class="text-danger">{{ this.error }}</div>
        </form>
    </div>
</template>

<script>
export default {
    name: "Login",

    data() {
        return {
            email: null,
            password: null,
            error: null
        }
    },

    methods: {
        login() {
            axios.post('api/auth/login', {email: this.email, password: this.password})
                .then( res => {
                    localStorage.setItem('access_token', res.data.access_token)
                    this.$router.push({ name: 'user.personal' })
                })
                .catch( error => {
                    this.error = error.response.data.error
                })
        }
    }
}
</script>

<style scoped>

</style>
