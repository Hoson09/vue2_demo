<template>
  <div class="tableBox">
    <h3>当前日期：{{ $utlizeFun.dateFormat(Date.now()) }}</h3>
  </div>
</template>

<script>
export default {
  name: "tableBox",
  data() {
    return {
      tableTitles: [
        {
          label: "",
          prop: "",
        },
      ],
      tableDatas: [],
    };
  },
};
</script>

<style lang="less"></style>
