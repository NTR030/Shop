<template>
  <div>
    <h2>{{ error }}</h2>
    <p>网络故障，请检查网络连接</p>
    <p>
      <a @click="$router.go(1)">上一页</a>
      <router-link to="/">首页</router-link>
    </p>
  </div>
</template>
