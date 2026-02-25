function copyText(btnElement, elementId) {
    const el = document.getElementById(elementId);
    if (!el.value) return;

    el.select();
    el.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(el.value).then(() => {
        // 給予簡單的視覺回饋（將複製圖示改為打勾圖示，過一陣子改回來）
        const icon = btnElement.querySelector('i');
        if (icon) {
            icon.className = 'bi bi-check2 text-success';
            setTimeout(() => { icon.className = 'bi bi-copy text-body'; }, 1500);
        }
    }).catch(() => {
        alert("複製失敗，請手動複製");
    });
}
