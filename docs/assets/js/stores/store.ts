import { defineStore } from 'pinia'
import { ref, type Ref, reactive } from 'vue'

export const useStoreStore = defineStore("store", () => {
    const currentPriceVariant: Ref<string> = ref("1m")
    const anySumFieldValues = reactive<Record<string, number>>({})

    return { currentPriceVariant, anySumFieldValues }
})