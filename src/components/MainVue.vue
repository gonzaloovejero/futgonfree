<script>
import "@/styles/MainVue.styl";
import NavBar from "@/components/Navbar/NavBar.vue";
import TableChannels from "./TableChannels/TableChannels.vue";

export default {
    components: {
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

        <div class="explain">
            <div class="centralize-explain">
                <span><b>Futgon</b> es solo un sitio web de incrustación de videos y no aloja ningún tipo de video. Todos
                    los
                    videos aquí son de sitios web de terceros. Comuníquese con el sitio web de alojamiento de videos
                    apropiado
                    para eliminar cualquier video.
                    <b>Es un sitio creado para que puedan ver futbol gratis, estoy trabajando todos los dias para mantener
                        el
                        sitio correctamente
                        y mejorarlo.
                        Es un sustento propio de mi bolsillo, si quieres colaborar para mantener el sitio, debajo se
                        encuentra
                        mi alias de Mercado Pago. Muchas Gracias y Disfrutá!
                    </b>
                </span>
            </div>
        </div>

        <div class="table-channels">
            <TableChannels />
        </div>

        <div class="donations">
            <img src="../assets/mercado-pago-Logo.png" class="mp-logo">
            <h1>Donaciones: </h1>
            <span><b>gonza.sdt.mp</b></span>
        </div>

    </div>
</template>


<style scoped></style>