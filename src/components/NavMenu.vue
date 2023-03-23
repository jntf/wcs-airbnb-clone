<template>
    <div class="flex justify-between shadow px-24 items-center w-full">

        <carousel items-to-scroll="10" :items-to-show="15" :transition="3000" class="w-[95%]">
            <slide v-for="(menu, i) in menubar" :key="i">
                <button @click="selectedMenu = menu.key"
                    :class="`${selectedMenu === menu.key ? 'border-b-2 border-black text-black' : 'text-[#777777] '}items-center py-3 cursor-pointer hover:border-b-2 w-full m-1`">
                    <div class="flex justify-center items-center">
                        <img class="h-8 w-6" :src="`${menu.src}`" />
                    </div>
                    <div class="">
                        <span class="text-[11px] block font-semibold">{{ menu.name }}</span>
                    </div>
                </button>
            </slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
        <button type="button" name="button" class="flex justify-center items-center mr-10" @click="onToggle">
            <div class="rounded-xl border text-sm flex py-3 px-2 shadow-md">
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                    style="display:block;height:14px;width:14px;fill:currentColor" aria-hidden="true" role="presentation"
                    focusable="false">
                    <path
                        d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z">
                    </path>
                </svg>
                <div class="px-2">Filters</div>
            </div>
        </button>
    </div>
    <transition name="fade">
        <div v-if="isModalVisible">
            <div @click="onToggle" class="absolute bg-black opacity-70 inset-0 z-0"></div>
            <div class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
                <div>
                    <div class="text-center p-3 flex-auto justify-center leading-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-purple-500 mx-auto"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd" />
                        </svg>
                        <h2 class="text-2xl font-bold py-4">Are you sure?</h2>
                        <p class="text-md text-gray-500 px-8">
                            Do you really want to exit without saving your work?
                        </p>
                    </div>
                    <div class="p-3 mt-2 text-center space-x-4 md:block">
                        <button
                            class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100">
                            Save
                        </button>
                        <button @click="onToggle"
                            class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import { defineComponent } from 'vue'
import menu_bar from '../database/menu_bar.json';

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Navigation, Slide } from 'vue3-carousel'


export default {
    name: 'itemsToShow',
    name: 'transition',
    name: 'wrapAround',
    components: {
        Carousel,
        Slide,
        Navigation
    },
    data() {
        return {
            selectedMenu: 'tendance',
            menubar: menu_bar,
            isModalVisible: false
        }
    },
    methods: {
        onToggle() {
            this.isModalVisible = !this.isModalVisible
        }
    },
}
</script>

<style scoped></style>
