<template>
  <div>
    <mt-cell-swipe title="标题文字"
                   style="position: relative"
                   :right="[{key:1,content: 'Delete',style: {background: 'red', color: '#fff'}}]"></mt-cell-swipe>
    <mt-cell-swipe title="标题文字2"
                   style="position: relative"></mt-cell-swipe>
  </div>
</template>

<script>
  // 引入全部组件
  import Vue from 'vue'

  import {
    CellSwipe
  } from 'mint-ui';

  Vue.component(CellSwipe.name, CellSwipe)

  export default {
    name: 'cellswipe',
    data() {
      return {}
    },
    mounted: function () {

    }
  }
</script>