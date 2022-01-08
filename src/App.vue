<template>
  <div class="main">
    <div :style="style" class="text-wrapper">
      测试的字效在这里生效
    </div>
    <fontArt
      @fontArtChange="getFont"
    />
  </div>
</template>

<script>
import fontArt from './components/fontArt.vue';
export default {
  data(){
    return {
      style: {},
    }
  },
  components:{
    fontArt
  },
  methods:{
    getFont(val){
      this.style = val;
    }
  }
}
</script>
<style scoped>
.text-wrapper{
  height: 50px;
  font-size: 30px;
  line-height: 50px;
}
</style>
