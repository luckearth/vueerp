<template>
    <div>
        <navbar></navbar>
        <el-row>
            <el-col :md="3">
                <sidebar></sidebar>
            </el-col>
            <el-col :md="21">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import navbar from './navbar.vue';
import sidebar from './sidebar.vue';
export default {
    data() {
        return {}
    },
    components: {
        navbar,
        sidebar
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
        margin-bottom: 0;
    }
}

.el-col {
    border-radius: 4px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    background: #d3dce6;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>
