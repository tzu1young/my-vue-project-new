<script>
export default {
  data() {
    return {
      destination: "131", // 預設選擇日本
      startYear: 114,
      startMonth: 1,
      startDay: 16,
      startHour: 22,
      days: 3,
      insuranceAmount: 1000,
      extraInjuryCoverage: false,
      extraEmergencyCoverage: false,
      extraTransportCoverage: false,
    };
  },
  computed: {
    isOverseas() {
      return this.destination !== "098"; // 判斷是否為國內
    },
    endDate() {
      const startDate = new Date(
        this.startYear + 1911, // 民國年轉公元年
        this.startMonth - 1,
        this.startDay,
        this.startHour
      );
      startDate.setDate(startDate.getDate() + this.days);
      return `${startDate.getFullYear()}年${startDate.getMonth() + 1}月${startDate.getDate()}日 ${startDate.getHours()}:00`;
    },
    insuranceCost() {
  if (this.insuranceAmount == 1000) {
      return 200 + this.days * 3;
    } else if (this.insuranceAmount == 700) {
      return 140 + this.days * 3;
    } else if (this.insuranceAmount == 500) {
      return 100 + this.days * 3;
    } else if (this.insuranceAmount == 300) {
      return 60 + this.days * 3;
    } else if (this.insuranceAmount == 100) {
      return 20 + this.days * 3;
    } else{
      return 0; // 預設值，防止意外情況
    }
  },
    totalCost() {
      let total = this.insuranceCost ;
      if (this.extraInjuryCoverage) total += Math.floor(this.insuranceCost / 3);
      if (this.isOverseas) {
        if (this.extraEmergencyCoverage) total +=  Math.floor(this.insuranceCost * 0.8);
        if (this.extraTransportCoverage) total +=  Math.floor(this.insuranceCost / 2);
      }
      return total;
    },
  },
  methods: {
    submit() {
      alert(`投保成功！總保費：${this.totalCost} 元`);
    },
  },
};
</script>

<template>
  <div class="insurance-calculator">
    <h2>旅遊保險試算</h2>

    <!-- 旅遊地點 -->
    <div class="section">
      <label for="destination">旅遊地點</label>
      <select v-model="destination" id="destination">
        <option value="098">國內</option>
        <option value="131" selected="selected">日本</option>
        <option value="132">南韓</option>
        <option value="101">中國大陸</option>
        <option value="141">香港</option>
        <option value="142">澳門</option>
        <option value="140">東南亞</option>
        <option value="143">新加坡</option>
        <option value="144">馬來西亞</option>
        <option value="145">印尼</option>
        <option value="146">泰國</option>
        <option value="147">菲律賓</option>
        <option value="148">越南</option>
        <option value="149">緬甸</option>
        <option value="150">寮國</option>
        <option value="532">帛琉</option>
        <option value="152">柬埔寨</option>
        <option value="156">馬爾地夫</option>
        <option value="301">歐洲申根國家</option>
        <option value="302">歐洲非申根國家</option>
        <option value="212">美國</option>
        <option value="211">加拿大</option>
        <option value="520">紐西蘭</option>
        <option value="510">澳大利亞</option>
        <option value="999">其他</option>
      </select>
    </div>

    <!-- 旅遊期間 -->
    <div class="section">
      <label>旅遊期間</label>
      <div class="inputs">
        <input type="number" v-model="startYear" placeholder="年" /> 年
        <input type="number" v-model="startMonth" placeholder="月" /> 月
        <input type="number" v-model="startDay" placeholder="日" /> 日
        <input type="number" v-model="startHour" placeholder="時" /> 時
        <input type="number" v-model="days" placeholder="天數" /> 天
      </div>
      <p>結束日期：{{ endDate }}</p>
    </div>

    <!-- 試算結果 -->
    <div class="section">
      <h3>試算結果</h3>
      <label for="insuranceAmount">保障內容</label>
      <select v-model="insuranceAmount" id="insuranceAmount">
        <option value="1000">1000萬</option>
        <option value="700">700萬</option>
        <option value="500">500萬</option>
        <option value="300">300萬</option>
        <option value="100">100萬</option>
      </select>
      <p>保險費用：{{ insuranceCost }} 元</p>   
    </div>
    
    <!-- 附加醫療 -->
    <!-- 富邦表格樣式 要和上面合併-->
    <div class="row py-3 m-0 align-items-center">
    <div class="col-12 col-md-auto ps-2 py-2 mx-2">
        <div class="d-flex align-items-center">
            <img src="" width="15" height="15" alt="icon_paperAdd" loading="lazy">
            <span>附加醫療</span>
        </div>
    </div>
    <div class="col-12 col-md-9">
        <div class="d-flex flex-wrap align-items-center justify-content-end">
            <div class="col-auto">
                <input type="checkbox" id="custom-check-medical" v-model="extraInjuryCoverage">
                <label for="custom-check-medical">傷害醫療</label>
            </div>
            <div class="col"></div>
            <div class="col-auto col-sm-4 col-lg-2 mb-2 text-end">
                <select id="medical-amt" name="MedicalAmt" class="form-select">
                    <option value="150" selected="">{{insuranceAmount * 0.1}}萬</option>
                </select>
            </div>
            <div class="col-2 col-lg-1 mb-2 text-end d-flex justify-content-end align-items-center p-1">
                <span>{{Math.floor(insuranceCost/3)}}</span>
            </div>
            <div class="col-auto d-flex align-items-center">
                元
            </div>
        </div>
        <div>
            <div class="d-flex flex-wrap justify-content-end">
                <div class="col-auto"  v-if="isOverseas">
                    <input type="checkbox" id="custom-check-abroad" name="add-checkbox" v-model="extraEmergencyCoverage">
                    <label for="custom-check-abroad">海外突發疾病醫療</label>
                    <i class="fas fa-question-circle" data-bs-toggle="modal" data-bs-target="#js-annex-terms"></i>
                </div>
                <div class="col"></div>
                <div class="col-auto col-sm-4 col-lg-2 mb-2 text-end" v-if="isOverseas">
                    <select id="abroad-amt" name="AbroadAmt" class="form-select">
                        <option value="150" selected="">{{insuranceAmount * 0.1}}萬</option>
                    </select>
                </div>
                <div class="col-2 col-lg-1 mb-2 text-end d-flex justify-content-end align-items-center p-1" v-if="isOverseas">
                    <span>{{Math.floor(insuranceCost * 0.8)}}</span>
                </div>
                <div class="col-auto d-flex align-items-center" v-if="isOverseas">
                    元
                </div>
            </div>
        </div>
        <div>
            <div>
                <div class="d-flex flex-wrap justify-content-end">
                    <div class="col-auto"  v-if="isOverseas">
                        <input type="checkbox" id="custom-check-transport" name="add-checkbox" v-model="extraTransportCoverage">
                        <label for="custom-check-transport">海外醫療專機運送</label>
                        <i class="fas fa-question-circle" data-bs-toggle="modal" data-bs-target="#js-annex-terms"></i>
                        <div style="display: none;">
                            <span>旅遊地點非服務區域</span>
                        </div>
                    </div>
                    <div class="col"></div>
                    <div class="col-2 col-lg-1 mb-2 text-end d-flex justify-content-end align-items-center p-1" v-if="isOverseas">
                        <span>{{Math.floor(insuranceCost/2)}}</span>
                    </div>
                    <div class="col-auto d-flex align-items-center" v-if="isOverseas">
                        元
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


    <!-- 保費合計 -->
    <div class="section">
      <h3>保費合計：{{ totalCost }} 元</h3>
    </div>

    <!-- 投保按鈕 -->
    <button @click="submit">立即投保</button>
  </div>
</template>



<style>
.insurance-calculator {
  font-family: Arial, sans-serif;
  margin: 20px;
}
.section {
  margin-bottom: 20px;
}
.inputs input {
  width: 50px;
  margin-right: 5px;
}
</style>
