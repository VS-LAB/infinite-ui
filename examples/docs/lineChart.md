
## LineChart

### 基础用法
趋势图用法。
:::demo 

```html 
    <el-row>
        <infinite-line-chart 
            style="height: 300px; width: 800px; margin: 0 auto;"
            :isSmooth="true"
            :axisName="{name:'年份', value:'GDP(亿美元)', type:'国家'}"
        >
        </infinite-line-chart>    
    </el-row>
```

