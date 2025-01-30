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
            beforeSend: function (msg) {
                const updates = msg.ui_update
                if (updates) {
                    if (typeof (updates.label) !== 'undefined') {
                        base.stores.state.set(group.getBase(), node, msg, 'label', updates.label)
                    }
                }
                return msg
            },
            onInput: function (msg, send, done) {
                base.stores.data.save(base, node, msg)
                
                send(msg)
            },
            onSocket: {
                connect: function (socket) {
                    // Send the configuration values to the client-side widget
                    socket.emit('widget-config:' + node.id, config);
                }
            }
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