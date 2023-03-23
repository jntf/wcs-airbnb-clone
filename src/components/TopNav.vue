<template>
    <div class="flex justify-between px-24 border-b text-sm font-medium w-full pt-3 pb-6">
        <div class="h-10 flex justify-center items-center">
            <router-link to="/home">
                <img class="h-10" src="/logo.png" alt="logo" />
            </router-link>
        </div>
        <div
            class="h-6 pl-6 pr-2 py-6 flex justify-center items-center cursor-pointer border rounded-full shadow-md hover:shadow">
            <button class="border-r pr-3 text-black text-[13px] font-medium">N'importe où</button>
            <button class="border-r px-3 text-black text-[13px] font-medium">Une semaine</button>
            <button class="px-3 text-[#777777] font-light text-[13px]">Ajouter des voyageurs</button>
            <button class="bg-rose-500 rounded-full h-8 w-8 flex justify-center items-center">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                    style="display:block;fill:none;height:12px;width:12px;stroke:currentColor;stroke-width:5.333333333333333;overflow:visible"
                    aria-hidden="true" role="presentation" focusable="false">
                    <g fill="none">
                        <path
                            d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
                        </path>
                    </g>
                </svg>
            </button>
        </div>
        <div class="flex justify-center items-center cursor-pointer">
            <div class="p-3 text-black text-[13px] hover:bg-gray-100 rounded-full">Mettre mon logement sur Airbnb</div>
            <div class="p-3 rounded-full hover:bg-gray-100 flex justify-center items-center">
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false" style="display: block; height: 16px; width: 16px; fill: currentcolor;">
                    <path
                        d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z">
                    </path>
                </svg>
            </div>
            <div class="relative hover:shadow-md rounded-full border flex justify-center items-center text-[#777777] p-1"
                @click="show = !show">
                <div class="px-3">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                        focusable="false"
                        style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;">
                        <g fill="none" fill-rule="nonzero">
                            <path d="m2 16h28"></path>
                            <path d="m2 24h28"></path>
                            <path d="m2 8h28"></path>
                        </g>
                    </svg>
                </div>
                <img class="rounded-full h-8 w-8"
                    src="https://a0.muscache.com/im/users/25047179/profile_pic/1419147041/original.jpg?aki_policy=profile_small"
                    alt="">
                <div class="absolute top-0 right-0 bg-rose-500 h-3.5 w-3.5 border-2 border-white rounded-full"></div>
            </div>
            <div class="absolute top-12 right-0 bg-white border w-56 mt-10 mr-24 z-10 shadow-lg rounded-lg"
                :class="show ? '' : 'hidden'">
                <a href="#" class="block px-4 py-2 hover:bg-gray-200 bold">Messages</a>
                <RouterLink to="/table" class="block px-4 py-2 hover:bg-gray-200 bold">Table</RouterLink>
                <a href="#" class="block px-4 py-2 hover:bg-gray-200 bold">Notifications</a>
                <a href="#" class="block px-4 py-2 hover:bg-gray-200 bold">Voyages</a>
                <a href="#" class="block px-4 py-2 hover:bg-gray-200 bold">Favoris</a>
                <hr>
                <a href="#" class="block px-4 py-2 text-gray-500 hover:bg-gray-200 text-xs">Mettre mon logement sur
                    jnB&B</a>
                <a href="#" class="block px-4 py-2 text-gray-500 hover:bg-gray-200 text-xs">Créer une expérience</a>
                <a href="#" class="block px-4 py-2 text-gray-500 hover:bg-gray-200 text-xs">Parainner un hôte</a>
                <a href="#" class="block px-4 py-2 text-gray-500 hover:bg-gray-200 text-xs">Compte</a>
                <hr>
                <a href="#" class="block px-4 py-2 text-gray-500 hover:bg-gray-200 text-xs">Aide</a>
                <a href="#" class="block px-4 py-2 text-gray-500 hover:bg-gray-200 text-xs">Deconnexion</a>

            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { GET_USERNAME } from "../store/storeconstants";

export default defineComponent({
    name: 'TopNav',
    data() {
        return {
            show: false
        }
    },
    methods: {
        getUsername() {
            return this.$store.getters[`auth/${GET_USERNAME}`]
        },
    }
})

</script>