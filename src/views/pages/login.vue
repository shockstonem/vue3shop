<template>
    <div>asdasd</div>
</template>
<script>
import { reactive, toRefs } from 'vue';

export default {
    setup() {
        const data = reactive({
            name: 'zs'
        })

        return {
            ...toRefs(data)
        }
    }
}
</script>

<style>

</style>