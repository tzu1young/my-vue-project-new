<script setup>
import { onMounted } from "vue";
import { useInsuranceStore } from "@/store/insuranceStore"; // 引入 pinia store
import { storeToRefs } from "pinia"; // 引入 storeToRefs

const store = useInsuranceStore(); // 使用 pinia store
const { policies } = storeToRefs(store); // 取得 policies 陣列

// 在組件掛載時載入數據
onMounted(() => {
  // 不需要手動載入資料，因為 Pinia 自動處理了 persist
  // policies 已經會在 store 裡面同步更新
});
</script>

<template>
    <div>
        <h2>比較結果</h2>
        <table v-if="policies.length === 2" border="1">
            <thead>
                <tr>
                    <th>項目</th>
                    <th>保單 1</th>
                    <th>保單 2</th>
                </tr>
            </thead>
         
            <tbody>
            <tr>
                <td>目的地</td>
                <td>{{ policies[0].destination }}</td>
                <td>{{ policies[1].destination }}</td>
            </tr>
            
            
            <tr> 
                <td>開始日期</td>
                <td>{{ policies[0].startDate }} {{ policies[0].startHour }}:00</td>
                <td>{{ policies[1].startDate }} {{ policies[1].startHour }}:00</td>
            </tr>
            <tr>
                <td>旅遊天數</td>
                <td>{{ policies[0].days }} 天</td>
                <td>{{ policies[1].days }} 天</td>
            </tr>
            <tr>
                <td>保額</td>
                <td>{{ policies[0].insuranceAmount }} 萬元</td>
                <td>{{ policies[1].insuranceAmount }} 萬元</td>
            </tr>
            <tr>
                <td>額外傷害險</td>
                <td>{{ policies[0].extraInjuryCoverage ? "✔️ 有" : "❌ 無" }}</td>
                <td>{{ policies[1].extraInjuryCoverage ? "✔️ 有" : "❌ 無" }}</td>
            </tr>
            <tr>
                <td>額外緊急醫療</td>
                <td>{{ policies[0].extraEmergencyCoverage ? "✔️ 有" : "❌ 無" }}</td>
                <td>{{ policies[1].extraEmergencyCoverage ? "✔️ 有" : "❌ 無" }}</td>
            </tr>
            <tr>
                <td>額外運送補償</td>
                <td>{{ policies[0].extraTransportCoverage ? "✔️ 有" : "❌ 無" }}</td>
                <td>{{ policies[1].extraTransportCoverage ? "✔️ 有" : "❌ 無" }}</td>
            </tr>
            <tr>
                <td>總保費</td>
                <td>{{ policies[0].totalCost }} 元</td>
                <td>{{ policies[1].totalCost }} 元</td>
            </tr> 
            </tbody>
        </table> 
    </div>
</template>

<style lang="css" scoped></style>