<template>
  <div class="vueI18n">
    <h1>Vue-i18n 使用</h1>
    <template v-for="langItem in langs">
      <div class="divBox" :key="langItem.id">
        <input
          type="radio"
          name="langName"
          :id="langItem.id"
          :checked="langItem.id === 'cn'"
          @change="changeClick(langItem.id)"
        />
        <label :for="langItem.id">{{ langItem.lang }}</label>
      </div>
    </template>
    <div class="content">{{ i18nStr }}</div>
  </div>
</template>

<script>
export default {
  name: "vueI18n",
  data() {
    return {
      langs: [
        {
          id: "cn",
          lang: "中文",
        },
        {
          id: "en",
          lang: "English",
        },
        {
          id: "es",
          lang: "Spanish",
        },
        {
          id: "fr",
          lang: "French",
        },
        {
          id: "jp",
          lang: "Japanese",
        },
        {
          id: "ko",
          lang: "Korea",
        },
      ],
    };
  },
  computed: {
    i18nStr() {
      return `${this.$t("common.lang")}: ${this.$t("common.hello")}, ${this.$t(
        "private.welcome"
      )}`;
    },
  },
  methods: {
    changeClick(val) {
      console.log("changeClick val", val);
      this.$i18n.locale = val;
    },
  },
};
</script>
<style lang="less" scoped>
.vueI18n {
  .divBox {
    display: inline-block;
    margin: 10px;
  }
  .content {
    font-size: 16px;
    font-family: "Microsoft YaHei", sans-serif;
    font-weight: 700;
    line-height: 2.5;
    text-indent: 2em;
  }
}
</style>
