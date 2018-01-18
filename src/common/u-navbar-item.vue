<script>
import NavbarItem from 'proto-ui.vusion/src/u-navbar-item.vue';

export default NavbarItem;
</script>

<style module>
@import 'proto-ui.vusion/src/u-navbar-item.vue/module.css';

.root {
    height: 68px;
    line-height: 68px;
    color: inherit;
    transition: all $transition-duration;
}

.root:after {
    content: '';
    position: absolute;
    bottom: 0;
    height: 3px;
    width: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: currentColor;
}

.root:hover {
    color: white;
}

.root[selected] {
    color: white;
}

.root:hover:after {
    transition: width 0.5s;
    width: 100%;
}

.root[selected] {
    color: white;
}

.root[selected]:after {
    width: 100%;
}

.root[disabled] {
    color: rgba(255,255,255,0.5);
}

.root[disabled]:after {
    width: 0;
}
</style>
