<template>
    <div>
        <sui-grid :columns="3">
            <Result v-for="film in data" :film="film" />
        </sui-grid>
        
    </div>
</template>

<script>
    import Result from '../components/result.vue'

    export default {
        name: 'Results',
        props : {
            data : ''
        },
        components: {
            Result
        },
    }
</script>