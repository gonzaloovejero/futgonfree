<script>
import "@/styles/TableChannels/TableChannels.styl";
export default {
    data() {
        return {
            lista: [
                {
                    texto: "TYC SPORTS",
                    expandido: false
                },
                {
                    texto: "TYC SPORTS INTERNACIONAL",
                    expandido: false
                },
                {
                    texto: "ESPN 1",
                    expandido: false
                },
                {
                    texto: "ESPN 2",
                    expandido: false
                },
                {
                    texto: "ESPN 3",
                    expandido: false
                },
                {
                    texto: "ESPN EXTRA",
                    expandido: false
                },
                {
                    texto: "DIRECTV 1",
                    expandido: false
                },
                {
                    texto: "DIRECTV 2",
                    expandido: false
                },
                {
                    texto: "DIRECTV PLUS",
                    expandido: false
                },
                {
                    texto: "TNT SPORTS",
                    expandido: false
                },
                {
                    texto: "FOX SPORTS 1",
                    expandido: false
                },
                {
                    texto: "FOX SPORTS 2",
                    expandido: false
                },
                {
                    texto: "FOX SPORTS PLUS",
                    expandido: false
                }
            ],
            mostrarVideo: false,
            urlVideo: "",
        };
    },
    methods: {
        expandir(index) {
            this.lista.forEach((item, i) => {
                item.expandido = i === index ? !item.expandido : false;
            });
        },
        redireccionar(item) {
            if (item.texto === "TYC SPORTS") {
                this.urlVideo = "https://tutele1.net/online.php?a=1204";
                this.mostrarVideo = true;
            } else if (item.texto === "TYC SPORTS INTERNACIONAL") {
                this.urlVideo = "https://tutele1.net/online.php?a=37718";
                this.mostrarVideo = true;
            } else if (item.texto === "ESPN 1") {
                this.urlVideo = " https://tutele1.net/online.php?a=1 ";
                this.mostrarVideo = true;
            } else if (item.texto === "ESPN 2") {
                this.urlVideo = " https://tutele1.net/online.php?a=2 ";
                this.mostrarVideo = true;
            } else if (item.texto === "ESPN 3") {
                this.urlVideo = " https://tutele1.net/online.php?a=3 ";
                this.mostrarVideo = true;
            } else if (item.texto === "ESPN EXTRA") {
                this.urlVideo = " https://tutele1.net/online.php?a=4674 ";
                this.mostrarVideo = true;
            } else if (item.texto === "DIRECTV 1") {
                this.urlVideo = " https://tutele1.net/online.php?a=6 ";
                this.mostrarVideo = true;
            } else if (item.texto === "DIRECTV 2") {
                this.urlVideo = " https://tutele1.net/online.php?a=7 ";
                this.mostrarVideo = true;
            } else if (item.texto === "DIRECTV PLUS") {
                this.urlVideo = " https://tutele1.net/online.php?a=8 ";
                this.mostrarVideo = true;
            } else if (item.texto === "TNT SPORTS") {
                this.urlVideo = " https://tutele1.net/online.php?a=149 ";
                this.mostrarVideo = true;
            } else if (item.texto === "FOX SPORTS 1") {
                this.urlVideo = " https://tutele1.net/online.php?a=132 ";
                this.mostrarVideo = true;
            } else if (item.texto === "FOX SPORTS 2") {
                this.urlVideo = " https://tutele1.net/online.php?a=133 ";
                this.mostrarVideo = true;
            } else if (item.texto === "FOX SPORTS PLUS") {
                this.urlVideo = " https://tutele1.net/online.php?a=4673 ";
                this.mostrarVideo = true;
            }
        },
    },
};
</script>

<template>
    <div class="table-channels-container">
        <div class="flex-center">
            <ul class="list-channels">
                <li v-for="(item, index) in lista" :key="index" @click="redireccionar(item)" class="main-items">
                    <span>{{ item.texto }}</span>
                </li>
            </ul>

            <div v-if="mostrarVideo" class="video-popup">
                <div class="video-popup-content">
                    <button class="close-button" @click="mostrarVideo = false">Cerrar</button>
                    <iframe :src="urlVideo" width="100%" height="600px" frameborder="0" webkitallowfullscreen="true"
                        mozallowfullscreen="true" msExitFullscreen="true" allowfullscreen="true"
                        allow="encrypted-media autoplay" scrolling="no"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>