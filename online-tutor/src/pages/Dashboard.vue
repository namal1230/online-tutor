<template>
   <div style="background-color: #368CEB;">
     <v-card>
    <v-toolbar color="primary">
      <v-toolbar-title>PRO EDU</v-toolbar-title>

      <v-btn icon="mdi-magnify"></v-btn>

      <v-btn icon="mdi-dots-vertical"></v-btn>

      <template v-slot:extension>
        <v-tabs
          v-model="tab"
          align-tabs="title"
          spaced="both"
        >
          <v-tab
            v-for="item in items"
            :key="item"
            :text="item"
            :value="item"
            style="padding-left: 6vw;padding-right:6vw;"
            @click="$router.push(item)"
          ></v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
  </v-card>
   <router-view></router-view>
   </div>
</template>

<script>
  export default{
    data(){
        return{
            items:["Home","Recordings","Courses","Contact"],
        }
        
    },
    methods:{
        clicked(){
            alert("clicked trigger");
        }
    }
  };
</script>
