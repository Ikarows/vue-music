<template>
    <!-- loading -->
    <div class="g_loadingbox" id="loadingBox" v-if="loading == 'show'">
        <i class="fa fa-spinner fa-spin fa-fw"></i>
        <span class="loading_text"><!-- Loading... --></span>
    </div>
</template>

<script>
export default {
    computed: {
        loading () {
            return this.$store.state.loading;
        }
    }
}
</script>

<style lang="css">
</style>
