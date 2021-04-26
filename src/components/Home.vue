<template>
    <div>
        <h1>Home Page</h1>
        <p><router-link to="user/1">Anil</router-link></p>
        <p><router-link to="user/2">Sam</router-link></p>
        <p><router-link to="user/3">Peter</router-link></p>
        <p><router-link to="user/4">Ravi</router-link></p>
    </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>