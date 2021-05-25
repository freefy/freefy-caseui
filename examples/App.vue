
<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
        <fy-button>默认按钮</fy-button>
        <fy-button type="primary">主要按钮</fy-button>
        <fy-button type="success">成功按钮</fy-button>
        <fy-button type="info">信息按钮</fy-button>
        <fy-button type="warning">警告按钮</fy-button>
        <fy-button type="danger">危险按钮</fy-button>
        <br />
        <br />
        <fy-button plain>朴素按钮</fy-button>
        <fy-button type="primary" plain>主要按钮</fy-button>
        <fy-button type="success" plain>成功按钮</fy-button>
        <fy-button type="info" plain>信息按钮</fy-button>
        <fy-button type="warning" plain>警告按钮</fy-button>
        <fy-button type="danger" plain>危险按钮</fy-button>
        <br />
        <br />
        <fy-button round>默认按钮</fy-button>
        <fy-button type="primary" round>主要按钮</fy-button>
        <fy-button type="success" round>成功按钮</fy-button>
        <fy-button type="info" round>信息按钮</fy-button>
        <fy-button type="warning" round>警告按钮</fy-button>
        <fy-button type="danger" round>危险按钮</fy-button>
        <br />
        <br />
        <fy-button disabled>默认按钮</fy-button>
        <fy-button type="primary" disabled>主要按钮</fy-button>
        <fy-button type="success" disabled>成功按钮</fy-button>
        <fy-button type="info" disabled>信息按钮</fy-button>
        <fy-button type="warning" disabled>警告按钮</fy-button>
        <fy-button type="danger" disabled>危险按钮</fy-button>
        <br />
        <br />
        <fy-button type="text">文字按钮</fy-button>
        <fy-button type="text" disabled>文字按钮</fy-button>
        <br />
        <br />
        <fy-button>默认大小</fy-button>
        <fy-button size="middle">中等按钮</fy-button>
        <fy-button size="small">成功按钮</fy-button>
        <fy-button size="mini">信息按钮</fy-button>
    </div>
</template>
<script>
export default {
    name: "App",
    components: {},
};
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
