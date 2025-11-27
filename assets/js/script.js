document.addEventListener('DOMContentLoaded', () => {
    
    const loginForm = document.getElementById('form-login-system');
    const createBtn = document.getElementById('btn-create-account');
    const resultArea = document.getElementById('account-result-area');
    
    if (loginForm) {
        
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const usernameInput = document.getElementById('inp-username').value;
            const passwordInput = document.getElementById('inp-password').value;
            
            const savedUser = localStorage.getItem('active_user');
            const savedPass = localStorage.getItem('active_pass');
            
            if (usernameInput === savedUser && passwordInput === savedPass) {
                window.location.href = 'choose.html';
            } else {
                alert('ACCESS DENIED. System Integrity Check Failed.');
            }
        });
        
        createBtn.addEventListener('click', function() {
            createBtn.innerHTML = '>> CONNECTING TO SERVER...';
            createBtn.disabled = true;
            
            setTimeout(() => {
                const randomId = Math.floor(Math.random() * 90000) + 10000;
                const newUsername = 'XAYZ-' + randomId;
                const newPassword = Math.random().toString(36).slice(-10);
                
                localStorage.setItem('active_user', newUsername);
                localStorage.setItem('active_pass', newPassword);
                
                createBtn.innerHTML = '>> ACCOUNT GENERATED';
                resultArea.classList.add('active');
                
                document.getElementById('display-user').innerText = newUsername;
                document.getElementById('display-pass').innerText = newPassword;
                
                document.getElementById('inp-username').value = newUsername;
                document.getElementById('inp-password').value = newPassword;
                
            }, 3000);
        });
    }
});

function navigateToLite() {
    window.location.href = 'lite.html';
}

function navigateToPro() {
    window.location.href = 'pro.html';
}

function redirectExternal(type, version) {
    if (type === 'lite') {
        window.location.href = 'https://xayzpro.vercel.app/lite/' + version;
    } else if (type === 'pro') {
        window.location.href = 'https://xayzpro.vercel.app/pro/' + version;
    }
              }
