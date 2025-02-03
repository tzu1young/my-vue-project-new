<script setup>

</script>

<template>
    <div>
        <h2>比較結果</h2>
        <table v-if="comparePolicies.length === 2" border="1">
            <tr>
                <th>項目</th>
                <th>保單 1</th>
                <th>保單 2</th>
            </tr>
            <tr>
                <td>目的地</td>
                <td>{{ getDestinationName(comparePolicies[0].destination) }}</td>
                <td>{{ getDestinationName(comparePolicies[1].destination) }}</td>
            </tr>
            <tr>
                <td>開始日期</td>
                <td>{{ comparePolicies[0].startDate }} {{ comparePolicies[0].startHour }}:00</td>
                <td>{{ comparePolicies[1].startDate }} {{ comparePolicies[1].startHour }}:00</td>
            </tr>
            <tr>
                <td>旅遊天數</td>
                <td>{{ comparePolicies[0].days }} 天</td>
                <td>{{ comparePolicies[1].days }} 天</td>
            </tr>
            <tr>
                <td>保額</td>
                <td>{{ comparePolicies[0].insuranceAmount }} 元</td>
                <td>{{ comparePolicies[1].insuranceAmount }} 元</td>
            </tr>
            <tr>
                <td>額外傷害險</td>
                <td>{{ comparePolicies[0].extraInjuryCoverage ? "✔️ 有" : "❌ 無" }}</td>
                <td>{{ comparePolicies[1].extraInjuryCoverage ? "✔️ 有" : "❌ 無" }}</td>
            </tr>
            <tr>
                <td>額外緊急醫療</td>
                <td>{{ comparePolicies[0].extraEmergencyCoverage ? "✔️ 有" : "❌ 無" }}</td>
                <td>{{ comparePolicies[1].extraEmergencyCoverage ? "✔️ 有" : "❌ 無" }}</td>
            </tr>
            <tr>
                <td>額外運送補償</td>
                <td>{{ comparePolicies[0].extraTransportCoverage ? "✔️ 有" : "❌ 無" }}</td>
                <td>{{ comparePolicies[1].extraTransportCoverage ? "✔️ 有" : "❌ 無" }}</td>
            </tr>
            <tr>
                <td>總保費</td>
                <td>{{ totalCost(comparePolicies[0].id) }} 元</td>
                <td>{{ totalCost(comparePolicies[1].id) }} 元</td>
            </tr>
        </table>
    </div>
</template>

<style lang="css" scoped></style>