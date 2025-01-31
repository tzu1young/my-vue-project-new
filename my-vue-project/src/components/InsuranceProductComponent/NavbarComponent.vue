<script setup>


</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> <img
          src="https://www.ispan.com.tw/_next/image/?url=%2Fimages%2FiSpan_Logo_slogan.png&w=1080&q=75" alt="Logo"
          width="80" class="d-inline-block align-text-top"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">

            <RouterLink :to="{ name: 'productlist' }" class="nav-link active">產品櫥窗</RouterLink>
 
          </li>
          <li class="nav-item">

            <!-- <RouterLink :to="{ name: 'about' }" class="nav-link">關於我們</RouterLink> -->
          </li>
          <li class="nav-item">

            <!-- <RouterLink :to="{ name: 'contact' }" class="nav-link">聯絡我們</RouterLink> -->
          </li>
          <li class="nav-item">

            
          </li>
          <li class="nav-item">

            <!-- <RouterLink :to="{ name: 'spots' }" class="nav-link">台北市景點
            </RouterLink> -->
          </li>
          <li class="nav-item">

            <!-- <RouterLink :to="{ name: 'tabs' }" class="nav-link">頁籤</RouterLink> -->
          </li>
          <li class="nav-item">

            <!-- <RouterLink :to="{ name: 'mgmt' }" class="nav-link">會員管理</RouterLink> -->
          </li>
          <li class="nav-item">

            <!-- <RouterLink :to="{ name: 'member', params: { id: '20' } }" class="nav-link">會員中心</RouterLink> -->
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="css" scoped></style>