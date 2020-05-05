<template>
  <div>
    <h1>Parent</h1>
    <h3>{{ msg }}</h3>
    <h5>vuex <span style="color: red">{{ count }}</span></h5>
    <h5>doubleCount <span style="color: red">{{ doubleCount }}</span></h5>
    <button @click="add">add</button>
    <m-child 
      v-bind:msg="'from Parent msg'" 
      @showMsg="showMsg" 
      ref="child" 
      v-bind="$attrs"
    />

  </div>
</template>
<script>
  import MChild from './Child'
  import { mapState, mapGetters } from 'vuex'
  export default {
    components: {
      MChild,
    },
    data() {
      return {
        msg: ''
      }
    },
    // computed: {
    //   count() {
    //     return this.$store.state.count
    //   }
    // },
    computed: {
      ...mapState({
      count: state => state.count.count,
     }),
     ...mapGetters([
       'doubleCount'
     ])
    },
    mounted() {
      console.log(this.$refs)
    },
    methods: {
      showMsg(val) {
        this.msg = val
      },
      add() {
        this.$store.dispatch('delayAdd')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>