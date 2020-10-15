
## PieChart

### 基础用法
饼图用法。
:::demo 

```html 
    <el-row>
        <infinite-pie-chart 
            style="height: 300px; width: 800px; margin: 0 auto;"
            :type="'nightingale'"
            :axisName="{name:'年份', value:'GDP(亿美元)'}"
        >
        </infinite-pie-chart>    
    </el-row>
```

