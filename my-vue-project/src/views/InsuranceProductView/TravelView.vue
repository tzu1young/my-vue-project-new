<script setup>

import ProductNavbarComponent from '@/components/InsuranceProductComponent/ProductNavbarComponent.vue';
import TravelTitleComponent from '@/components/InsuranceProductComponent/TravelTitleComponent.vue'

</script>

<template>
    <div>
        <div>

            <div>
                <TravelTitleComponent></TravelTitleComponent>
            </div>
            <div>
                <ProductNavbarComponent></ProductNavbarComponent>
            </div>
            <div>

            </div>

            <ul>
                <li>
                    <!-- <RouterLink :to="{ name: 'travel' }">旅平險</RouterLink> -->
                </li>
                <li></li>
                <li></li>
            </ul>

        </div>
    </div>
</template>

<style lang="css" scoped></style>