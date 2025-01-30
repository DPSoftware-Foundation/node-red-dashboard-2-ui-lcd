<template>
    <span v-if="Label">{{ Label }}</span>
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
            lcd: null // LCD instance
        }
    },
    computed: {
        ...mapState('data', ['messages']),
        lcdId() {
            // Use the unique ID passed as prop to dynamically assign the id to the LCD container
            return 'lcd-' + this.id; // Example: 'lcd-uniqueId'
        },
        Label() {
            return this.props.label || 'LCD';
        }
    },
    mounted() {
        // Initialize LCD Display with a unique ID
        this.lcd = new CharLCD({
            at: this.lcdId, 
            rows: this.props.rows || 2, 
            cols: this.props.cols || 16, 
            rom: this.props.rom || 'eu',
            pix: this.props.pixel_size || 3,
            brk: this.props.space_size || 1,
            off: this.props.backlight_color || '#ccdd22',
            on: this.props.pixel_color || '#474d0b'
        });

        this.$socket.on('widget-load:' + this.id, (msg) => {
            // Load the latest message from the Node-RED datastore when this widget is loaded
            this.$store.commit('data/bind', {
                widgetId: this.id,
                msg
            })

            this.updateLCD(msg);
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
            // Auto clear condition: Check if msg.setChar exists or fallback to this.props.auto_clear            
            if ((this.props.auto_clear) || msg.clear) {
                this.lcd.clear();
            }

            var row = msg.row || 0;
            var col = msg.col || 0;

            console.log(row);
            console.log(col);

            if (msg.cusChar && Array.isArray(msg.cusChar)) {
                this.lcd.set(row, col, msg.cusChar);
            } 

            this.lcd.text(row, col, (msg.text?.toString() || msg.payload?.toString()) ?? "");
        }
    }
}
</script>
