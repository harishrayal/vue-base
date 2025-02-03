<template>
    <div v-if="!isAuthPage">
        <a-layout style="min-height: 100vh">
            <!-- Sider with responsive collapse behavior -->
            <a-layout-sider
                :collapsed="collapsed"
                breakpoint="md"
                collapsible
                @collapse="onCollapse"
                class="responsive-sider"
                style="background: #fff"
                width="240"
                reverseArrow="true"
                :style="{ height: '100vh', position: 'fixed', left: 0 }"
            >
                <div class="logo" />
                <a-menu
                    :selectedKeys="selectedKeys"
                    mode="inline"
                    class="overflow-auto h-[calc(100vh-40px)]"
                >
                    <!-- Admin Menu -->
                    <template v-if="userRole === 'admin'">
                        <a-sub-menu key="sub3">
                            <template #title>
                                <span>
                                    <user-outlined />
                                    <span>Admin Pages</span>
                                </span>
                            </template>
                            <a-menu-item @click="onMenuClick" key="10">
                                <router-link to="/admin/home"
                                    >Admin Home</router-link
                                >
                            </a-menu-item>
                            <a-menu-item @click="onMenuClick" key="11">
                                <router-link to="/admin/page1"
                                    >Page 1</router-link
                                >
                            </a-menu-item>
                            <a-menu-item @click="onMenuClick" key="12">
                                <router-link to="/admin/page2"
                                    >Page 2</router-link
                                >
                            </a-menu-item>
                            <a-menu-item @click="onMenuClick" key="13">
                                <router-link to="/admin/page3"
                                    >Page 3</router-link
                                >
                            </a-menu-item>
                            <a-menu-item @click="onMenuClick" key="14">
                                <router-link to="/admin/page4"
                                    >Page 4</router-link
                                >
                            </a-menu-item>
                            <a-menu-item @click="onMenuClick" key="15">
                                <router-link to="/admin/page5"
                                    >Page 5</router-link
                                >
                            </a-menu-item>
                        </a-sub-menu>
                        <a-sub-menu key="sub5">
                            <template #title>
                                <span>
                                    <user-outlined />
                                    <span>Admin Pages</span>
                                </span>
                            </template>
                            <a-menu-item @click="onMenuClick" key="10">
                                <router-link to="/admin/home"
                                    >Admin Home</router-link
                                >
                            </a-menu-item>
                            <a-menu-item @click="onMenuClick" key="11">
                                <router-link to="/admin/page1"
                                    >Page 1</router-link
                                >
                            </a-menu-item>
                            <a-menu-item @click="onMenuClick" key="12">
                                <router-link to="/admin/page2"
                                    >Page 2</router-link
                                >
                            </a-menu-item>
                            <a-menu-item @click="onMenuClick" key="13">
                                <router-link to="/admin/page3"
                                    >Page 3</router-link
                                >
                            </a-menu-item>
                            <a-menu-item @click="onMenuClick" key="14">
                                <router-link to="/admin/page4"
                                    >Page 4</router-link
                                >
                            </a-menu-item>
                            <a-menu-item @click="onMenuClick" key="15">
                                <router-link to="/admin/page5"
                                    >Page 5</router-link
                                >
                            </a-menu-item>
                        </a-sub-menu>
                    </template>

                    <!-- User Menu -->
                    <template v-if="userRole === 'user'">
                        <a-sub-menu key="sub4">
                            <template #title>
                                <span>
                                    <team-outlined />
                                    <span>User Pages</span>
                                </span>
                            </template>
                            <a-menu-item @click="onMenuClick" key="16">
                                <router-link to="/user/userHome"
                                    >User Home</router-link
                                >
                            </a-menu-item>
                            <a-menu-item @click="onMenuClick" key="17">
                                <router-link to="/user/page1"
                                    >Page 1</router-link
                                >
                            </a-menu-item>
                            <a-menu-item @click="onMenuClick" key="18">
                                <router-link to="/user/page2"
                                    >Page 2</router-link
                                >
                            </a-menu-item>
                            <a-menu-item @click="onMenuClick" key="19">
                                <router-link to="/user/page3"
                                    >Page 3</router-link
                                >
                            </a-menu-item>
                            <a-menu-item @click="onMenuClick" key="20">
                                <router-link to="/user/page4"
                                    >Page 4</router-link
                                >
                            </a-menu-item>
                            <a-menu-item @click="onMenuClick" key="21">
                                <router-link to="/user/page5"
                                    >Page 5</router-link
                                >
                            </a-menu-item>
                        </a-sub-menu>
                    </template>
                </a-menu>
            </a-layout-sider>

            <a-layout
                :class="{
                    'md:ml-[240px]': !collapsed,
                    'md:ml-[80px]': collapsed,
                }"
            >
                <a-layout-header style="background: #fff; padding: 0">
                    <!-- Toggle button to collapse/expand sidebar -->
                    <div class="flex justify-between items-center h-full">
                        <menu-unfold-outlined
                            v-if="collapsed"
                            class="trigger ml-2"
                            @click="toggleCollapse"
                        />
                        <menu-fold-outlined
                            v-else
                            class="trigger ml-2"
                            @click="toggleCollapse"
                        />
                        <a-dropdown class="mr-2">
                            <template #overlay>
                                <a-menu>
                                    <a-menu-item @click="logout">
                                        Logout
                                    </a-menu-item>
                                </a-menu>
                            </template>
                            <a-avatar
                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                
                            />
                        </a-dropdown>
                    </div>
                </a-layout-header>

                <a-layout-content style="margin: 20px">
                    <div
                        class="p-3"
                        :style="{ background: '#fff', minHeight: '100%' }"
                    >
                        <RouterView />
                    </div>
                </a-layout-content>

                <a-layout-footer
                    class="test"
                    style="text-align: center; background: #fff"
                >
                    Ant Design ©2018 Created by Ant UED
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </div>
    <div v-else>
        <RouterView />
    </div>
</template>

<script lang="ts">
import {
    UserOutlined,
    TeamOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons-vue'
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
    components: {
        UserOutlined,
        TeamOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
    },
    data() {
        return {
            userRole: localStorage.getItem('role') || 'user', // Dynamically fetch role from localStorage
            selectedKeys: [],
            collapsed: false,
        }
    },
    computed: {
        isAuthPage() {
            const route = useRoute()
            return route.path === '/' || route.path === '/forgot-password'
        },
    },
    mounted() {
        // Dynamically load the CSS based on the user role
        this.loadRoleBasedStyles()
    },
    methods: {
        // Method to handle collapse state change
        onCollapse(collapsed: boolean) {
            this.collapsed = collapsed
        },
        // Method to toggle collapse state
        toggleCollapse() {
            this.collapsed = !this.collapsed
        },
        // Dynamically load CSS based on user role
        loadRoleBasedStyles() {
            if (this.userRole === 'admin') {
                import('../assets/css/admin/admin.css') // Admin theme
            } else if (this.userRole === 'user') {
                console.log('LLL')
                import('../assets/css/staff/staff.css') // Staff theme
            }
        },

        onMenuClick() {
            if (window.innerWidth <= 768) {
                // If screen is below lg breakpoint (768px)
                this.collapsed = true // Collapse the sidebar
            }
        },
        logout() {
            // Clear accessToken and role from localStorage
            localStorage.removeItem('accessToken')
            localStorage.removeItem('role')

            // Redirect to login page
            this.$router.push('/')
        },
    },
})
</script>

<style scoped>
/* Ensure the sider on mobile is positioned above the content when expanded */
@media (max-width: 768px) {
    .responsive-sider {
        position: fixed;
        z-index: 1000;
        height: 100%;
        top: 0;
        left: 0;
        box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
        transform: translateX(0); /* Keep it visible when expanded */
        transition: transform 0.3s ease;
    }

    .responsive-sider.ant-layout-sider-collapsed {
        transform: translateX(-100%);
    }

    .ant-layout {
        margin-left: 0;
    }

    .ant-layout-header {
        padding-left: 50px; /* Adjust padding if necessary */
    }
}

/* Optional: Adjust the mobile view when the sidebar is collapsed */
@media (max-width: 768px) {
    .ant-layout-sider-collapsed .logo {
        display: none;
    }
}
</style>
