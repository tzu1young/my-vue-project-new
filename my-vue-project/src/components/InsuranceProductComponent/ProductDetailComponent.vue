<script setup>
 import { reactive } from 'vue';

const insuranceData = reactive([
  {
    policyName: "主約:安心保網路投保旅行平安保險",
    coverages: [
      { title: "意外身故保障", description: "給付保險金額" },
      { title: "意外失能保障", description: "保險金額 * 失能給付比例 (5%-100% 不等)" }
    ],
    details: "※詳細給付內容或條件限制，請參閱保單條款"
  },
  {
    policyName: "附約:安心保海外突發疾病醫療健康保險",
    coverages: [
      { title: "海外突發疾病住院醫療保險金", description: "實支實付(最高給付海外突發疾病醫療健康保險金額)" },
      { title: "海外突發疾病門診醫療保險金", description: "實支實付(每日最高給付海外突發疾病醫療健康保險金額*1.0%)" }
    ],
    details: "※詳細給付內容或條件限制，請參閱保單條款"
  },
  {
    policyName: "附約:安心保網路投保旅行平安保險海外醫療專機運送",
    coverages: [
      { title: "海外醫療專機服務", description: "提供被保險人於有效期間內接受住院治療後，經診斷需以醫療專機運送返臺時之服務 (提供一次為限)" }
    ],
    details: "※詳細給付內容或條件限制，請參閱保單條款"
  },
  {
    policyName: "附約:安心保旅行平安保險傷害醫療保險",
    coverages: [
      { title: "傷害醫療保障", description: "實支實付，最高給付本附約保險金額" }
    ],
    details: "※詳細給付內容或條件限制，請參閱保單條款"
  }
]);

</script>

<template>
    <h2>保障概覽</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">主約 / 附約</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in insuranceData" :key="item.policyName">
          <td>
            <button class="btn policy-header" data-bs-toggle="collapse" :data-bs-target="'#collapse_' + item.policyName" >
              {{ item.policyName }}
            </button>
            <div class="collapse" :id="'collapse_' + item.policyName">
              <div class="container">
                <h4>保障項目</h4>
                <div class="row" v-for="coverage in item.coverages" :key="coverage.title">
                  <div class="col-md-4 col-12">
                    <strong>{{ coverage.title }}:</strong>
                  </div>
                  <div class="col-md-8 col-12">
                    {{ coverage.description }}
                  </div>
                </div>
                <div class="row">
                  <div class="col text-center">
                    <small>{{ item.details }}</small>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </template>

<style lang="css" scoped>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #f9f9f9;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
    }
    h2 {
      text-align: center;
      font-size: 24px;
      color: #333;
      margin-bottom: 20px;
    }
    .policy-section {
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #fff;
      margin-bottom: 15px;
      overflow: hidden;
    }
    .policy-header {
      background-color: #ddd;
      color: #333;
      padding: 15px;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
    }
    
    .policy-header:hover {
      background-color: #5e666e;
      color: #fff;
    }
    .policy-content {
      padding: 20px;
      display: none;
    }
    .policy-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }
    .policy-table th, .policy-table td {
      border: 1px solid #ddd;
      padding: 10px;
      text-align: left;
    }
    .policy-table th {
      background-color: #f4f4f4;
      font-weight: bold;
    }
    .highlight {
      color: red;
      font-weight: bold;
    }
    .expand-icon {
      float: right;
      font-size: 20px;
      line-height: 1;
    }

</style>