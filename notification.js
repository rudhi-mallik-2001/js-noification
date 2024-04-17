
// Create a style element
var styleElement = document.createElement('style');

// Set the CSS rules
styleElement.textContent = `.notification-container{display:flex;flex-direction:column;position:fixed;bottom:1%;left:0}.single-notification-container{display:block;position:fixed;left:-50%;background-color:rgba(0,0,0,.5);color:#fff;overflow:hidden;border-radius:10px;animation:1s linear forwards transfor;transition:.5s cubic-bezier(.68, -.55, .27, 1.55)}.remove-single-notification{animation:1s linear forwards transforback;transition:.5s cubic-bezier(.68, -.55, .27, 1.55)}.single-notification-container p{padding:10px 30px 5px 0;margin:10px}.notification-progress-bar{height:5px;background-color:#fff5;animation:3s linear 1.3s forwards decreaseWidth}@keyframes transfor{0%{left:-100%}100%{left:1%}}@keyframes transforback{0%{left:1%}100%{left:-100%}}@keyframes decreaseWidth{0%{width:100%}100%{width:0}}.close-symbol{cursor:pointer;position:absolute;top:5px;right:10px;font-size:20px}.notification-icon{color:#fff}.notification-text-cont{display:flex;align-items:center;padding:2px 0 0 12px}`;

// Append the style element to the head of the document
document.head.appendChild(styleElement);

function creaateNotificationNode(id, text, bgColor, iconcode) {
    var notificationCont = document.createElement('div');
    notificationCont.className = 'single-notification-container';
    notificationCont.style.bottom = id >= 2 ? (id - 1) * 75 + "px" : 2 + "px";
    notificationCont.style.backgroundColor = bgColor;

    // Create the content container
    var contentContainer = document.createElement('div');
    contentContainer.className = 'notification-text-cont';

    // Create the icon
    var icon = document.createElement('span');
    icon.className = 'notification-icon';
    icon.innerHTML = iconcode; // Default icon is info
    contentContainer.appendChild(icon);

    // Create the text
    var textNode = document.createElement('p');
    textNode.className = 'm-0';
    textNode.textContent = text;
    contentContainer.appendChild(textNode);

    notificationCont.appendChild(contentContainer);

    // Create the close symbol
    var closeSymbol = document.createElement('span');
    closeSymbol.className = 'close-symbol';
    closeSymbol.innerHTML = '&times;';
    closeSymbol.onclick = function () {
        hideNotification(notificationCont);
    };

    // Create the Progress bar
    var progressBar = document.createElement('div');
    progressBar.className = 'notification-progress-bar';
    progressBar.addEventListener('animationend', function () {
        hideNotification(notificationCont)
    });
    notificationCont.appendChild(progressBar);

    notificationCont.appendChild(closeSymbol);
    // Add hover effect to pause and resume animation
    notificationCont.addEventListener('mouseenter', function () {
        pauseAnimation(progressBar);
    });

    notificationCont.addEventListener('mouseleave', function () {
        resumeAnimation(progressBar);
    });
    return notificationCont;
}

function createNotification(text, bgColor, icon) {
    // Create the notification container
    var notificationCont = document.getElementById("notification-container");
    var node;
    if (notificationCont) {
        node = creaateNotificationNode(notificationCont?.childElementCount + 1, text, bgColor, icon)
        notificationCont.appendChild(node);
    } else {
        // creating notification container
        notificationCont = document.createElement('div');
        notificationCont.className = 'notification-container';
        notificationCont.id = 'notification-container';
        node = creaateNotificationNode(1, text, bgColor, icon)
        notificationCont.appendChild(node);
        // Append the notification container to the body
        document.body.appendChild(notificationCont);
    }
    return node;
}
const notification = {
    warn: function (text) {
        this.showNotification(text, 'orange', '&#9888;');
    },
    error: function (text) {
        this.showNotification(text, 'red', '&#9888;');
    },
    info: function (text) {
        this.showNotification(text, 'blue', '&#8505;');
    },
    success: function (text) {
        this.showNotification(text, 'green', '&#10003;');
    },
    showNotification: function (text, bgColor, icon) {
        const node = createNotification(text, bgColor, icon)
        // Show notification
    }
};
// JavaScript functions to pause and resume animation
function pauseAnimation(progressBar) {
    progressBar.style.animationPlayState = 'paused';
}

function resumeAnimation(progressBar) {
    progressBar.style.animationPlayState = 'running';
}

// JavaScript function to  hide and remove the notification div
function hideNotification(element) {
    element.classList = "single-notification-container remove-single-notification";
    setTimeout(() => {
        element.remove();
    }, 200)
}