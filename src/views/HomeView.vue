<template>
  <div class="home">
    <h1>原生表格组件</h1>
    <tableComponent :tableTitles="tableTitle" :tableDatas="tableDatas">
      <template v-slot:projectType="{ row }">
        <span style="color: red">{{ row.projectType }}</span>
      </template>
      <template v-slot:developmentType="{ row }">
        <span style="color: blue">{{ row.developmentType }}</span>
      </template>
      <template v-slot:lifeCycleType="{ row }">
        <template v-if="row.softType === '非嵌入'">
          <div
            style="
              height: 100%;
              color: green;
              border: 1px solid #000;
              border-radius: 1em;
              padding-left: 4px;
              box-size: border-box;
            "
          >
            {{ row.lifeCycleType }}
          </div>
        </template>
        <template v-else>
          <div
            style="
              height: 100%;
              color: blue;
              border: 1px solid gold;
              border-radius: 1em;
              padding-left: 4px;
            "
          >
            {{ row.lifeCycleType }}
          </div>
        </template>
      </template>
    </tableComponent>
  </div>
</template>

<script>
// @ is an alias to /src
import { tableViewDataMixin } from "./tableViewData/tableViewDataMixin";
export default {
  name: "HomeView",
  mixins: [tableViewDataMixin],
};
</script>
