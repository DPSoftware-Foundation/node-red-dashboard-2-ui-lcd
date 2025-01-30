# Character LCD for Node-Red Dashboard 2

This repository contain a Character LCD node for Node-RED Dashboard 2. This node add LCD display to your dashboard ui.

![image](https://github.com/user-attachments/assets/a381a668-ec34-4096-a500-2dd6a1a12df3)
![image](https://github.com/user-attachments/assets/e142e841-ca8b-4856-9a5c-ee66ab31e440)


# Features
- Realtime dynamic update
- Customizable characters (Experiment)

# Configuration

![image](https://github.com/user-attachments/assets/94f823b0-55e8-45f9-b0db-bf8400fae138)


- Rows: Set rows of LCD.
- Columns: Set columns of LCD.
- Pixel Size: Set Size per pixel in LCD.
- Space Size: Set space size between pixel in LCD.
- Backlight Color: Set Backlight color in LCD (Pixel off).
- Pixel Color: Set Color of pixel in LCD (Pixel on)
- Auto Clear: Enable auto clear text every time when change text.
- ROM: Set ROM of LCD. **JP** for Japanese standard font, or **EU** for European standard font.

# Custom Characters

This Node allows you to send custom characters to an LCD display in Node-RED. You can easily create custom characters using the **LCD Character Creator** tool and send them to your display.

1. **Create a Custom Character:**
   - Go to [LCD Character Creator](https://maxpromer.github.io/LCD-Character-Creator/).
   - Design your custom character.
   - Set the "Data Type" option to "Hex."
   - Copy the generated hex values for the custom character.

2. **Format the Custom Character Payload:**
   After generating the hex values, you need to format the data into an array before sending it to the LCD display.

   Example of how to set the custom character:

   ```js
   msg.setCusChar = [
       0x1F,
       0x1F,
       0x1F,
       0x1F,
       0x1F,
       0x1F,
       0x1F,
       0x1F
   ];

   return msg;
   ```

   - `msg.setCusChar` should contain the hex values of the custom character.
   - You can adjust the array to match the design of your custom character.

3. **Send the Payload:**
   Once the payload is formatted, send it to your LCD display using the appropriate function or node to update the display with your custom character.

![image](https://github.com/user-attachments/assets/9835aa98-5c27-441c-b292-7ece42c76291)

# Example
This is a example for using LCD.
```json
[
    {
        "id": "b24dccc8209e55a6",
        "type": "ui-markdown",
        "z": "17198d95159c5227",
        "g": "263938e8e63c7ffe",
        "group": "107dfe8bb2eafbe2",
        "name": "",
        "order": 1,
        "width": 0,
        "height": 0,
        "content": "This Node allows you to send custom characters to an LCD display in Node-RED. You can easily create custom characters using the **LCD Character Creator** tool and send them to your display.\n\n### Steps to Create and Send Custom Characters\n\n1. **Create a Custom Character:**\n   - Go to [LCD Character Creator](https://maxpromer.github.io/LCD-Character-Creator/).\n   - Design your custom character.\n   - Set the \"Data Type\" option to \"Hex.\"\n   - Copy the generated hex values for the custom character.\n\n2. **Format the Custom Character Payload:**\n   After generating the hex values, you need to format the data into an array before sending it to the LCD display.\n\n   Example of how to set the custom character:\n\n   ```js\n   msg.cusChar = [\n       0x1F,\n       0x1F,\n       0x1F,\n       0x1F,\n       0x1F,\n       0x1F,\n       0x1F,\n       0x1F\n   ];\n\n   return msg;\n   ```\n\n   - `msg.cusChar` should contain the hex values of the custom character.\n   - You can adjust the array to match the design of your custom character.\n\n3. **Send the Payload:**\n   Once the payload is formatted, send it to your LCD display using the appropriate function or node to update the display with your custom character.\n\n",
        "className": "",
        "x": 350,
        "y": 500,
        "wires": [
            []
        ]
    },
    {
        "id": "107dfe8bb2eafbe2",
        "type": "ui-group",
        "name": "LCD Custom Character ",
        "page": "f72914043b649b14",
        "width": 6,
        "height": 1,
        "order": 1,
        "showTitle": true,
        "className": "",
        "visible": "true",
        "disabled": "false",
        "groupType": "default"
    },
    {
        "id": "f72914043b649b14",
        "type": "ui-page",
        "name": "Page 1",
        "ui": "2855b80470e86e6b",
        "path": "/page1",
        "icon": "home",
        "layout": "grid",
        "theme": "47ff0fe3a42d3e83",
        "breakpoints": [
            {
                "name": "Default",
                "px": 0,
                "cols": 3
            },
            {
                "name": "Tablet",
                "px": 576,
                "cols": 6
            },
            {
                "name": "Small Desktop",
                "px": 768,
                "cols": 9
            },
            {
                "name": "Desktop",
                "px": 1024,
                "cols": 12
            }
        ],
        "order": 1,
        "className": "",
        "visible": "true",
        "disabled": "false"
    },
    {
        "id": "2855b80470e86e6b",
        "type": "ui-base",
        "name": "My Dashboard",
        "path": "/dashboard",
        "appIcon": "",
        "includeClientData": true,
        "acceptsClientConfig": [
            "ui-notification",
            "ui-control"
        ],
        "showPathInSidebar": false,
        "headerContent": "page",
        "navigationStyle": "default",
        "titleBarStyle": "default",
        "showReconnectNotification": true,
        "notificationDisplayTime": 1,
        "showDisconnectNotification": true
    },
    {
        "id": "47ff0fe3a42d3e83",
        "type": "ui-theme",
        "name": "Default Theme",
        "colors": {
            "surface": "#ffffff",
            "primary": "#0094CE",
            "bgPage": "#eeeeee",
            "groupBg": "#ffffff",
            "groupOutline": "#cccccc"
        },
        "sizes": {
            "density": "default",
            "pagePadding": "12px",
            "groupGap": "12px",
            "groupBorderRadius": "4px",
            "widgetGap": "12px"
        }
    }
]
```

# License

This project is licensed under the **Apache-2.0**. See the [LICENSE](LICENSE).

[`char-lcd`](https://github.com/jazz-soft/char-lcd) is licensed under the **MIT license**.
