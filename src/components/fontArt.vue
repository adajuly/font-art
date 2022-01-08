<template>
  <div class="font-art-list-wrapper">
    <span class="art-title">艺术字</span>
    <div class="art-wrapper">
      <div
        v-for="(item, index) in artList"
        :key="index"
        class="art-item"
        @click="handleChooseArt(item.defaultStyle)"
      >
        <p :style="item.style">
          {{ item.label }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { TEXT_ART_MAP } from '../config/fontArt';
export default {
  name: 'fontEffect',
  data(){
    return {
      artList: TEXT_ART_MAP
    }
  },
  methods: {
    handleChooseArt(val){
      this.$emit('fontArtChange',val);
    }
  }
}
</script>

<style scoped lang="scss">
.font-art-list-wrapper{
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 1002;
  transition: all .28s;
  .art-title{
    flex: 1;
    font-size: 16px;
    margin: 10px 10px 0 0;
    font-weight: 700;
  }
  .art-wrapper{
    padding: 10px 0;
    height: 80%;
    overflow-y: auto;
    .art-item{
      display: inline-flex;
      height: 60px;
      width: 25%;
      color: #76838f;
      text-align: center;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      p{
        font-size: 28px;
        line-height: 34px;
        padding: 7px 10px;
        border: 2px solid #f7f7f7;
        border-radius: 4px;
      }
    }
  }
}
</style>
