<template>
    <div class="hero-container">
        <NavBar />
        <div class="hero-body">
            <div class="hero-body-overlay">
                <h1><span class="orange">Our</span> Mission</h1>
                <p class="hero-desc-txt">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
                    harum eius, maxime doloribus quas, dicta vel nobis cum, iure dolorem
                    error perferendis aspernatur rerum ipsum.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.hero-container {
    width: 98%;
    height: 92vh;
    margin: 30px auto 0;
    /* background: url('/public/images/hero-bg.jpg'); */
    background: linear-gradient(rgba(0, 0, 0, 0.413), rgba(0, 0, 0, 0.413)),
        url("/public/images/hero-bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 40px 40px 16px 16px;
    overflow: hidden;
}

.hero-body {
    /* background-color: red; */
    width: 100%;
    height: 82vh;
    position: relative;
}

.hero-body-overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* background: rebeccapurple; */
    top: 0;
    width: 100%;
    height: 100%;
}

.hero-body-overlay h1 {
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 600;
    font-size: 72px;
    line-height: 90px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #ffffff;
}

.hero-body-overlay h1 span {
    color: #ff5722;
}

.hero-desc-txt {
    width: 70%;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
}

.hero-heading {
    width: 80%;
    font-family: "SF Pro Display";
    font-style: normal;
    font-weight: 600;
    font-size: 70px;
    line-height: 90px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #ffffff;
}
</style>
