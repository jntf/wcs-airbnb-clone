<!-- write a table with all data from database/bordeaux.json -->
<template>
    <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
            <tr>
                <th class="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Listing ID</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ville</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lien Photo</th>
            </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="item in data" :key="item.id">
                <td class="px-2 py-4 text-xs whitespace-no-wrap">{{ item.listing_id }}</td>
                <td class="px-6 py-4 text-xs whitespace-no-wrap">{{ item.name }}</td>
                <td class="px-6 py-4 text-xs whitespace-no-wrap">{{ item.date }}</td>
                <td class="px-6 py-4 text-xs whitespace-no-wrap">{{ item.price }}</td>
                <td class="px-6 py-4 text-xs whitespace-no-wrap">Bordeaux</td>
                <td class="px-6 py-4 text-xs whitespace-no-wrap">{{ item.picture_url }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import data from '../database/bordeaux.json'

// create a search bar
// Filter by description, date, price


export default {
    name: 'Table',
    data() {
        return {
            data: data,
            search: ''
        }
    },
    computed: {
        filteredData() {
            return this.data.filter(item => {
                return item.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    }
}
</script>