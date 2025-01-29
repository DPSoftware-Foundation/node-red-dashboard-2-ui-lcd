<template>
    <div :id="lcdId"></div>
</template>

<script>
import { mapState } from 'vuex'
import { CharLCD } from 'char-lcd';

export default {
    name: 'LCD',
    inject: ['$socket'],
    props: {
        id: { type: String, required: true },
        props: { type: Object, default: () => ({}) },
        state: { type: Object, default: () => ({ enabled: false, visible: false }) }
    },
    data () {
        return {
            lcd: null, // LCD instance
        }
    },
    computed: {
        ...mapState('data', ['messages']),
        lcdId() {
            // Use the unique ID passed as prop to dynamically assign the id to the LCD container
            return 'lcd-' + this.id; // Example: 'lcd-uniqueId'
        }
    },
    mounted() {
        // Initialize LCD Display with a unique ID
        this.lcd = new CharLCD({ at: this.lcdId, rows: 2, cols: 16, rom: 'eu' });

        this.$socket.on('widget-load:' + this.id, (msg) => {
            // Load the latest message from the Node-RED datastore when this widget is loaded
            this.$store.commit('data/bind', {
                widgetId: this.id,
                msg
            })
        })
        this.$socket.on('msg-input:' + this.id, (msg) => {
            // Store the latest message in the client-side vuex store
            this.$store.commit('data/bind', {
                widgetId: this.id,
                msg
            });

            this.updateLCD(msg);
        })

        // Notify Node-RED that we're loading a new instance of this widget
        this.$socket.emit('widget-load', this.id)
    },
    methods: {
        updateLCD(msg) {
            if (msg.)

            if (msg.row !== undefined && msg.col !== undefined && msg.text) {
                this.lcd.text(msg.row, msg.col, msg.text.toString() || msg.payload.toString());
            } else {
                this.lcd.text(0, 0, msg.payload.toString());
            }
        }
    }
}
</script>
