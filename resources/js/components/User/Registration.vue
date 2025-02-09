<template>
    <div class="col-3">
        <form>
            <div class="mb-3">
                <input type="text" class="form-control" v-model="name" placeholder="Name">
            </div>
            <div class="mb-3">
                <input type="email" class="form-control" v-model="email" placeholder="E-mail">
                <p class="text-danger" v-if="error">{{ error }}</p>
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" v-model="password" placeholder="Password">
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" v-model="password_confirmation" placeholder="Confirm password">
            </div>

            <button type="submit" class="btn btn-primary" @click.prevent="storeUser">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Registration",

    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
            error: null
        }
    },

    methods: {
        storeUser() {
            console.log(this.name, this.email, this.password, this.password_confirmation)
            axios.post('/api/user', { name: this.name, email: this.email, password: this.password, password_confirmation: this.password_confirmation, })
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
