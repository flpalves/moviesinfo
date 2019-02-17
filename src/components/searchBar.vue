<template>
    <sui-form>
        
        <sui-form-field :inline="true" class="header">
            <h1>Movies Information</h1>
            <sui-input placeholder="Search one movie..." icon="search" :class="'massive'" v-model="searchS" @keydown.enter.prevent="refreshSearch"/>
            <!-- <sui-button size="massive" content="Search" @click.prevent="refreshSearch" /> -->
        </sui-form-field>
    </sui-form>
</template>

<script>

    export default {
        name: 'SearchBar',
        data: function(){
            return {
                searchS : '' 
            } 
        },
        methods : {
            refreshSearch : function(){
                this.$store.commit('SET_SEARCH',this.searchS);
                this.$emit('refreshsearch');
            }
        }
    }
</script>

<style lang="css" scoped>
    h1{
        display: inline;
    }
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

</style>
