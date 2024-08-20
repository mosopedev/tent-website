<template>
    <footer class="footer">
        <p class="copy-right">
            Tent Inc. <span>@ 2024. All rights reserved.</span>
        </p>
        <div class="footer-links">
            <NuxtLink to="/">Terms of Service</NuxtLink>
            <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
            <NuxtLink to="/">Support</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
.footer {
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    padding: 80px;
}
.footer-links {
    display: flex;
    gap: 15px;
}

.footer-links a {
    color: #475569;
    font-size: 16px;
}

@media screen and (max-width: 790px) {
    .footer {
    height: fit-content;
    flex-direction: column;
    padding: 20px;
}

.footer-links {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}
}
</style>