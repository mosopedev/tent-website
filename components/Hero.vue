<template>
    <div class="hero-container">
        <NavBar />
        <div class="hero-body">
            <div class="hero-body-bg">
                <img src="/images/hero-bg-circle.png" alt="" class="hero-body-bg-circle">
            </div>
            <div class="hero-body-personas">
                <img src="/images/hero-person1.png" data-aos="fade-right" class="hero-bg-person p1" alt="">
                <img src="/images/hero-person2.png" data-aos="fade-up-right" class="hero-bg-person p2" alt="">
                <img src="/images/hero-person3.png" data-aos="fade-up" class="hero-bg-person p3" alt="">
                <img src="/images/hero-person4.png" data-aos="fade-up-left" class="hero-bg-person p4" alt="">
                <img src="/images/hero-person5.png" data-aos="fade-left" class="hero-bg-person p5" alt="">
            </div>
            <div class="hero-body-overlay">
                <h1 class="hero-heading">
                    The companion App for all things events
                </h1>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.hero-container {
    width: 98%;
    height: 92vh;
    margin: 30px auto 0;
    background: linear-gradient(111.77deg, #EC8235 -12.61%, #FF5722 100%);
    border-radius: 40px 40px 16px 16px;
    overflow: hidden;
}

.hero-body {
    /* background-color: red; */
    width: 100%;
    height: 82vh;
    position: relative;
}

.hero-body-bg {
    /* background: rebeccapurple; */
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-body-bg .hero-body-bg-circle {
    margin: auto;
    width: 70%;
}

.hero-body-personas {
    position: relative;
    width: 100%;
    height: 82vh;
    /* background-color: rebeccapurple; */
}

.hero-body-personas .hero-bg-person.p1 {
    position: absolute;
    left: 0;
    top: -40px;
}

.hero-body-personas .hero-bg-person.p2 {
    position: absolute;
    left: 0;
    bottom: 0;
}

.hero-body-personas .hero-bg-person.p3 {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-self: center;
    right: 30%;
}

.hero-body-personas .hero-bg-person.p4 {
    position: absolute;
    float: right;
    right: 0;
    bottom: 0;
}

.hero-body-personas .hero-bg-person.p5 {
    position: absolute;
    right: 0;
    height: 300px;
    top: 0;
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

.hero-heading {
    width: 80%;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 600;
    font-size: 70px;
    line-height: 90px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #FFFFFF;
}

@media screen and (max-width: 1100px) {
    .hero-body-personas .hero-bg-person.p1 {
        width: 350px;
    }

    .hero-body-personas .hero-bg-person.p2 {
        width: 270px;
    }

    .hero-body-personas .hero-bg-person.p3 {
        right: 25%;
        height: 250px;
    }

    .hero-body-personas .hero-bg-person.p4 {
        width: 350px;
    }

    .hero-body-personas .hero-bg-person.p5 {
        width: 300px;
    }

    .hero-heading {
        width: 80%;
        font-size: 55px;
        line-height: 90px;
        letter-spacing: -0.02em;
    }
}


@media screen and (max-width: 900px) {
    .hero-body-personas .hero-bg-person.p3 {
        right: 25%;
        height: 200px;
    }

    .hero-heading {
        width: 80%;
        font-size: 40px;
        line-height: 50px;
    }
}

@media screen and (max-width: 800px) {
    .hero-body-personas .hero-bg-person.p3 {
        display: none;
    }

    .hero-body-bg {
        height: 100%;

    }

    .hero-body-bg .hero-body-bg-circle {
        width: 100%;
    }
}

@media screen and (max-width: 500px) {
    .hero-body-personas .hero-bg-person.p1 {
        width: 250px;
    }

    .hero-body-personas .hero-bg-person.p2 {
        width: 220px;
    }

    .hero-body-personas .hero-bg-person.p4 {
        width: 250px;
    }

    .hero-body-personas .hero-bg-person.p5 {
        width: 250px;
    }

    .hero-heading {
        width: 95%;
        font-size: 30px;
        line-height: 40px;
    }
}
</style>