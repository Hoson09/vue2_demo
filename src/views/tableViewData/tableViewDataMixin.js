export const tableViewDataMixin = {
  data() {
    return {
      tableTitle: [
        {
          label1: "序号", // 表头名称
          width: "100px", //表头宽度
          prop: "SN", //表头属性
        },
        {
          label1: "项目类别",
          prop: "projectType",
          width: "200px",
        },
        {
          label1: "软件类型",
          prop: "softType",
          width: "150px",
        },
        {
          label1: "研制类型",
          prop: "developmentType",
          width: "150px",
        },
        {
          label1: "生命周期类型",
          prop: "lifeCycleType",
          width: "200px",
        },
        {
          label1: "更改规模是否必填",
          prop: "changeIsRequired",
          width: "200px",
        },
        {
          label1: "更改规模是否显示",
          prop: "changeIsShow",
          width: "200px",
        },
        {
          label1: "子项目包含类型",
          prop: "subprojectContainsType",
          width: "200px",
        },
        {
          label1: "是否必须包含配置项",
          prop: "isMustIncludeConfigurationItems",
          width: "200px",
        },
        {
          label1: "是否包含开发计划",
          prop: "isIncludeDevelopmentPlan",
          width: "200px",
        },
        {
          label1: "操作",
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
