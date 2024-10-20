<template>
    <AboutHero  />
    <section class="about-us">
        <div class="header">
            <div class="top-rw">
                <h2>History</h2>
            </div>
            <p class="team-mission sm">
                Tent began with a passion for making events more accessible and engaging for everyone. Our founders recognized the challenges of event discovery and management and set out to create a platform that simplifies these processes for users and creators alike. What started as a small project has now grown into a leading platform that bridges the gap between event-goers and organizers, making each event a memorable journey.
            </p>
        </div>
        <div class="header">
            <div class="top-rw">
                <h2>Meet Out Team</h2>
                <div class="socials">
                    <NuxtLink to="/">
                        <img src="/public//icons/linkedin.svg" alt="" />
                    </NuxtLink>
                    <NuxtLink to="/">
                        <img src="/public//icons/instagram.svg" alt="" />
                    </NuxtLink>
                    <NuxtLink to="/">
                        <img src="/public//icons/twitter.svg" alt="" />
                    </NuxtLink>
                </div>
            </div>
            <p class="team-mission">
                Discover the passionate team that drives our mission forward.
            </p>
        </div>
        <div class="team-grid">
            <TeamMemberCard v-for="member in teamMembers" :key="member.name" :member="member" />
        </div>
    </section>
    <Footer />
</template>

<script setup>
import TeamMemberCard from "~/components/TeamMemberCard.vue";

const teamMembers = [
    { name: "Tega Edah-Dike", role: "Founder", image: "member1.png" },
    { name: "Alfred Onuada", role: "Backend Engineer", image: "member1.png" },
    { name: "Fortune Onwe", role: "Technical Project Manager", image: "member1.png" },
    { name: "Orevba John", role: "Product Designer", image: "member1.png" },
    { name: "Samuel Akujor", role: "Software Engineer", image: "member1.png" },
    { name: "Omolayo Junaid", role: "Product Manager", image: "member1.png" },
];
</script>

<style scoped>
.about-us {
    padding: 50px 20px;
    max-width: 1200px;
    margin: 5vh auto 10vh;
    /* text-align: center; */
}

.header {
    margin-bottom: 50px;
    /* background-color: #ff5722; */
}

.header .logo {
    width: 60px;
    margin-bottom: 20px;
}


.top-rw {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.top-rw h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    letter-spacing: -0.433333px;
    color: #FF5722;
}

.socials {
    display: flex;
    gap: 20px;
}

.team-mission {
    margin: 20px 0 0;
    font-weight: 600;
    font-size: 40px;
    /* line-height: 52px; */
    /* letter-spacing: -0.758333px; */
    color: #1A1A1A;
    width: 50%;
}

.team-mission.sm{
    margin: 20px 0 0;
    font-weight: 500;
    font-size: 22px;
    color: #1A1A1A;
    width: 100%;
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 350px));
    justify-content: center;
    align-items: center;
    gap: 50px;
}

@media screen and (max-width: 900px) {
    .team-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
        /* justify-content: space-between; */
        gap: 20px;
    }

    .team-mission {
    font-size: 35px;
    width: 80%;
}
}

@media screen and (max-width: 500px) {
    .top-rw h2 {
    font-size: 20px;
}

.socials {
    gap: 10px;
}

.socials img {
    width: 26px;
}

    .team-mission {
    font-size: 28px;
    width: 90%;
}
}
</style>
