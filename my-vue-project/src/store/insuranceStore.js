import { defineStore } from "pinia";

export const useInsuranceStore = defineStore("insuranceStore", {
    state: () => ({
        policies: [], // 儲存保單資料
    }),
    actions: {
        // 新增保單到比較清單
        addPolicy(policy) {
            if (this.policies.length >= 2) {
                alert("最多只能比較兩筆保單！");
                return;
            }
            alert("加入比較！");
            this.policies.push(policy);
        },
    },
    persist: true, // 自動將 state 儲存到 localStorage
});