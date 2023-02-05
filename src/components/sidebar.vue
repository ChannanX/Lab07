<script setup>
import { ref } from "vue";
const sidebarOpen = ref(false);
function ClickToShow() {
    if (sidebarOpen.value == false) {
        sidebarOpen.value = true
    } else {
        sidebarOpen.value = false
    }
}
</script>
<template>
    <div class="d-flex text-bg-dark shadow p-3 mb-5 bg-body-tertiary rounded" id="l-nb" @click="ClickToShow">
        <div class="container">
            <div class="row">
                <div class="mt-5 d-flex justify-content-center">
                    <RouterLink to="/" class="text-light mu">
                        <img src="./assets/MJU_LOGO.svg" alt="logo" width="70">
                    </RouterLink>
                </div>
                <div class="mt-5 d-flex justify-content-center ">
                    <RouterLink to="/" class="text-light mu">
                        <img src="./assets/news.png" alt="news" width="40" class="menu">
                    </RouterLink>
                </div>
                <div class="mt-5 d-flex justify-content-center "><img src="./assets/icons8-knowledge-sharing-100.png"
                        alt="course" width="40" class="menu"></div>
                <div class="mt-5 d-flex justify-content-center "><img src="./assets/icons8-shopping-basket-add-48.png"
                        alt="course" width="40" class="menu"></div>
            </div>
        </div>
    </div>
    <div class="position-absolute d-flex text-bg-dark " id="sidebar" :class="{ 'active': !sidebarOpen }">
        <div class="container mt-5">
            <div class="row ">
                <div class="mt-5 mb-3 ms-5 d-flex justify-content-center">
                    <div>มหาวิทยาลัย</div>
                </div>
                <div class="mt-5 mb-3 ms-5 d-flex justify-content-center ">
                    <div>ข่าว</div>
                </div>
                <div class="mt-5 mb-3 ms-5 d-flex justify-content-center ">
                    <div>รายวิชา</div>
                </div>
                <div class="mt-5 mb-5 ms-5 d-flex justify-content-center ">
                    <div>เพิ่ม - ลด</div>
                </div>
            </div>
        </div>
    </div>
    <div class="ms-5">
    </div>

</template>
<style scoped>
#l-nb {
    width: 100px;
    height: 100%;
    z-index: 1;
}

#sidebar {
    min-width: 100px;
    max-width: 300px;
    background-color: #7386D5;
    color: #fff;
    transition: all 0.3s;
    z-index: 0;
    height: 100%;
}

#sidebar.active {
    margin-left: -300px;
}

.menu:hover {
    width: 50px;
}
</style>