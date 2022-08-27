export const tableViewDataMixin = {
  data() {
    return {
      tableTitle: [
        {
          label1: "序号", // 表头名称
          rowspan1: "2",
          rowspan2: "0",
          width: "100px", //表头宽度
          prop: "SN", //表头属性
        },
        {
          label1: "总体分类",
          colspan1: "4",
          thClass1: "th-style",
          label2: "项目类别",
          thClass2: "th-style",
          prop: "projectType",
          width: "200px",
        },
        {
          label1: "",
          colspan1: "0",
          thClass1: "th-style",
          label2: "软件类型",
          thClass2: "th-style",
          prop: "softType",
          width: "150px",
        },
        {
          label1: "",
          colspan1: "0",
          thClass1: "th-style",
          label2: "研制类型",
          thClass2: "th-style",
          prop: "developmentType",
          width: "150px",
        },
        {
          label1: "",
          colspan1: "0",
          thClass1: "th-style",
          label2: "生命周期类型",
          thClass2: "th-style",
          prop: "lifeCycleType",
          width: "200px",
        },
        {
          label1: "权限",
          colspan1: "5",
          thClass1: "th-style",
          label2: "更改规模是否必填",
          thClass2: "th-style",
          prop: "changeIsRequired",
          width: "200px",
        },
        {
          label1: "",
          colspan1: "0",
          thClass1: "th-style",
          label2: "更改规模是否显示",
          thClass2: "th-style",
          prop: "changeIsShow",
          width: "200px",
        },
        {
          label1: "",
          colspan1: "0",
          thClass1: "th-style",
          label2: "子项目包含类型",
          thClass2: "th-style",
          prop: "subprojectContainsType",
          width: "200px",
        },
        {
          label1: "",
          colspan1: "0",
          thClass1: "th-style",
          label2: "是否必须包含配置项",
          thClass2: "th-style",
          prop: "isMustIncludeConfigurationItems",
          width: "200px",
        },
        {
          label1: "",
          colspan1: "0",
          thClass1: "th-style",
          label2: "是否包含开发计划",
          thClass2: "th-style",
          prop: "isIncludeDevelopmentPlan",
          width: "200px",
        },
        {
          label1: "操作",
          thClass1: "th-style",
          rowspan1: "2",
          rowspan2: "0",
          label2: "",
          thClass2: "",
          prop: "operation",
          width: "",
          render: (h, cell) => {
            return h("button", {
              style: {
                color: "red",
                fontSize: "14px",
                "background-color": "aquamarine",
                "border-radius": "1em",
                border: "1px solid #000",
              },
              on: {
                click: () => this.deleteClick(cell),
              },
              domProps: {
                innerText: "删除",
              },
            });
            /*这里也可以用JSX编写的DOM数据，(这个和上面的render函数渲染出来的虚拟DOM是同等的效果)
            这样就把本来应该写在html的DOM抽出来到JS中，
            然后也可以对这个自定义组件进行处理。这样exSlot这个组件可以进行最大程度的重用。可以保持html的相对简洁。
            但是这两种方法都有缺点，JSX在Vue2.0中并不成熟做不了复杂的DOM操作，render函数渲染虚拟DOM无法进行复杂的DOM嵌套操作，
            所以都不实用，如果遇到复杂的DOM嵌套和复杂的事件操作时，就需要借助v-slot来实现了。*/
            /* return (<button 
                style="color: red;fontSize: "14px";background-color: aquamarine;
                border-radius: 1em;border: 1px solid #000;" 
                onClick = {()=>this.deleteClick(cell)}>
                删除
                </button>)
             */
          },
        },
      ],
      tableDatas: [
        {
          SN: 1,
          projectType: "配置项顶级软件",
          softType: "非嵌入",
          developmentType: "一类",
          lifeCycleType: "一类模型",
          changeIsRequired: "否",
          changeIsShow: "否",
          subprojectContainsType: "是",
          isMustIncludeConfigurationItems: "否",
          isIncludeDevelopmentPlan: "否",
        },
        {
          SN: 2,
          projectType: "配置项顶级软件",
          softType: "非嵌入",
          developmentType: "二类",
          lifeCycleType: "二类模型",
          changeIsRequired: "否",
          changeIsShow: "否",
          subprojectContainsType: "是",
          isMustIncludeConfigurationItems: "否",
          isIncludeDevelopmentPlan: "否",
        },
        {
          SN: 3,
          projectType: "配置项顶级软件",
          softType: "非嵌入",
          developmentType: "三类",
          lifeCycleType: "三类模型",
          changeIsRequired: "否",
          changeIsShow: "否",
          subprojectContainsType: "是",
          isMustIncludeConfigurationItems: "否",
          isIncludeDevelopmentPlan: "否",
        },
        {
          SN: 4,
          projectType: "配置项顶级软件",
          softType: "非嵌入",
          developmentType: "四类",
          lifeCycleType: "四类瀑布",
          changeIsRequired: "否",
          changeIsShow: "否",
          subprojectContainsType: "是",
          isMustIncludeConfigurationItems: "否",
          isIncludeDevelopmentPlan: "否",
        },
        {
          SN: 5,
          projectType: "配置项顶级软件",
          softType: "非嵌入",
          developmentType: "四类",
          lifeCycleType: "四类迭代",
          changeIsRequired: "否",
          changeIsShow: "否",
          subprojectContainsType: "是",
          isMustIncludeConfigurationItems: "否",
          isIncludeDevelopmentPlan: "否",
        },
        {
          SN: 6,
          projectType: "配置项顶级软件",
          softType: "应用软件",
          developmentType: "一类",
          lifeCycleType: "一类模型",
          changeIsRequired: "否",
          changeIsShow: "否",
          subprojectContainsType: "是",
          isMustIncludeConfigurationItems: "否",
          isIncludeDevelopmentPlan: "否",
        },
        {
          SN: 7,
          projectType: "配置项顶级软件",
          softType: "应用软件",
          developmentType: "二类",
          lifeCycleType: "二类模型",
          changeIsRequired: "否",
          changeIsShow: "否",
          subprojectContainsType: "是",
          isMustIncludeConfigurationItems: "否",
          isIncludeDevelopmentPlan: "否",
        },
        {
          SN: 8,
          projectType: "配置项顶级软件",
          softType: "应用软件",
          developmentType: "三类",
          lifeCycleType: "三类模型",
          changeIsRequired: "否",
          changeIsShow: "否",
          subprojectContainsType: "是",
          isMustIncludeConfigurationItems: "否",
          isIncludeDevelopmentPlan: "否",
        },
      ],
    };
  },
  methods: {
    deleteClick(cell) {
      console.log("deleteClick", cell);
    },
  },
};
