module.exports = function (RED) {
    function UILCDNode(config) {
        RED.nodes.createNode(this, config);
        const node = this;

        // Get the dashboard group
        const group = RED.nodes.getNode(config.group);
        const base = group.getBase();

        // Server-side event handlers
        const evts = {
            onAction: true,
            onInput: function (msg, send, done) {
                base.stores.data.save(base, node, msg)
                
                send(msg)
            },
            onSocket: {}
        };

        // Register node with Dashboard UI
        if (group) {
            group.register(node, config, evts);
        } else {
            node.error('No group configured');
        }
    }

    RED.nodes.registerType('ui-lcd', UILCDNode);
};
