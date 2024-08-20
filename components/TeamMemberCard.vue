<template>
    <div class="team-member-card">
      <img :src="`/images/${member.image}`" :alt="member.name" class="member-photo"/>
      <div class="member-info">
        <h3>{{ member.name }}</h3>
        <p>{{ member.role }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    member: {
      type: Object,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .team-member-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 16px;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }
  
  .team-member-card:hover {
    transform: translateY(-5px);
  }
  
  .member-photo {
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: center;
    border-radius: 12px;
  }
  
  .member-info {
    margin-top: 12px;
  }
  
  .member-info h3 {
    margin: 8px 0;
    font-size: 18px;
  }
  
  .member-info p {
    margin: 0;
    color: #FF5722;
    font-size: 16px;
  }
  </style>
  