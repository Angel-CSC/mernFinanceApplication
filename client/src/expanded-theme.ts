import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
    /*
    The types are being grabbed from imports
    
    The components of these are being extended, a key and a string are being added for PaletteColor
    tertiary key is being added, and this will have a PaletteColor in it

    This would be the way of expanding the elements of whatever component is being imported
    */
    interface PaletteColor {
        [key: number]: string;
    }

    interface Palette {
        tertiary: PaletteColor;
    }
}