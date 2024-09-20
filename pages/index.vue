<template>
    <div class="page-container">
        <Hero />
        <h2 class="tent-desc">
            <span>Discover, book, and share experiences</span> in one app. Tent blends event planning with social media,
            making it
            easy to find and enjoy shared moments.
        </h2>
        <div class="features">
            <div class="feat">
                <div class="feature-txt">
                    <img src="/icons/feat1-icon.svg" alt="" class="feat-txt-icon">
                    <p class="feat-title">
                        Explore top tier events nearby
                    </p>
                    <p class="feat-desc">
                        Discover and attend top-tier events near you, curated to match your interests. Stay in the loop
                        with the best experiences your area has to offer.
                    </p>
                </div>
                <div class="feat-illustration">
                    <img src="/images/feat1.png" alt="" class="feat-img">
                </div>
            </div>
            <div class="feat reverse green">
                <div class="feature-txt">
                    <img src="/icons/feat2-icon.svg" alt="" class="feat-txt-icon">
                    <p class="feat-title">
                        Capture and share ecstatic moments live.
                    </p>
                    <p class="feat-desc">
                        Post your most thrilling experiences, connect instantly with your audience and share the excitement with others.
                    </p>
                </div>
                <div class="feat-illustration">
                    <img src="/images/feat2.png" alt="" class="feat-img">
                </div>
            </div>
            <div class="feat teal">
                <div class="feature-txt">
                    <img src="/icons/feat3-icon.svg" alt="" class="feat-txt-icon">
                    <p class="feat-title">
                        Get event tickets on the go
                    </p>
                    <p class="feat-desc">
                        Never miss out on your favorite events—easily purchase tickets on the go, no matter where you are swiftly and easily.
                    </p>
                </div>
                <div class="feat-illustration">
                    <img src="/images/feat3.png" alt="" class="feat-img">
                </div>
            </div>
            <div class="feat reverse gray">
                <div class="feature-txt">
                    <img src="/icons/feat4-icon.svg" alt="" class="feat-txt-icon">
                    <p class="feat-title">
                        Make reservation
                    </p>
                    <p class="feat-desc">
                        Secure your spot at top restaurants and events instantly. Browse real-time availability, make reservations in seconds.
                    </p>
                </div>
                <div class="feat-illustration">
                    <img src="/images/feat4.png" alt="" class="feat-img">
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>

</script>

<style scoped>
.tent-desc {
    width: 90%;
    margin: 100px auto 80px;
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 72px;
    letter-spacing: -0.02em;
    color: #98A2B3;
}

.tent-desc span {
    color: #101828;
}

.feat {
    width: 90%;
    margin: 10vh auto;
    height: 70vh;
    border-radius: 24px;
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #F3F2FA;
}

.feat.reverse {
    flex-direction: row-reverse;
}

.feat.green {
    background-color: #EBF4F0;
}

.feat.teal {
    background-color: #EBF0F4;
}

.feat.gray {
    background-color: #F2F4F7;
}

.feature-txt {
    width: 40%;
    margin: auto;
    text-align: center;
}
.feat-txt-icon {
    width: 50px;
}
.feature-txt .feat-title {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    text-align: center;
    letter-spacing: -0.938889px;
    margin: 10px 0;
    color: #1A1A1A;
}

.feature-txt .feat-desc {
    font-family: 'SF Pro Display';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #475467;
}

.feat .feat-illustration {
    width: 45%;
    height: 100%;
    background-color: #6B66DA;
    border-radius: 24px;
    position: relative;
    overflow: hidden;
}

.feat.green .feat-illustration {
    background-color: #2B936D;
}

.feat.teal .feat-illustration {
    background-color: #2B7493;
}

.feat.gray .feat-illustration {
    background-color: #6F6585;
}

.feat-illustration .feat-img {
    width: 100%;
    margin: auto;
    position: absolute;
    bottom: 0;
}
</style>