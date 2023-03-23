<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <div class="max-w-md w-full shadow-lg rounded-lg p-6 bg-white">
            <form name="login-form" class="flex flex-col space-y-4">
                <div class="flex flex-col"> <label for="username" class="font-bold text-gray-700">Username: </label> <input
                        type="text" id="username" v-model="input.username" class="border border-gray-300 rounded px-2
                        py-1" /> </div>
                <div class="flex flex-col"> <label for="password" class="font-bold text-gray-700">Password: </label> <input
                        type="password" id="password" v-model="input.password" class="border border-gray-300 rounded px-2
                        py-1" /> </div> <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    type="submit" v-on:click.prevent="login()"> Login </button>
            </form>
            <h3 class="mt-4 text-gray-800">Output: {{ this.output }}</h3>
        </div>
    </div>
</template>

<script>
import { SET_AUTHENTICATION, SET_USERNAME } from "../store/storeconstants";

export default {
    name: 'LoginView',
    data() {
        return {
            input: {
                username: "",
                password: ""
            },
            output: "",
        }
    },
    methods: {
        login() {
            //make sure username OR password are not empty
            if (this.input.username != "" || this.input.password != "") {
                this.output = "Authentication complete"
                //stores true to the set_authentication and username to the set_username 
                this.$store.commit(`auth/${SET_AUTHENTICATION}`, true);
                this.$store.commit(`auth/${SET_USERNAME}`, this.input.username);
                this.output = "Authentication complete."
                this.$router.push('/home')
            } else {
                this.$store.commit(`auth/${SET_AUTHENTICATION}`, false);
                this.output = "Username and password can not be empty"
            }
        },
    },
}
</script>