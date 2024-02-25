<script setup>
import { ref } from 'vue';

useHead({
    titleTemplate: 'Clientes | NEX_WOD',
});

const route = useRoute();
const Users = await useFetch('http://191.101.70.209:4000/users');
const item = Users.data.value;

const submit = () => {
    return navigateTo('http://191.101.70.209:4000/user')
};

const add = ref(true)
function addClient() {
    add.value = !add.value
}

</script>
<template>
    <div class="bar-top">
        
    </div>
</template>

<style scoped>
body {
    background: var(--color-background);
}


.bar-top {
    height: ;
}

.main-client {
    z-index: 1;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
}

.users {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    z-index: 1;
    margin-bottom: 1rem;
}

.users-full {
    width: 62%;
    z-index: 1;
    background-color: #8D00AB90;
    padding: 10px;
    border-radius: 8px;
    border: solid 3px #8D00AB;
    color: #fff;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
}

.users-details {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: stretch;
    flex-wrap: wrap;
    width: 36%;
    z-index: 1;
    margin-left: -10px;
    height: 100%;
}

.users-details-box {
    border: solid 3px #8D00AB90;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    z-index: 1;
    width: 185px;
    background-color: #8D00AB50;
    height: 185px;
    border-radius: 100%;
    text-align: center;
}
.users-details-box:nth-child(1) {
    border: solid 3px #8D00AB90;
    background-color: #8D00AB90;
}
.users-details-box:nth-child(2) {
    border: solid 3px #8D00AB90;
    background-color: #8D00AB20;
}


.form-cliente {
    border-radius: 50%;
    border: solid 3px #8D00AB;
}

.cliente {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border: solid 3px #8D00AB;
    color: #8D00AB;
}


.file-cliente {
    margin-top: -20px;
    margin-left: 20px;
    zoom: .8;
}



.close {
    position: relative;
    top: -1px;
    right: -6px;
    margin-top: -px;
    zoom: 1.6;
}

.add {
    position: relative;
    top: -40px;
}

.add-client {
    border: solid 1px #8D00AB;
    padding: 2px 7px;
    border-radius: 8px;
    transition: all .5s linear;
    cursor: pointer;
}

.add-client:hover {
    border: solid 1px #fff;
    padding: 2px 7px;
    border-radius: 8px;
    color: #8D00AB;
    background-color: #fff;
}

.length-full {
    color: #fff;
}

.users-full h1 {
    font-size: 3rem;
    margin-bottom: -1rem;
}

.users-full-status {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    color: #8D00AB;
}

.button {
    height: 35px;
    width: 55px;
    text-align: center;
    padding-top: 4px;
    border: solid 2px #fff;
    border-radius: 8px;
    background-color: #8D00AB50;
    cursor: pointer;
}

.green {
    color: #00ff00;
}

.red {
    color: #cf0000;
}

.users-full-status h1 {
    font-size: 1.3rem;
}

.users-full-status h2 {
    font-size: 1.2rem;
}


.center {
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
}

.center-start {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 5px;
    margin-bottom: 4rem;
}

.center-start div a {

    margin: 0 20px;
}

.others {
    z-index: 1;
}

.table-clients {
    width: 100%;
    z-index: 1;
}

.others-full {
    z-index: 1;
    background-color: #8D00AB50;
}

.others-details {
    margin: 0 .5%;
    z-index: 1;
    background-color: #8D00AB30;
    border: solid 3px #8D00AB40;
    border-radius: 8px;
}

.list {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    overflow: auto;
    width: 100%;
    height: 100%;
}

li {
    list-style: none;
}

table {
    width: 99%;
    border-collapse: collapse;
    margin: 0% .5%;
    border: none;
    text-align: center;
}

th,
td {
    border-radius: 6px;
    text-align: left;
    padding: 8px;
    border: none;
}

tr:nth-child(2n -1) {
    background-color: #8D00AB30;
    border-radius: 6px;
}

th {
    position: sticky;
    top: 0px;
    background-color: #8D00AB;
    color: #fff;
    font-weight: 800;
}

.head-logo {
    z-index: 1;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
}

.logo {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    background-color: var(--color-background);
    height: 46px;
    width: 46px;
    color: #718096;
    box-shadow: 0px 7px 20px #8D00AB;
    border-radius: 8px;
    margin: 1rem;
    z-index: 10;
}

.logo img {
    height: 46px;
    width: 46px;
    border-radius: 8px;
    border: #8D00AB 2px solid;
    z-index: 100;
    opacity: 1;
}

.head-name {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    font-family: 'gagalin';
}

.name {
    font-size: 1.6rem;
    margin-left: .1rem;
    color: #8D00AB;
    font-family: 'gagalin';
    font-size: 2rem;
    letter-spacing: 0px;
}

.sections {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    font-family: 'gagalin';
    margin: 1rem 0rem 0rem 0;
    width: 100%;
}

.sections a {
    transition: all .4s linear;
    font-size: 1.2rem;
    margin-left: .1rem;
    color: #8D00AB99;
    font-family: 'gagalin';
    letter-spacing: 0px;
    margin: 0rem 0rem 0rem 0rem;
    width: 100%;
    padding: 12px;
    color: #8D00AB70;
    background-color: #8D00AB60;
    border-bottom: solid 2px #fff;
    cursor: pointer;
}

.sections a .icon {
    margin: 0rem 0rem 0rem 1rem;

}

.sections a:hover {
    color: #8D00AB;
    border-bottom: solid 2px #8D00AB;
}

.sections .activerr {
    padding: 12px;
    color: #fff;
    background-color: #8D00AB;
    border-bottom: solid 2px #8D00AB;
}

.sections .activerr:hover {
    padding: 12px;
    color: #fff;
    background-color: #8D00AB;
    border-bottom: solid 2px #8D00AB;
}

main {
    display: flexbox;
    left: 4px;
}

.whats {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    background-color: #edf2f7;
    height: 40px;
    width: 40px;
    color: #718096;
    box-shadow: 1px 1px 15px #8D00AB50;
    transition: all 0.2s ease-in-out 0s;
    bottom: 3.5rem;
    right: 1.5rem;
    border-radius: 50%;
    cursor: pointer;
    z-index: 100;
}

.whats:hover {
    background-color: #8D00AB10;
    color: #8D00AB80;
    box-shadow: 1px 1px 15px #8D00AB80;
    z-index: 100;
}

.inputs {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
}

.inputs div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
}


input {
    margin: .5rem auto;
    transition: all .4s linear;
    border: solid 1px #8D00AB10;
    box-shadow: 0 0px 5px #8D00AB10;
    border-radius: 8px;
    text-align: left;
    color: #718096;
    line-height: 18px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    height: 34px;
    font-size: 14px;
    padding-inline: 16px;
    padding-top: 8px;
    padding-bottom: 8px;

}

input::placeholder {
    color: #71809690;
}

.inputs div h4 {
    text-align: left;
}

input:focus {
    background-color: #8D00AB10;
    border-color: #8D00AB80;
    color: #718096;
}

input:focus-visible {
    background-color: #8D00AB10;
    border: solid 1px #8D00AB;
    color: #718096;
}

input:active {
    background-color: #8D00AB10;
    border-color: #8D00AB80;
    color: #718096;
}

input:hover {
    background-color: #8D00AB10;
}

h4 {
    color: #718096;
    transition: all .3s linear;
    margin: 0 0 0 10px;
    text-align: left;
}

h4:nth-child(1) {
    color: #718096;
    transition: all .3s linear;
    margin: 20px 0 0 10px;
}


.login {
    transition: all .4s linear;
    border: solid 1px #8D00AB10;
    box-shadow: 0 0px 5px #8D00AB10;
    border-radius: 8px;
    cursor: pointer;
    width: 160px;
    text-align: center;
    color: #718096;
    line-height: 18px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    height: 34px;
    font-size: 14px;
    padding-inline: 16px;
    padding-top: 7px;
    padding-bottom: 8px;
    margin: 1rem 1.5rem;
}

.login .icon {
    margin: -2px 0px 2px 4px;
    transition: transform .3s linear;
}

.login:hover {
    cursor: pointer;
    background-color: #8D00AB10;
    color: #8D00AB80;

    padding-inline: 16px;
    padding-top: 7px;
    padding-bottom: 8px;
    margin: 1rem 1.5rem;
}

.login:hover .icon {
    margin: -2px 0px 2px 4px;
    transform: translateX(6px);
}

.pop-up {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 20px 20px 20px;
    background-color: #8D00AB;
    color: #fff;
    padding: 15px;
    border-radius: 8px;
    position: fixed;
    bottom: 10px;
    width: 80%;
    left: 50%;
    margin-left: -40%;
    font-weight: 900;
    border: solid 1px #8D00AB10;
    z-index: 10000;
}

.pop-up p {
    font-weight: 700;
    font-weight: 900;
    font-size: 13px;
}

.button-pop {
    margin: 7px auto 0 auto;
    transition: all .4s linear;
    border: solid 1px #8D00AB;
    box-shadow: 0 0px 5px #8D00AB10;
    border-radius: 8px;
    cursor: pointer;
    width: 50%;
    text-align: center;
    background-color: #8D00AB;
    color: #fff;
    border: solid 1px #fff;
}

.button-pop:hover {
    background-color: #fff;
    border: solid 1px #8D00AB10;
    color: #8D00AB;
}</style>