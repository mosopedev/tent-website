<template>
    <div>
        <PageLoader />
        <NavBar />
        <!-- Hero Section  -->
        <div class="hero">
            <img src="/public/images/hero-bg.jpg" alt="" class="hero-bg-img">
            <div class="hero-overlay">
                <img src="/public/images/tent-logo.svg" alt="Tent Logo" class="hero-tent-logo">
                <h1>The app for party people looking to build lasting connections</h1>
                <h2>Stay updated on the latest events around you, and expand your social circle by connecting with new
                    friends.</h2>
            </div>
        </div>
        <!-- Hero section end  -->

        <!-- App Features -->
        <div class="features" id="features">
            <!-- event feature -->
            <div class="feature event-feature">
                <div class="feature-illustration">
                    <img data-aos="zoom-in-up" data-aos-delay="100" src="/public/images/event-ticket-mockup.svg"
                        alt="Get tickets" class="event-ticket">

                    <div class="event-illustration">
                        <img data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-delay="200"
                            src="/public/images/event-mockup.svg" alt="Explore events" class="event-phone-mockup">
                    </div>
                </div>
                <div class="feature-desc">
                    <h2>Events</h2>
                    <h3>Explore top tier events nearby.</h3>
                    <p class="feature-text">
                        Create or attend top-tier events near you, curated to match your interests. Stay in the loop
                        with the best experiences your area has to offer.
                    </p>
                    <div class="store-btn-ctas">
                        <NuxtLink to="/">
                            <img src="/public/images/app-store-cta.svg" alt="Download On App Store (IOS)">
                        </NuxtLink>
                        <NuxtLink to="/">
                            <img src="/public/images/play-store-cta.svg" alt="Download On Play Store (Android)">
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <!-- event feature end  -->

            <!-- post feature -->
            <div class="feature dark-sect">
                <div class="feature-desc dark-sect">
                    <h2>Posts</h2>
                    <h3>Capture and share ecstatic moments live.</h3>
                    <p class="feature-text">
                        Post your most thrilling experiences, connect instantly with your audience and share the
                        excitement with others.
                    </p>
                </div>
                <div class="feature-illustration post-illustration">
                    <img data-aos="fade-up" src="/public/images/post-mockup1.svg" class="post-mockup1"
                        alt="Share posts">
                    <img data-aos="fade-down" src="/public/images/post-mockup2.svg" class="post-mockup2"
                        alt="Record events live">
                </div>
            </div>
            <!-- post feature end  -->

            <!-- community feature -->
            <div class="feature community-feature">
                <div class="feature-illustration community-illustration">
                    <img data-aos="fade-up" src="/public/images/community-mockup.svg" class="community-mockup"
                        alt="Join your community">
                </div>
                <div class="feature-desc">
                    <h2>Communities</h2>
                    <h3>Find your people with communities.</h3>
                    <p class="feature-text">
                        Discover and connect with a world of like-minded individuals by joining communities where shared
                        passions turn strangers into lifelong friends.
                    </p>
                </div>
            </div>
            <!-- community feature end  -->

            <!-- ticket feature -->
            <div class="feature dark-sect ticket-feature">
                <div class="feature-desc dark-sect">
                    <h2>Tickets</h2>
                    <h3>Get event tickets on the go.</h3>
                    <p class="feature-text">
                        Never miss out on your favorite events—easily purchase tickets on the go, no matter where you
                        are, and enjoy a seamless experience from browsing to booking.
                    </p>
                </div>
                <div class="feature-illustration ticket-illustration">
                    <img data-aos="fade-left" src="/public/images/ticket-mockup.svg" class="ticket-mockup"
                        alt="Record events live">
                </div>
            </div>
        </div>
        <!-- App Features End -->

        <!-- Download cta  -->
        <div class="cta-sect">
            <div class="cta">
                <img src="/public/images/cta-bg.jpg" alt="" class="cta-bg">
                <div class="cta-overlay">
                    <p class="cta-text">
                        Ready to grow your social circle and connect with new friends ?
                    </p>
                    <div class="store-btn-ctas">
                        <NuxtLink to="/">
                            <img src="/public/images/app-store-cta.svg" alt="Download On App Store (IOS)">
                        </NuxtLink>
                        <NuxtLink to="/">
                            <img src="/public/images/play-store-cta.svg" alt="Download On Play Store (Android)">
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <!-- Download cta end  -->

        <Footer />
    </div>
</template>

<script setup>

</script>

<style scoped>
.hero {
    width: 100%;
    height: 80vh;
    position: relative;
}

.hero-bg-img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.649);
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.hero-tent-logo {
    width: 120px;
}

.hero-overlay h1 {
    font-style: normal;
    width: 70%;
    margin: 50px 0 0;
    font-weight: 700;
    font-size: 60px;
    line-height: 74px;
    text-align: center;
    letter-spacing: -1.15556px;
    color: #FFFFFF;
}

.hero-overlay h2 {
    margin: 50px 0 0;
    width: 40vw;
    font-weight: 500;
    font-size: 23px;
    line-height: 30px;
    text-align: center;
    letter-spacing: -0.361111px;
    color: #DADADA;
}

/* Features */
.feature {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: 80vh;
    overflow: hidden;
    width: 100%;
    gap: 30px;
}

.community-feature {
    min-height: 60vh;
}

.feature.dark-sect {
    background-color: #1A1A1A;
    justify-content: center;
}

.feature-illustration {
    position: relative;
    width: 450px;
    margin: 0 50px 0;
    /* background-color: #1A1A1A; */
}

.event-illustration {
    width: 400px;
    height: 400px;
    /* background-color: #FF5722; */
    position: relative;
    right: -60px;
    overflow: hidden;
    border-radius: 15px;
    background: rgba(107, 12, 255, 0.3);
    float: right;
}

.post-illustration {
    position: relative;
    width: 32%;
    /* background-color: red; */
    height: 80vh;
    right: -140px;
}

.community-illustration {
    position: relative;
    top: auto;
    /* background-color: #1A1A1A; */
    /* left: -80px; */
    bottom: -30px;
}

.ticket-illustration {
    position: relative;
    right: 100px;
}

.community-mockup {
    width: 550px;
    /* background-color: #1A1A1A */
}

.post-illustration .post-mockup1 {
    position: absolute;
    bottom: 0;
    top: auto;
    left: -200px;
}

.post-illustration .post-mockup2 {
    position: absolute;
    top: 0;
    right: 0;
    top: auto;
}

.ticket-mockup {
    width: 700px;
}

.event-illustration .event-phone-mockup {
    position: absolute;
    left: 15%;
    right: auto;
    height: 350px;
    bottom: 0;
}

.feature-illustration .event-ticket {
    position: absolute;
    left: 30px;
    top: 30px;
    right: auto;
    z-index: 3;
}

.feature-desc {
    max-width: 50vw;
    /* width: auto; */
}

.feature-desc h2 {
    font-family: 'poppins';
    font-weight: 600;
    font-size: 22px;
    /* line-height: 34px; */
    letter-spacing: -0.433333px;
    color: #FF5722;
}

.feature-desc.dark-sect h3 {
    color: #FFFFFF;
}

.feature-desc h3 {
    font-weight: 600;
    font-size: 52px;
    line-height: 62px;
    /* letter-spacing: -0.938889px; */
    color: #1A1A1A;
    width: 80%;
    margin: 20px 0 0;
}

.feature-desc.dark-sect .feature-text {
    color: #D2D2D2;
}

.feature-text {
    margin: 20px 0 0;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.361111px;
    color: #767676;
    width: 70%;
}

.store-btn-ctas {
    margin: 30px 0 0;
}

.store-btn-ctas a img {
    height: 50px;
}

.store-btn-ctas a:first-of-type {
    margin-right: 20px;
}

.cta-sect {
    width: 100%;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cta {
    position: relative;
    width: 80%;
    height: 400px;
    margin: 60px auto 0;
    border-radius: 30px;
    overflow: hidden;
}

.cta-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.cta-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.649);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.cta-overlay .cta-text {
    font-weight: 700;
    font-size: 40px;
    /* line-height: 55px; */
    text-align: center;
    /* letter-spacing: -0.361111px;  */
    color: #FFFFFF;
    width: 60%;
}

@media screen and (min-width: 1201px) {
    .post-illustration {
        /* background-color: red; */
        right: -160px;
    }

    .community-illustration {
        bottom: -80px;
    }
}

@media screen and (max-width: 1300px) {
    .community-illustration {
        left: -80px;
    }

    .community-mockup {
        width: 470px;
    }
}

@media screen and (max-width: 1200px) {
    .cta-overlay .cta-text {
        width: 80%;
    }

    .feature-illustration {
        width: 320px;
        /* background-color: #1A1A1A; */
    }

    .feature-desc {
        max-width: 50vw;
        width: auto;
    }

    .feature-desc h2 {
        font-size: 20px;
    }

    .feature-desc h3 {
        font-size: 40px;
        width: 90%;
    }

    .feature-text {
        font-size: 20px;
        width: 90%;
    }

    .event-illustration {
        width: 380px;
        height: 320px
    }

    .event-illustration .event-phone-mockup {
        position: absolute;
        left: 16%;
        height: 300px;
    }

    .feature-illustration .event-ticket {
        position: absolute;
        left: -10px;
        top: 20px;
        height: 120px;
    }


    .hero-tent-logo {
        width: 80px;
    }

    .hero-overlay h1 {
        width: 90%;
        margin: 40px 0 0;
        font-size: 50px;
    }

    .hero-overlay h2 {
        margin: 40px 0 0;
        width: 50%;
        font-size: 20px;
    }

    .post-illustration .post-mockup1 {
        width: 300px;
        left: -190px;
    }

    .post-illustration .post-mockup2 {
        width: 200px;
    }

}

@media screen and (max-width: 900px) {
    .cta-overlay .cta-text {
        font-size: 30px;
    }

    .hero-tent-logo {
        width: 80px;
    }

    .hero-overlay h1 {
        width: 95%;
        margin: 30px 0 0;
        font-size: 45px;
        line-height: 54px;
    }

    .hero-overlay h2 {
        margin: 30px 0 0;
        width: 80%;
        font-size: 20px;
    }

    .feature {
        flex-direction: column;
        text-align: center;
    }

    .feature-desc {
        /* background-color: rebeccapurple; */
        max-width: 75%;
        margin: auto;
    }

    .feature-desc h2 {
        font-size: 20px;
        margin: auto;
    }

    .feature-desc h3 {
        margin: auto;
    }

    .feature-text {
        margin: auto;
    }

    .event-feature {
        padding: 40px 0;
    }

    .event-illustration {
        margin: 30px 0;
        width: 320px;
        height: 300px;
        float: left;
        right: 0;
    }

    .event-illustration .event-phone-mockup {
        position: absolute;
        left: 16%;
        height: 250px;
    }

    .feature-illustration .event-ticket {
        left: -30px;
    }

    .post-illustration {
        /* background-color: rebeccapurple; */
        right: 0;
        height: 55vh;
    }

    .post-illustration .post-mockup1 {
        left: 10px;
    }

    .post-illustration .post-mockup2 {
        display: none;
    }

    .feature.dark-sect {
        padding: 40px 0 0;
    }

    .community-feature {
        padding: 40px 0 0;
        align-items: center;
        flex-direction: column-reverse;
    }

    .community-mockup {
        width: 400px;
    }

    .community-illustration {
        left: -40px;
    }

    .ticket-feature {
        align-items: center;
    }

    .ticket-illustration {
        /* background-color: rebeccapurple; */
        right: auto;
        width: fit-content;
    }

    .ticket-mockup {
        position: relative;
        width: 500px;
        left: -30px;
    }
}

@media screen and (max-width: 600px) {
    .cta-overlay .cta-text {
        font-size: 25px;
        width: 90%;
    }

    .cta {
        width: 90%;
        height: 300px;
    }

    .store-btn-ctas a img {
        height: 35px;
    }

    .hero-tent-logo {
        width: 60px;
    }

    .hero-overlay h1 {
        width: 95%;
        margin: 30px 0 0;
        font-size: 35px;
        line-height: 50px;
    }

    .hero-overlay h2 {
        margin: 30px 0 0;
        width: 90%;
        font-size: 18px;
    }

    .feature-desc {
        /* background-color: rebeccapurple; */
        max-width: 95%;
    }

    .feature-desc h2 {
        font-size: 18px;
    }

    .feature-desc h3 {
        margin: auto;
        font-size: 35px;
        line-height: 30px;
    }

    .community-mockup {
        width: 350px;
    }

    .community-illustration {
        left: -30px;
    }

    .ticket-mockup {
        width: 80vw;
        left: -30px;
    }
}

@media screen and (max-width: 400px) {
    .event-illustration {
        margin: 30px 0;
        width: 280px;
        height: 280px;
    }

    .event-illustration .event-phone-mockup {
        position: absolute;
        left: 14%;
        height: 250px;
    }

    .feature-desc {
        width: 98%;
    }

    .feature-desc h2 {
        font-size: 16px;
    }

    .feature-desc h3 {
        margin: auto;
        font-size: 30px;
    }

    .post-illustration .post-mockup1 {
        left: 10px;
        width: 270px;
    }

}
</style>