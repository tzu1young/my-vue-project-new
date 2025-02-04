<script setup>
import { onMounted } from "vue";
import { useInsuranceStore } from "@/store/insuranceStore"; // 引入 pinia store
import { storeToRefs } from "pinia"; // 引入 storeToRefs
//pdf用
import { ref, reactive } from "vue";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


//pinia
const store = useInsuranceStore(); // 使用 pinia store
const { policies } = storeToRefs(store); // 取得 policies 陣列


// 在組件掛載時載入數據
onMounted(() => {
    // 不需要手動載入資料，因為 Pinia 自動處理了 persist
    // policies 已經會在 store 裡面同步更新
});

//pdf
// 初始化數據

const initData = reactive({

    formData: {},
    event: {
        savePdf: async () => {
            const element = document.getElementById("view");
            if (!element) return;


            const canvas = await html2canvas(element, {
                useCORS: true,
                backgroundColor: "#fff",
                scale: 4, // 提高解析度，避免縮小後模糊
            });

            const imgData = canvas.toDataURL("image/png");

            // **初始化 PDF**
            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "px",
                format: "a4",
            });


            // **將圖片等比例縮小後加入 PDF**
            pdf.addImage(imgData, "PNG", 0, 0, canvas.width * 0.2, canvas.height * 0.2);
            pdf.save("等比例縮小_A4.pdf");
        }



    },
});
</script>

<template>
    <div class="main" id="view">
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

    <div class="d-flex justify-content-center">
        <button class="pdfbtn" type="primary" @click="initData.event.savePdf">另存為PDF</button>
    </div>
</template>

<style lang="css" scoped>
table {
    width: 100%;
    border-collapse: collapse;
    /* white-space: nowrap;
    overflow-x: auto;
    min-width: 300px; */

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
    padding: 15px;

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

.pdfbtn {
    display: inline-block;
    padding: 10px 15px;
    background-color: lightgray;
    color: black;
    text-decoration: none;
    border-radius: 10px;
    font-size: 14px;
    font-weight: bold;
}

.pdfbtn:hover {
    background-color: #5E666E;
    color: white;
}
</style>