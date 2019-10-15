export default {
    name: 'u-subnav',
    childrenName: 'u-subnav-item',
    props: {
        title: { type: String, default: '' },
    },
    data() {
        return {
            itemVMs: [],
            currentVM: null,
            show: false,
        };
    },
    methods: {
        onMouseover() {
            this.show = true;
        },
        onMouseout() {
            this.show = false;
        },
    },
};
