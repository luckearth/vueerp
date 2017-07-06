<template>
    <el-row class="header el-col el-col-24">
        <el-col class="logo el-col-10 logo-width">
            ERP管理中心
        </el-col>
        <el-col :span="6">
            <el-dropdown>
                <span class="el-dropdown-link">
                    下拉菜单
                    <i class="el-icon-caret-bottom el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'navbar',
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.menu{background-color:#324157;line-height:2em}
.pull-right {
    float: right;
}

.el-menu {
    border-radius: 0 !important;
}
</style>