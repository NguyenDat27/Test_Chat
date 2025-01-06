import React from "react";
import Picker from "emoji-picker-react";
import { useTheme } from "@/ThemeProvider";

export default function EmojiPicker({ onEmojiClick }) {

    const { theme } = useTheme();
    return (
        <div className="emoji-picker-wrapper">
        <Picker 
            onEmojiClick={onEmojiClick}
            reactionsDefaultOpen={true}
            theme={theme === "dark" ? "dark" : "light"}
            />
        </div>
    );
};