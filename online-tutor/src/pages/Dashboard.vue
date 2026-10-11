<template>
  <div style="background-color: #368CEB;">
    <v-card>
      <v-toolbar color="primary">
        <v-toolbar-title>PRO EDU</v-toolbar-title>

        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn icon="mdi-dots-vertical"></v-btn>

        <template v-slot:extension>
          <v-tabs v-model="tab" align-tabs="title">
            <v-tab
              v-for="item in items"
              :key="item"
              :text="item"
              :value="item"
              @click="$router.push('/' + item.toLowerCase())"
            />
          </v-tabs>
        </template>
      </v-toolbar>
    </v-card>

    <h2>Students</h2>

    <ul>
      <li v-for="student in arrayData" :key="student.id">
        {{ student.name }}
      </li>
    </ul>

    <router-view />
  </div>
</template>

<script>
  export default {
    props: {
      arrayData: {
        type: Array,
        default: () => [],
      },
    },

    data() {
      return {
        tab: 'Home',
        items: ['Home', 'Recordings', 'Courses', 'Contact'],
      }
    },
  }
</script>
