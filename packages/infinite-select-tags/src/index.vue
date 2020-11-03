<template>
  <div class="infinite-select-tags">
    <el-popover v-model="visible"
                placement="bottom"
                :width="width"
                popper-class="infinite-select-popover"
                :visible-arrow="false">
      <div slot="reference"
           class="infinite-select">
        <el-input v-model="defaultSelect"
                  :placeholder="defaultPlaceholder"
                  readonlyunselectable="on">
          <i v-if="visible"
             slot="suffix"
             class="el-input__icon el-icon-arrow-up" />
          <i v-else
             slot="suffix"
             class="el-input__icon el-icon-arrow-down" />
        </el-input>
        <div v-if="showTags.length>0"
             class="infinite-selected-tag">
          <el-tag v-for="(item,i) in showTags"
                  v-show="i < tagsNum"
                  :key="item">{{ item }}</el-tag>
          <el-tag v-if="showTags.length > tagsNum"
                  class="last-tag">+{{ showTags.length-tagsNum }}</el-tag>
        </div>
      </div>
      <div class="infinite-select-group">
        <div v-for="(item,index) in options"
             :key="item.id"
             class="infinite-select-group-box">
          <el-checkbox v-model="item.isChecked"
                       :disabled="item.disabled"
                       @change="checkChange(item,index,$event)">
            {{ item.name }}</el-checkbox>
        </div>
      </div>
      <div class="infinite-select-button">
        <el-checkbox v-model="allChecked"
                     @change="allSelect">全选</el-checkbox>
        <infinite-button type="primary"
                         @click="makeSure">确定</infinite-button>
      </div>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'InfiniteSelectTags',
  props: {
    options: {
      // checkbox-group遍历的数据
      type: Array,
      default: () => []
    },
    tagsNum: {
      type: Number,
      default: 3
    },
    placeholder: {
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 200
    }
  },
  data () {
    return {
      defaultSelect: '',
      allChecked: false, // 是否全选
      showTags: [], // 输入框展示的tag
      visible: false // 控制popover是否显示
    }
  },
  computed: {
    defaultPlaceholder () {
      if (this.showTags.length > 0) {
        return ''
      } else {
        // debugger
        return this.placeholder
      }
    }
  },
  watch: {
    options: {
      handler (val, oldval) {
        if (oldval.length === 0) {
          // 仅仅是首次进入时生效
          this.options.forEach((el) => {
            if (el.disabled) {
              el.isChecked = true
              this.showTags.push(el.name)
            }
          })
        }
        if (val.every((el) => el.isChecked === true)) {
          this.allChecked = true
        } else {
          this.allChecked = false
        }
      },
      deep: true
    },
    visible (val) {
      if (!val) {
        this.options.forEach((el, index) => {
          if (this.showTags.includes(el.name)) {
            el.isChecked = true
          } else {
            el.isChecked = false
          }
          this.$set(this.options, index, el)
        })
      }
    }
  },
  created () {
    this.options.forEach((el) => {
      if (el.disabled) {
        el.isChecked = true
        this.showTags.push(el.name)
      }
    })
  },
  methods: {
    checkChange (item, index, e) {
      console.log(item, e, 'eee')
      this.options.forEach(el => {
        if (el.id === item.id) {
          el.isChecked = e
          this.$set(this.options, index, el)
        }
      })
    },
    makeSure () {
      // 点击确定按钮
      const selectedOption = this.options.filter((el) => el.isChecked === true)
      this.showTags = Array.from(selectedOption, ({ name }) => name) // 展示前五个+...
      this.defaultSelect =
        this.showTags.length > 5
          ? this.showTags.slice(0, 5).join(',') + '...'
          : this.showTags.join(',')
      this.visible = false
      this.$emit('selectChange', selectedOption)
    },
    allSelect (val) {
      // 全选按钮的点击事件
      this.options.forEach((el) => {
        (val || (!val && !el.disabled)) && (el.isChecked = val)
      })
    }
  }
}
</script>
