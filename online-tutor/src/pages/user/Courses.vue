<template>
   <div style="display: flex; flex-direction: column; padding: 30px;">
     <v-card max-width="344">
        <v-img height="200px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-img>

        <v-card-title>
            Spring Boot Master Course
        </v-card-title>

        <v-card-subtitle>
            124 hrs
        </v-card-subtitle>

        <v-card-actions>
            <v-btn color="blue-darken-2" text="Explore" @click="onRoute"></v-btn>

            <v-spacer></v-spacer>

            <v-icon color="blue" icon="mdi-cart-outline" size="large" @click="show = !show"></v-icon>
        </v-card-actions>
    </v-card>
   </div>
</template>
<script>
export default {
    methods: {
        onRoute() {
            this.$router.push("course-details");
        }
    }
}
</script>