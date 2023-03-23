<template>
    <div class="container mx-auto py-10">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
            <div v-for="(val, i) in bordeauxData.slice(0,50)" :key="i" class="">
                <img class="h-72 rounded-xl"
                    :src="`${val.picture_url}`" alt="">
                <div class="grid grid-cols-12">
                    <div class="col-span-10 pt-2">
                        <div class="bold flex">Bordeaux, France</div>
                        <div v-if="val.name.length < 28" class="text-gray-400 text-sm">
                            {{ val.name }}
                        </div>
                        <div v-else class="text-gray-400 text-sm">
                            {{ val.name.substring(0,28) }}...
                        </div>
                        <div class="text-gray-400 text-sm">{{ val.date }} • Particulier</div>
                        <div><span class="bold">{{ val.price }} €</span> par nuit</div>
                    </div>
                    <div class="flex col-span-2">
                        <span class="mt-1 mx-auto">
                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                role="presentation" focusable="false"
                                style="display: block; height: 12px; width: 12px; fill: currentcolor;">
                                <path
                                    d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                                    fill-rule="evenodd"></path>
                            </svg>
                        </span>
                        <span class="">{{ val.review_scores_rating }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import bordeaux from '../database/bordeaux.json';

export default {
    data() {
        return {
            bordeauxData: bordeaux
        }
    }
}
</script>