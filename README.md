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
- Transition Duration (1.2+): Set Blur for pixel transition.

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

# License

This project is licensed under the **Apache-2.0**. See the [LICENSE](LICENSE).

[`char-lcd`](https://github.com/jazz-soft/char-lcd) is licensed under the **MIT license**.
