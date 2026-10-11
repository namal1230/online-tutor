<template>
  <Dashboard />
</template>

<script>
  import axios from 'axios'
  import Dashboard from '@/pages/Dashboard.vue'
  export default {
    components: { Dashboard },
    data () {
      return {
        arrayData: [],
      }},
    created () {
      this.fetchData();
    },
    methods: {
      fetchData () {
        console.log('Calling Laravel API...');

        axios.get('http://127.0.0.1:8000/api/students')
          .then(response => {
            this.arrayData = response.data
            console.log('API response:', response.data)
          })
          .catch(error => {
            console.error('API request failed:', error.message)
            console.error('Error details:', error.response?.data)
          })
      },
    } }
</script>
