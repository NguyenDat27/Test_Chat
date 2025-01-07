import validator from 'validator';

export const handleImageClick = (fileInputRef) => {
    fileInputRef.current.click();
};

export const onEmojiClick = (EmojiClickData, setInputStr, setShowEmojiPicker) => {
    setInputStr(prev => prev + EmojiClickData.emoji);
    setShowEmojiPicker(false);
};

export const handleFileChange = (event, setImageList) => {
    const files = Array.from(event.target.files);

    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = function(event) {
            setImageList((prevList) => [...prevList, event.target.result]);
        };
        reader.readAsDataURL(file);
    });
};

export const handleRemoveImage = (index, setImageList) => {
    setImageList(prevImages => prevImages.filter((_, i) => i !== index));
};

export const handleInput = (e, setInputStr) => {
    let html = e.currentTarget.innerHTML;
    html = html.replace(/<br>/g, '<br/>');
    html = html.replace(/&nbsp;/g, ' ');
    setInputStr(html);
};

export const handlePaste = (event, setImageList) => {
    event.preventDefault();
    const clipboardData = event.clipboardData;
    const items = clipboardData.items;

    for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf("image") !== -1) {
        const file = items[i].getAsFile();
        const reader = new FileReader();
        reader.onload = function(event) {
            setImageList((prevList) => [...prevList, event.target.result]);
        };
        reader.readAsDataURL(file);
        } else {
        const text = clipboardData.getData("text");
        document.execCommand("insertText", false, text);
        }
    }
};

export const isUrlValue = (value) => {
    if (validator.isURL(value)) {
        return true;
    } else {
        return false;
    }
}