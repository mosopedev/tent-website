<template>
    <div v-if="loading" class="loader-screen">
        <img src="/images/tent-logo.svg" alt="App Logo" class="logo-animation" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const loading = ref(true);

onMounted(() => {
    const hasLoaded = sessionStorage.getItem('hasLoaded');

    if (!hasLoaded) {
        sessionStorage.setItem('hasLoaded', 'true');
        setTimeout(() => {
            loading.value = false;
        }, 3000);
    } else {
        loading.value = false;
    }
});
</script>

<style scoped>
.loader-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #FF5722;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.logo-animation {
    width: 25vw;
    animation: zoomOutFadeOut 3s ease-in-out forwards;
}

@keyframes zoomOutFadeOut {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}
</style>
