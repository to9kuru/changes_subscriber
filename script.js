function showSubscriberCount() {
    const channelNameInput = document.getElementById('channelName');
    const initialNumberInput = document.getElementById('initialNumber');
    const changedNumberInput = document.getElementById('changedNumber');
    const channelName = channelNameInput.value.trim();
    const initialNumber = initialNumberInput.value.trim();
    const changedNumber = changedNumberInput.value.trim();
    const channelTitle = document.getElementById('channelTitle');
    const channelIcon = document.getElementById('channelIcon');
    const subscriberCount = document.getElementById('subscriberCount');
    const inputContainer = document.getElementById('inputContainer');
    const displayContainer = document.getElementById('displayContainer');

    if (channelName && channelIcon.src && initialNumber && changedNumber) {
        channelTitle.textContent = channelName;
        subscriberCount.textContent = initialNumber;
        inputContainer.style.display = 'none';
        displayContainer.style.display = 'flex';

        // 一定時間後に数字をフェードアウトしてから新しい数字をフェードイン
        setTimeout(() => {
            subscriberCount.style.opacity = '0';
            setTimeout(() => {
                subscriberCount.textContent = changedNumber;
                subscriberCount.style.opacity = '1';
            }, 1000); // 1秒後に新しい数字をフェードイン
        }, 3000); // 3秒後に数字をフェードアウト
    } else {
        alert("Please enter all fields.");
    }
}

document.getElementById('iconInput').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const img = document.getElementById('channelIcon');
        img.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
});
