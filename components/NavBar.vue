<template>
    <nav :class="['navbar']">
        <NuxtLink to="/">
            <img src="/images/tent-logo.svg" class="tent-logo" alt="Tent Logo">
        </NuxtLink>

        <div class="nav-items">
            <NuxtLink to="/" :class="[$route.fullPath === '/' ? 'active' : '']">Home</NuxtLink>
            <NuxtLink to="/about" :class="[$route.fullPath === '/about' ? 'active' : '']">About Us</NuxtLink>
            <NuxtLink to="/privacy" :class="[$route.fullPath === '/privacy' ? 'active' : '']">Privacy</NuxtLink>
            <NuxtLink to="/">
                <button class="orange-dwl-btn">
                    Download Now
                </button>
            </NuxtLink>
        </div>

        <div class="hamburger" @click="toggleSidebar">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>


    </nav>
    <div :class="['sidebar', { 'sidebar-open': isSidebarOpen }]">
        <div class="sidebar-content">
            <NuxtLink to="/" @click="closeSidebar">Home</NuxtLink>
            <NuxtLink to="#features" @click="closeSidebar">Features</NuxtLink>
            <NuxtLink to="/about" @click="closeSidebar">About Us</NuxtLink>
            <NuxtLink to="/" @click="closeSidebar">
                <button class="orange-dwl-btn">Download Now</button>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
    isSidebarOpen.value = false;
};

</script>
<style scoped>
.navbar {
    height: 10vh;
    width: 100%;
    padding: 0 42px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
    transition: all 0.3s ease;
}

.navbar-scrolled {
    height: 7vh;
}

.tent-logo {
    width: 30px;
    transition: all .5s;
}

.navbar-scrolled .tent-logo {
    width: 30px;
}

.nav-items {
    display: flex;
    align-items: center;
    column-gap: 64px;
    transition: all 0.3s ease;
}

.navbar-scrolled .nav-items a {
    font-size: 16px;
}

.navbar-scrolled .orange-dwl-btn {
    height: 32px;
    font-size: 16px;
}

.orange-dwl-btn {
    height: 40px;
    padding: 0 20px;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.244);
    color: #fff;
    cursor: pointer;
    font-weight: 600;
    font-size: 18px;
    transition: all 0.3s ease;
}

.orange-dwl-btn:hover {
    background: rgba(255, 255, 255, 0.522);
}

.nav-items a {
    color: #fff;
    font-size: 18px;
    transition: all 0.3s ease;
}

.nav-items a.active {
    font-weight: 600;
}

.hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
}

.bar {
    width: 25px;
    height: 3px;
    background-color: #fff;
}

.sidebar {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100%;
    width: 75%;
    max-width: 300px;
    background-color: #fff;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    z-index: 99999;
    transition: right 0.3s ease;
    padding: 90px 40px;
}

.sidebar-open {
    right: 0;
}

.sidebar-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.sidebar-content a {
    font-size: 18px;
    color: #1A1A1A;
}

.sidebar-content a.active {
    font-weight: 600;
}

@media (max-width: 768px) {
    .nav-items {
        display: none;
    }

    .navbar {
        padding: 0 20px;
    }

    .hamburger {
        display: flex;
    }

    .tent-logo {
        width: 40px;
    }
}
</style>
