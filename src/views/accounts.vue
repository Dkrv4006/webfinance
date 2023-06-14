<template>
    
    <Header>

        <Overview/>

    
    <div>
        <h2>Contas</h2>
        <v-btn to="/">home</v-btn>
    </div>
    </Header>
</template>

<script>
import {Header} from '@/components/header/Header.vue'
import Overview from '@/components/overview/overview.vue';
    export default {
        name:' AccountsView',
        components:{Header, Overview }
        
    }
</script>

<style  scoped>

</style>