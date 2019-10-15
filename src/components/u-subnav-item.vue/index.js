export default {
    name: 'u-subnav-item',
    parentName: 'u-subnav',
    props: {
        title: { type: String, default: '' },
        to: { type: String, default: '' },
    },
    data() {
        return {
            isCurrent: false,
        };
    },
    methods: {
        onClick() {
            this.$router.push(this.to);
        },
    },
};
