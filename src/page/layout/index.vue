<template>
    <el-row class="container">
        <el-col :span="24" class="header">
            <el-col :span="10" class="logo" :class="collapsed ? 'logo-collapse-width' : 'logo-width' ">
                {{collapsed ? short_title : title}}
            </el-col>
            <el-col :span="10">
                <div class="tools" @click.prevent="collapse">
                    <i class="fa fa-align-justify"></i>
                </div>
            </el-col>
            <el-col :span="4" class="userinfo">
                <el-dropdown trigger="hover">
                    <span class="el-dropdown-link userinfo-inner">
                        <i class="fa-lg fa fa-user-circle" aria-hidden="true"></i> {{username}}</span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <i class="fa fa-user" aria-hidden="true"></i> 个人资料</el-dropdown-item>
                        <el-dropdown-item>
                            <i class="fa fa-lock" aria-hidden="true"></i> 修改密码</el-dropdown-item>
                        <el-dropdown-item divided @click.native="logout">
                            <i class="fa fa-sign-out" aria-hidden="true"></i> 退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-col>
        <el-col :span="24" class="main">
            <aside :class="collapsed?'menu-collapsed':'menu-expanded'">
                <!--导航菜单-->
                <el-menu :default-active="$route.path" @open="handleopen" @close="handleclose" @select="handleselect" unique-opened router v-show="!collapsed">
                    <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                        <el-submenu :index="index+''">
                            <template slot="title">
                                <i :class="item.icon" aria-hidden="true"></i> {{item.name}}
                            </template>
                            <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">
                                <i :class="child.icon" aria-hidden="true"></i> {{child.name}}
                            </el-menu-item>
                        </el-submenu>
                    </template>
                </el-menu>
                <!--导航菜单-折叠后-->
                <ul class="el-menu collapsed" v-show="collapsed" ref="menuCollapsed">
                    <li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="el-submenu item">
                        <template v-if="item.children.length > 0">
                            <div class="el-submenu__title" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
                                <i :class="item.icon" aria-hidden="true"></i>
                            </div>
                            <ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
                                <li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" :class="$route.path==child.path?'is-active':''" @click="$router.push(child.path)">
                                    <i :class="child.icon" aria-hidden="true"></i> {{child.name}}
                                </li>
                            </ul>
                        </template>
                    </li>
                </ul>
            </aside>
            <section class="content-container">
                <div class="grid-content bg-purple-light">
                    <el-col :span="24" class="breadcrumb-container">
                        <strong class="title">{{$route.name}}</strong>
                        <el-breadcrumb separator="/" class="breadcrumb-inner">
                            <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                                {{ item.name }}
                            </el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-col>
                    <el-col :span="24" class="content-wrapper">
                        <router-view></router-view>
                    </el-col>
                </div>
            </section>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data() {
        return {
            //系统名称
            title: 'ERP管理中心',
            //简略系统名称
            short_title: 'ERP',
            //是否折叠左边导航
            collapsed: false,
            //用户登录名
            username: 'admin'
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        },
        handleopen() {
            //console.log('handleopen');
        },
        handleclose() {
            //console.log('handleclose');
        },
        handleselect: function (a, b) {
        },
        //退出登录
        logout: function () {
            var _this = this;
            this.$confirm('确认退出吗?', '提示', {
                //type: 'warning'
            }).then(() => {
                sessionStorage.removeItem('user');
                _this.$router.push('/login');
            }).catch(() => {
            });
        },
        //折叠导航栏
        collapse: function () {
            this.collapsed = !this.collapsed;
        },
        showMenu(i, status) {
            this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
        }
    },
    mounted() {
        var user = sessionStorage.getItem('user');
        if (user) {
            user = JSON.parse(user);
            this.sysUserName = user.name || '';
            this.sysUserAvatar = user.avatar || '';
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    .header {
        height: 60px;
        line-height: 60px;
        background: #20a0ff;
        color: #fff;
        .userinfo {
            text-align: right;
            padding-right: 35px;
            float: right;
            .userinfo-inner {
                cursor: pointer;
                color: #fff;
            }
        }
        .logo {
            height: 60px;
            font-size: 22px;
            padding-left: 10px;
            padding-right: 20px;
            border-color: rgba(238, 241, 146, 0.3);
            img {
                width: 40px;
                float: left;
                margin: 10px 10px 10px 18px;
            }
            .txt {
                color: #fff;
            }
        }
        .logo-width {
            width: 230px;
        }
        .logo-collapse-width {
            width: 60px
        }
        .tools {
            width: 14px;
            height: 60px;
            line-height: 60px;
            cursor: pointer;
        }
    }
    .main {
        display: flex;
        position: absolute;
        top: 60px;
        bottom: 0px;
        overflow: hidden;
        aside {
            flex: 0 0 230px;
            width: 230px;
            .el-menu {
                height: 100%;
            }
            .collapsed {
                width: 60px;
                .item {
                    position: relative;
                }
                .submenu {
                    position: absolute;
                    top: 0px;
                    left: 60px;
                    z-index: 99999;
                    height: auto;
                    display: none;
                }
            }
        }
        .menu-collapsed {
            flex: 0 0 60px;
            width: 60px;
        }
        .menu-expanded {
            flex: 0 0 230px;
            width: 230px;
        }
        .content-container {
            flex: 1;
            overflow-y: scroll;
            padding: 20px;
            .breadcrumb-container {
                margin-bottom: 20px;
                .title {
                    width: 200px;
                    float: left;
                    color: #475669;
                }
                .breadcrumb-inner {
                    float: right;
                }
            }
            .content-wrapper {
                background-color: #fff;
                box-sizing: border-box;
            }
        }
    }
}
</style>
