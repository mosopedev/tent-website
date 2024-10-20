<template>
    <div class="hero-container">
        <NavBar />
        <div class="hero-body">
            <div class="hero-body-overlay">
                <h1><span class="orange">Our</span> Mission</h1>
                <p class="hero-desc-txt">
                    At Tent, our mission is simple yet powerful: to connect people with unforgettable experiences while empowering creators with the tools they need to bring those moments to life. We believe in fostering connections through shared experiences, making every event more meaningful.
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
    font-size: 25px;
    line-height: 40px;
    text-align: center;
    color: #ffffff;
    margin: 0 auto;
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

@media screen and (max-width: 1100px) {
    .hero-body-overlay h1 {
        font-size: 60px;
        line-height: 90px;
    }

}

@media screen and (max-width: 900px) {
    .hero-body-overlay h1 {
        font-size: 45px;
        line-height: 50px;
    }
    .hero-desc-txt {
    width: 85%;
    font-size: 20px;
}
}

@media screen and (max-width: 500px) {
    .hero-body-overlay h1 {
        width: 95%;
        font-size: 35px;
        line-height: 60px;
    }
    .hero-desc-txt {
    width: 95%;
    font-size: 18px;
    line-height: 25px;
}
}
</style>
