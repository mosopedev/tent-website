<template>
    <div class="privacy-policy">
        <NavBar />

        <section class="content">
            <h1>Privacy Policy</h1>
            <p>Last updated: August 18, 2024</p>

            <p>Your privacy is important to us. It is Tent Inc.'s policy to respect your privacy regarding any
                information we may collect from you across our website, <NuxtLink to="/">Tent App</NuxtLink>, and other
                sites we own and operate.</p>

            <h2>1. Information We Collect</h2>
            <p>We collect information directly from you when you use our app, including:</p>
            <ul>
                <li>Personal data (e.g., name, email address)</li>
                <li>Usage data (e.g., pages visited, time spent on the app)</li>
                <li>Location data (e.g., your physical location via GPS)</li>
            </ul>

            <h2>2. How We Use Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
                <li>Provide and maintain our services</li>
                <li>Improve and personalize your experience</li>
                <li>Communicate with you about updates, offers, and promotions</li>
            </ul>

            <h2>3. Data Security</h2>
            <p>We implement a variety of security measures to protect your personal data. However, please note that no
                method of transmission over the internet, or method of electronic storage is 100% secure.</p>

            <h2>4. Sharing Your Information</h2>
            <p>We do not share your personal information with third parties except:</p>
            <ul>
                <li>When required by law</li>
                <li>When necessary to protect our rights</li>
                <li>With your consent</li>
            </ul>

            <h2>5. Your Rights</h2>
            <p>You have the right to access, update, or delete your personal information. To exercise these rights,
                please contact us at support@tentapp.com.</p>

            <h2>6. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page.</p>

            <p>If you have any questions about this Privacy Policy, please contact us at support@tentapp.com.</p>
        </section>

        <Footer />
    </div>
</template>

<script setup>
</script>

<style scoped>
.privacy-policy {
    background-color: #1A1A1A;
}

.content {
    max-width: 800px;
    margin: 40px auto 180px;
    padding: 0 20px;
    color: #fff;
}

.content h1 {
    font-size: 36px;
    margin-bottom: 20px;
}

.content h2 {
    font-size: 24px;
    margin-top: 20px;
}
</style>