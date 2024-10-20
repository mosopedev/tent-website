<template>
    <div class="footer-top">
        <img src="/icons/tent-footer-logo.svg" alt="">
        <div class="footer-cta">
            <p>
                Join thousands of event lovers
            </p>
            <button>Download Tent App</button>
        </div>
    </div>
    <footer class="footer">
        <p class="copy-right">
            Tent Inc. <span>@ 2024. All rights reserved.</span>
        </p>
        <div class="footer-links">
            <NuxtLink to="/terms">Terms of Service</NuxtLink>
            <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
            <a :href="'mailto:support@thetent.app'">Support</a>
            <NuxtLink to="/about">About</NuxtLink>
        </div>
    </footer>
</template>

<script setup>

</script>

<style scoped>
.footer-top {
    padding: 80px;
    background-color: #F2F4F7;
    border-radius: 64px 64px 0 0;
}

.footer-cta {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.footer-cta p {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 600;
    width: 40%;
    font-size: 55px;
    color: #101828;
}

.footer-top img {
    width: 200px;
}

.footer-cta button {
    width: 35%;
    height: 80px;
    background: #FF5722;
    box-shadow: 0px 2.74571px 5.49142px rgba(106, 55, 25, 0.4), 0px 0px 0px 2.74571px rgba(184, 57, 3, 0.76);
    border-radius: 54.9142px;
    color: white;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 66px;
    cursor: pointer;
}

.footer {
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: space-between;
    padding: 40px 80px;
    background-color: #F2F4F7;
    /* background: red; */
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


    .footer-top {
        padding: 20px;
        border-radius: 30px 30px 0 0;
    }

    .footer-cta {
        display: none;
    }

    .footer-top img {
        width: 120px;
    }
}
</style>