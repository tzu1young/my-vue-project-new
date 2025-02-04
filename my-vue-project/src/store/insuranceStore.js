import { defineStore } from "pinia";

export const useInsuranceStore = defineStore("insuranceStore", {
    state: () => ({
        policies: [],
    }),
    actions: {
        addPolicy(policy) {
            if (this.policies.length >= 2) {
                alert("最多只能比較兩筆保單！");
                return;
            }
            alert('加入比較！');
            this.policies.push(policy);
        },
    },
    persist: true, // 這樣就會自動存入 localStorage
});