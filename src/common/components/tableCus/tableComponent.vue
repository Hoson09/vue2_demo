<template>
  <div class="tableBox">
    <h3>当前日期：{{ $utlizeFun.dateFormat(Date.now()) }}</h3>
    <table width="100%" v-if="tableDatas.length > 0">
      <colgroup>
        <col
          v-for="title in tableTitles"
          :key="title.prop"
          :width="title.width"
        />
      </colgroup>
      <thead>
        <tr v-for="i of titleNum" :key="i + 'theadNum'" height="40px">
          <template v-for="title in tableTitles">
            <template
              v-if="
                parseInt(title[`colspan${i}`]) > 0 &&
                parseInt(title[`rowspan${i}`]) > 0
              "
            >
              <th
                :key="title.prop + 'th' + i"
                :class="title[`thClass${i}`]"
                :colspan="parseInt(title[`colspan${i}`])"
                :rowspan="parseInt(title[`rowspan${i}`])"
              >
                <div
                  :class="title[`thDivClass${i}`]"
                  :style="[title[`thDivStyle${i}`]]"
                >
                  {{ title[`label${i}`] }}
                </div>
              </th>
            </template>
            <template
              v-else-if="
                parseInt(title[`colspan${i}`]) > 0 && !title[`rowspan${i}`]
              "
            >
              <th
                :key="title.prop + 'th' + i"
                :class="title[`thClass${i}`]"
                :colspan="parseInt(title[`colspan${i}`])"
              >
                <div
                  :class="title[`thDivClass${i}`]"
                  :style="[title[`thDivStyle${i}`]]"
                >
                  {{ title[`label${i}`] }}
                </div>
              </th>
            </template>
            <template
              v-else-if="
                parseInt(title[`rowspan${i}`]) > 0 && !title[`colspan${i}`]
              "
            >
              <th
                :key="title.prop + 'th' + i"
                :class="title[`thClass${i}`]"
                :rowspan="parseInt(title[`rowspan${i}`])"
              >
                <div
                  :class="title[`thDivClass${i}`]"
                  :style="[title[`thDivStyle${i}`]]"
                >
                  {{ title[`label${i}`] }}
                </div>
              </th>
            </template>
            <template
              v-else-if="!title[`rowspan${i}`] && !title[`colspan${i}`]"
            >
              <th :key="title.prop + 'th' + i" :class="title[`thClass${i}`]">
                <div
                  :class="title[`thDivClass${i}`]"
                  :style="[title[`thDivStyle${i}`]]"
                >
                  {{ title[`label${i}`] }}
                </div>
              </th>
            </template>
          </template>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(data, index) in tableDatas"
          :key="index + 'td'"
          height="40px"
        >
          <template v-for="title in tableTitles">
            <!-- 说明有些行要进行合并 -->
            <template v-if="parseInt(mergeAction(title.prop, index).row)">
              <td
                :rowspan="mergeAction(title.prop, index).row"
                :key="title.prop + 'tbodyTd'"
                :class="title.tdClass"
              >
                <template v-if="title.render">
                  <cusSlot
                    :column="title"
                    :row="data"
                    :index="index"
                    :render="title.render"
                  />
                </template>
                <template v-else>
                  <slot :name="title.prop" :row="data">
                    <div
                      :class="title.tdDivClass"
                      :style="[data[`${title.prop}Style`]]"
                    >
                      {{ data[title.prop] }}
                    </div>
                  </slot>
                </template>
              </td>
            </template>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/**
 * tableTitles: 表头 label1:代表第一层级的表头名;
 *                   prop:代表该表头对应的这一列的取值的属性值。
 *                   width:表示这个表头的宽度。
 *                   colspan1: 代表第一层的表头的列合并数
 *                   rowspan2：代表第二层的表头的行合并数
 * tableDatas: 表体 表格数据。
 */
//自定义函数式组件 ==START
let cusSlot = {
  functional: true, //代表这是一个函数式组件
  props: {
    column: Object, //接受父组件传来得数据
    row: Object,
    index: Number,
    /*接受父组件传来的回调函数，用于把JSX编写的DOM以及DOM上的事件抽取出来到数据脚本页面，
    尽量不污染外部组件，使组件更加的灵活轻便可复用。*/
    render: Function,
  },
  render: (h, context) => {
    //函数式组件用来渲染相应的DOM，有两个参数，h：render渲染函数，context：上下文对象，可以获取相应父组件传到props中的数据
    let cell = {
      column: context.props.column,
      row: context.props.row,
      index: context.props.index,
    };
    //使用父组件传来的render回调函数，将JSX编写的DOM对象抽取出去，保持组件的灵活性。*****关键*****
    /*因为Vue的render函数和JSX的结合不太好，
    所以我们一般只在渲染一些比较简单的DOM时,才使用JSX;
    而是当要渲染一个比较复杂功能的DOM时，一般使用createElement() 函数渲染一个虚拟DOM;
    如果要渲染DOM不仅功能复杂而且结构也很复杂时，建议使用slot 具名插槽来引入相应的DOM。*/
    return context.props.render(h, cell);
  },
};
//自定义函数式组件 ==END
export default {
  name: "tableBox",
  components: {
    cusSlot,
  },
  data() {
    return {
      needMergeRule: {}, //处理过后得到的每个column的合并规则
    };
  },
  props: {
    tableTitles: {
      type: Array,
      default: () => [],
    },
    tableDatas: {
      type: Array,
      default: () => [],
    },
    titleNum: {
      type: Number,
      default: 1,
    },
    needMergeArr: {
      //需要进行行合并的prop 集合
      type: Array,
      default: () => [],
    },
  },
  watch: {
    tableDatas: {
      handler(newVal) {
        if (newVal.length > 0) {
          this.needMergeRule = this.rowMergeHandle(this.needMergeArr, newVal); // 处理数据
        }
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    rowMergeHandle(needMergeArr = [], tableData = []) {
      if (needMergeArr.length === 0) return false;
      if (tableData.length === 0) return false;
      let needMerge = {};
      needMergeArr.forEach((i) => {
        needMerge[i] = {
          rowArr: [], //该数组用来记录在目前列中的每一行的cell应该向下合并几行还是应该被合并。如果对应数组的数据==0,则说明该cell应该被合并。
          rowMergeNum: 0, //用来记录在目前列的第几行的行数，rowNum
        };
        tableData.forEach((item, index) => {
          if (index === 0) {
            needMerge[i].rowArr.push(1);
            needMerge[i].rowMergeNum = 0;
          } else {
            if (item[i] === tableData[index - 1][i]) {
              needMerge[i].rowArr[needMerge[i].rowMergeNum] += 1;
              needMerge[i].rowArr.push(0);
            } else {
              needMerge[i].rowArr.push(1);
              needMerge[i].rowMergeNum = index;
            }
          }
        });
      });
      return needMerge;
    },
    isMergeRules(needMergeRule) {
      let ismerge = true;
      if (
        Object.prototype.toString.call(needMergeRule).slice(8, -1) ===
          "Boolean" &&
        !needMergeRule
      ) {
        ismerge = false;
      } else if (
        Object.prototype.toString.call(needMergeRule).slice(8, -1) ===
          "Object" &&
        JSON.stringify(needMergeRule) === "{}"
      ) {
        ismerge = false;
      }
      return ismerge;
    },
    mergeAction(val, rowIndex) {
      console.log("needMergeRule", this.needMergeRule);
      if (
        !this.isMergeRules(this.needMergeRule) ||
        !Object.keys(this.needMergeRule).includes(val)
      ) {
        return {
          row: 1,
          col: 1,
        };
      }
      let _row = this.needMergeRule[val].rowArr[rowIndex];
      let _col = _row > 0 ? 1 : 0;
      return { row: _row, col: _col };
    },
  },
};
</script>

<style lang="less">
.tableBox {
  width: 100%;
  table {
    border-collapse: collapse;
    border-spacing: 0px; //去除表格一些默认样式
    thead tr th {
      padding: 12px 16px;
      box-sizing: border-box;
    }
    tbody tr td {
      padding: 12px 16px;
      box-sizing: border-box;
    }
    thead {
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
      tr {
        th {
          position: relative;
          vertical-align: top;
          &.th-style {
            &::before {
              display: block;
              content: "";
              height: calc(100% - 24px);
              width: 1px;
              position: absolute;
              background-color: #000;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
            }
          }
          div {
            font-size: 16px;
            line-height: 1.5;
            text-align: left;
            min-height: 24px;
          }
        }
      }
    }
    tbody {
      border-bottom: 1px solid #000;
      tr {
        border-bottom: 1px solid #ccc;
        &:last-child {
          border-bottom: unset !important;
        }
        td {
          div {
            font-size: 16px;
            line-height: 1.5;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
