<template>
  <div>
    <h3>Child</h3>
    <h5>{{ msga }}</h5>
    <h6>{{ childMsg }}</h6>
    <button @click="passMsg">GO</button>
  </div>
</template>

<script>
import bus from '../util/bus'
export default {
  props: {
    msga: {
      type: String, 
      default: ''
    }
  },
  data() {
    return {
      childMsg: 'child Msg'
    }
  },
  mounted () {
    console.log('attrs', this.$attrs)
    bus.$on('passMsg', (val) => {
      this.childMsg = val
    });
  },
  methods: {
    passMsg() {
      this.$emit('showMsg', 'i am from Child')
    }
  }
}
</script>

<style scoped>

</style>