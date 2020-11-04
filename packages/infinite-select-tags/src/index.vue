<template>
  <div class="infinite-select-tags">
    <el-select
      ref="infiniteSekectTags"
      v-model="showTags"
      multiple
      popper-class="infinite-select-popover"
      :placeholder="defaultPlaceholder"
      size="large"
    >
      <!-- popper展示核心内容 -->
      <div class="infinite-select-group">
        <div
          v-for="(item, index) in options"
          :key="item.id"
          class="infinite-select-group-box"
        >
          <el-checkbox
            v-model="item.isChecked"
            :disabled="item.disabled"
            @change="checkChange(item, index, $event)"
          >
            {{ item.name }}
          </el-checkbox>
        </div>
      </div>

      <!-- popper占位符 start -->
      <el-option
        v-for="item in options"
        :key="item.id"
        :value="item.id"
      ></el-option>
      <!-- popper占位符 end -->
      <div class="infinite-select-button">
        <el-checkbox v-model="allChecked" @change="allSelect">全选</el-checkbox>
        <infinite-button type="primary" @click="makeSure">确定</infinite-button>
      </div>
      <template slot="prefix">
        <div slot="reference" class="infinite-selected">
          <div v-if="showTags.length > 0" class="infinite-selected-tag">
            <el-tag
              v-for="(item, i) in showTags"
              v-show="i < tagsNum"
              :key="item"
              >{{ item }}</el-tag
            >
            <el-tag v-if="showTags.length > tagsNum" class="last-tag"
              >+{{ showTags.length - tagsNum }}</el-tag
            >
          </div>
        </div>
      </template>
    </el-select>
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
      default: '请选择'
    }
  },
  data () {
    return {
      defaultSelect: '',
      allChecked: false, // 是否全选
      showTags: [], // 输入框展示的tag
      selectedOption: []
    }
  },
  computed: {
    defaultPlaceholder () {
      if (this.showTags.length > 0) {
        return ''
      } else {
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
      this.options.forEach((el) => {
        if (el.id === item.id) {
          el.isChecked = e
          this.$set(this.options, index, el)
        }
      })
    },
    makeSure () {
      // 点击确定按钮
      this.selectedOption = this.options.filter((el) => el.isChecked === true)
      this.showTags = Array.from(this.selectedOption, ({ name }) => name) // 展示前五个+...
      this.defaultSelect =
        this.showTags.length > 5
          ? this.showTags.slice(0, 5).join(',') + '...'
          : this.showTags.join(',')
      this.$refs.infiniteSekectTags.blur()
      this.$emit('selectChange', this.selectedOption)
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
