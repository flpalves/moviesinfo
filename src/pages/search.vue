<template>
    <sui-grid divided :container="true" :doubling="true">
        <sui-grid-row stretched>
            <sui-grid-column>
                <sui-segment>
                    <SearchBar v-on:refreshsearch="getFilms()"/>
                </sui-segment>
            </sui-grid-column>
        </sui-grid-row>
        <sui-grid-row stretched>
            <sui-grid-column>
                <sui-segment>
                    <Results :data="results.Search"/>
                </sui-segment>
            </sui-grid-column>
        </sui-grid-row>
    </sui-grid>
</template>



<script>

    import SearchBar from '../components/searchBar.vue'
    import Results from '../components/results.vue'

    export default {
        name: 'Search',

        components: {
            SearchBar,
            Results
        },
        props : {
            
        },
        data: function(){
            return {
                results : '',
            }
        },
        
        mounted: function() {
            this.getFilms();
        },
        methods: {
            
            getFilms: function () {
                const baseURI = `http://www.omdbapi.com/?apikey=${this.$store.state.token}&s=${this.$store.state.search}&type=movie`
                this.$http.get(baseURI)
                .then((result) => {
                    this.results = result.data
                })
            }
            
        }
    }
</script>