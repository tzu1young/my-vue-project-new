<template>
  <header class="global-header">
    <div class="header-left">
      <img class="logo" src="@/assets/logo.png" alt="Logo" />
      <!-- 標題 -->
      <div class="title-container">
        <h1 class="simple-title">e險無憂</h1>
        <p class="subtitle">Your safety, our priority</p>
      </div>
    </div>
    <nav class="header-menu">
      <router-link v-for="item in menuItems" :key="item.key" :to="item.link" class="menu-item">
        {{ item.label }}
      </router-link>
    </nav>
    <div class="header-right">
      <a-dropdown>
        <template #overlay>
          <a-menu>
            <template v-if="!isLoggedIn">
              <a-menu-item key="login">
                <router-link to="/membersLogin" class="login-link">
                  <!-- 添加圖示 -->
                  <i class="fa-solid fa-rocket login-icon"></i>
                  登入
                </router-link>
              </a-menu-item>
            </template>
            <template v-else>
              <a-menu-item key="profile">
                <router-link to="/membersprofile">會員中心</router-link>
              </a-menu-item>
              <a-menu-item key="logout" @click="handleLogout">登出</a-menu-item>
            </template>
          </a-menu>
        </template>
        <a-button type="text" class="user-dropdown-btn">
          <i class="fa-solid fa-user user-icon"></i>
          會員中心
          <DownOutlined />
        </a-button>
      </a-dropdown>
    </div>
  </header>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router';
import { DownOutlined } from '@ant-design/icons-vue';
import { useUserStore } from '@/store/userStore.js';

const router = useRouter();
const userStore = useUserStore();

const menuItems = [
  { key: 'products', label: '網路投保商品', link: '/productlist' },
  { key: 'calculator', label: '快速試算', link: '/calculator' },
  { key: 'claims', label: '理賠服務', link: '/claims' },
  { key: 'bouns', label: '紅利商城', link: '/bouns' },
  { key: 'faq', label: '常見問題', link: '/faq' },
  { key: 'discussionView', label: '討論區', link: '/discussionView' },
  { key: 'membersTest', label: '測試', link: '/membersTest' },
];

// 即時監聽登入狀態
const isLoggedIn = computed(() => userStore.isLoggedIn);

onMounted(() => {
  userStore.checkLogin();
});

const handleLogout = () => {
  userStore.logout();
  router.push('/'); // 登出後返回首頁
};
</script>

<style scoped>
.global-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #f4f4f4;
  color: #000;
  font-family: 'Arial', sans-serif;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 80px;
  box-sizing: border-box;
}

.header-left {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.logo {
  height: 80px;
  margin-right: 1rem;
  border-radius: 0;
  border: none;
  box-shadow: none;
  background-color: transparent;
}


.title-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.simple-title {
  font-family: 'Noto Sans TC', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #000;
  margin-top: 20px;
  letter-spacing: 3px;
}

.subtitle {
  font-family: 'Noto Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: #000;

  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
}

.header-menu {
  display: flex;
  gap: 2rem;
}

.menu-item {
  text-decoration: none;
  color: #2d572c;
  font-weight: 700;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.menu-item:hover {
  color: #155724;
  transform: scale(1.1);
}

.header-right {
  display: flex;
  align-items: center;
}

.user-dropdown-btn {
  color: #2d572c;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.user-dropdown-btn:hover {
  color: #155724;
  transform: scale(1.05);
}

.user-dropdown-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #2d572c;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.user-icon {
  font-size: 1.2rem;
}

.login-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: inherit;
  text-decoration: none;
}

.login-icon {
  font-size: 1.2rem;
  color: #2d572c;
}
</style>
