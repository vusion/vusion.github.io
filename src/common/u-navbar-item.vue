<script>
import NavbarItem from 'proto-ui.vusion/src/u-navbar-item.vue';

export default NavbarItem;
</script>

<style module>
@import 'proto-ui.vusion/src/u-navbar-item.vue/module.css';

.root {
    color: inherit;
    transition: all $transition-duration;
}

.root:hover {
    color: $brand-primary;
}

.root[selected] {
    color: $brand-primary;
}
</style>
