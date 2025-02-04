<script setup>
import CalculatorComponent from '@/components/InsuranceProductComponent/CalculatorComponent.vue';
import ProductDetailComponent from '@/components/InsuranceProductComponent/ProductDetailComponent.vue';
import ProductSloganComponent from '@/components/InsuranceProductComponent/ProductSloganComponent.vue';
import CalculateSidebarComponent from '@/components/InsuranceProductComponent/CalculateSidebarComponent.vue'


</script>

<template>
    <div class="container">
        <div>
            <ProductSloganComponent></ProductSloganComponent>
        </div>
        <div>
            <ProductDetailComponent></ProductDetailComponent>
        </div>
        <div>
            <CalculatorComponent></CalculatorComponent>
        </div>

        <div><CalculateSidebarComponent></CalculateSidebarComponent></div>
    </div>
</template>

<style lang="css" scoped>
.container>div {
    width: 100%;
}
</style>