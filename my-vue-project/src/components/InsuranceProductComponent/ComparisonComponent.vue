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
    <div class="main">
        <h2>比較結果</h2>
        <table v-if="policies.length === 2" border="1">
            <thead>
                <tr>
                    <th>項目</th>
                    <td style="background-color: #7d7d7d; color: white;">保單 1</td>
                    <td style="background-color: #7d7d7d; color: white;">保單 2</td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th>目的地</th>
                    <td>{{ policies[0].destination }}</td>
                    <td>{{ policies[1].destination }}</td>
                </tr>


                <tr>
                    <th>開始日期</th>
                    <td>{{ policies[0].startDate }} {{ policies[0].startHour }}:00</td>
                    <td>{{ policies[1].startDate }} {{ policies[1].startHour }}:00</td>
                </tr>
                <tr>
                    <th>旅遊天數</th>
                    <td>{{ policies[0].days }} 天</td>
                    <td>{{ policies[1].days }} 天</td>
                </tr>
                <tr>
                    <th>保額</th>
                    <td>{{ policies[0].insuranceAmount }} 萬元</td>
                    <td>{{ policies[1].insuranceAmount }} 萬元</td>
                </tr>
                <tr>
                    <th>額外傷害險</th>
                    <td>{{ policies[0].extraInjuryCoverage ? "✔️ 有" : "❌ 無" }}</td>
                    <td>{{ policies[1].extraInjuryCoverage ? "✔️ 有" : "❌ 無" }}</td>
                </tr>
                <tr>
                    <th>額外緊急醫療</th>
                    <td>{{ policies[0].extraEmergencyCoverage ? "✔️ 有" : "❌ 無" }}</td>
                    <td>{{ policies[1].extraEmergencyCoverage ? "✔️ 有" : "❌ 無" }}</td>
                </tr>
                <tr>
                    <th>額外運送補償</th>
                    <td>{{ policies[0].extraTransportCoverage ? "✔️ 有" : "❌ 無" }}</td>
                    <td>{{ policies[1].extraTransportCoverage ? "✔️ 有" : "❌ 無" }}</td>
                </tr>
                <tr>
                    <th>總保費</th>
                    <td>{{ policies[0].totalCost }} 元</td>
                    <td>{{ policies[1].totalCost }} 元</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="css" scoped>
table {
    width: 100%;
    border-collapse: collapse;
}

table tr {
    border-bottom: solid 2px white;
}

table tr:last-child {
    border-bottom: none;
}

table th {
    position: relative;
    width: 30%;
    background-color: #7d7d7d;
    color: white;
    text-align: center;
    padding: 10px 0;
}

table th:after {
    display: block;
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    top: calc(50% - 10px);
    right: -10px;
    border-left: 10px solid #7d7d7d;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
}

table td {
    text-align: left;
    width: 35%;
    text-align: center;
    background-color: #eee;
    padding: 10px 0;
}

.main {
    margin: 20px auto;
    align-items: center;
    width: 80%;
    font-size: 20px;
}

h2 {
    font-size: 30px;
    color: #222;
    text-align: center;
    font-weight: bold;
    margin-bottom: 25px;
}
</style>