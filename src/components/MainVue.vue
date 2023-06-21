<script>
import "@/styles/MainVue.styl";
import NavBar from "@/components/Navbar/NavBar.vue";
import TableChannels from "./TableChannels/TableChannels.vue";

export default {
    components:{
        NavBar,
        TableChannels
    }
}
</script>


<template>
    <div class="main-vue-container">

        <div class="nav-bar">
            <NavBar />
        </div>

        <div class="table-channels">
            <TableChannels />
        </div>

    </div>
</template>


<style scoped></style>