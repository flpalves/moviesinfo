<template>
    <sui-grid-column>
        <sui-card>
            <sui-image :src="film.Poster" />
            <sui-card-content>
                <sui-card-header>{{film.Title}}</sui-card-header>
                <sui-card-meta>{{film.Year}}</sui-card-meta>
                <sui-button basic  @click.native="toggle">View More Info</sui-button>
            </sui-card-content>
            <!-- <sui-card-content extra>
                <sui-rating icon="star" :max-rating="10" :rating="10"/>
            </sui-card-content> -->
        </sui-card>
        <sui-modal v-model="open">
            <sui-modal-header>Movie informations</sui-modal-header>
            <sui-modal-content >
                <sui-modal-description>
                    <div v-if="filmInfo">
                        <p><strong>Title:</strong>{{filmInfo.Title}}</p>
                        <p><strong>Type:</strong>{{filmInfo.Type}}</p>
                        <p><strong>Year:</strong>{{filmInfo.Year}}</p>
                        <p><strong>Released:</strong>{{filmInfo.Released}}</p>
                        <p><strong>Genre:</strong>{{filmInfo.Genre}}</p>
                        <p><strong>Director:</strong>{{filmInfo.Director}}</p>
                        
                        <p><strong>Actors:</strong>{{filmInfo.Actors}}</p>
                        <p><strong>Country:</strong>{{filmInfo.Country}}</p>
                        <p><strong>Language:</strong>{{filmInfo.Language}}</p>
                        <p><strong>Awards:</strong>{{filmInfo.Awards}}</p>
                        <hr>
                        <p><strong>Plot:</strong>{{filmInfo.Plot}}</p>
                        <hr>
                        <h4>Ratings</h4>

                        <div>
                            {{filmInfo.imdbRating}}
                            <sui-rating :rating="parseInt(filmInfo.imdbRating)" :max-rating="10" />
                        </div>
                    </div>
                </sui-modal-description>
            </sui-modal-content>
            <sui-modal-actions>
                <sui-button positive @click.native="toggle">
                    Close
                </sui-button>
            </sui-modal-actions>
        </sui-modal>
    </sui-grid-column>
</template>

<script>
    export default {
        name: 'Result',
        props:{
            film : '',
            open : false,
            filmInfo : '',
        },
        methods: {
            toggle() {
                this.open = !this.open;
                console.log(this.open);
                if(this.open){
                    this.getMoreInfo();
                }
            },
            getMoreInfo(){
                const baseURI = `http://www.omdbapi.com/?apikey=19d394da&i=${this.film.imdbID}&plot=full`; 
                this.$http.get(baseURI)
                .then((result) => {
                    this.filmInfo = result.data
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    
</style>
